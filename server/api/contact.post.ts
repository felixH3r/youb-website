import { Resend } from "resend";

// Redundant initialization removed to fix shadowing and unused var error

const AUDIENCE_MAP: Record<string, string> = {
  running: "6bd10acb-533c-477e-b344-a237990b61c8",
  cycling: "167b6254-28a9-4aff-8fab-a9d301686bab",
  triathlon: "d96097c7-344e-46df-ace7-e147eae3167f",
  other: "d96097c7-344e-46df-ace7-e147eae3167f",
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, message, sport } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email is required",
    });
  }

  try {
    console.log("Processing submission for:", email);

    // 1. If it's a waitlist signup (has sport), add to audience
    if (sport) {
      const audienceId = AUDIENCE_MAP[sport];
      if (audienceId) {
        await resend.contacts.create({
          email,
          firstName: name,
          unsubscribed: true,
          audienceId,
          properties: { status: "pending" },
        });

        // Create verification link
        const token = Buffer.from(
          JSON.stringify({ email, audienceId }),
        ).toString("base64");
        const verificationUrl = `${process.env.PUBLIC_URL || "https://youb.app"}/api/verify?token=${token}`;

        // Send Verification Email
        await resend.emails.send({
          from: "YOUB <no-reply@my.youb.app>",
          to: email,
          subject: "Bestätige deine E-Mail Adresse bei YOUB",
          html: `<h1>Willkommen bei YOUB, ${name}!</h1><p>Bitte bestätige deine E-Mail Adresse: <a href="${verificationUrl}">Bestätigen</a></p>`,
        });
      }
    }

    // 2. If it's a general contact message, notify admin
    if (message) {
      await resend.emails.send({
        from: "YOUB Contact <support@my.youb.app>",
        to: "support@youb.app",
        replyTo: email,
        subject: `Neue Kontaktanfrage von ${name || email}`,
        text: `Name: ${name || "N/A"}\nEmail: ${email}\nSport: ${sport || "N/A"}\n\nNachricht:\n${message}`,
      });
    }

    return { message: "Success" };
  } catch (error: unknown) {
    console.error("Endpoint Error:", error);
    const err = error as {
      statusCode?: number;
      statusMessage?: string;
      message?: string;
    };
    throw createError({
      statusCode: err.statusCode || 500,
      statusMessage:
        err.statusMessage || err.message || "Internal Server Error",
    });
  }
});
