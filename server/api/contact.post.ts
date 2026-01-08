import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  if (!email || !sport) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email and sport are required",
    });
  }

  const audienceId = AUDIENCE_MAP[sport];
  if (!audienceId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid sport selected",
    });
  }

  try {
    console.log("Processing submission for:", email);

    // 1. Add to Resend Audience as Unsubscribed (Pending)
    const { data: contactData, error: contactError } =
      await resend.contacts.create({
        email,
        firstName: name,
        unsubscribed: true,
        audienceId,
        properties: {
          status: "pending",
        },
      });

    if (contactError) {
      console.error("Resend Contact Error:", contactError);
      throw createError({
        statusCode: 500,
        statusMessage: contactError.message || "Failed to create contact",
      });
    }

    // 2. Create verification link
    const token = Buffer.from(JSON.stringify({ email, audienceId })).toString(
      "base64"
    );
    const verificationUrl = `${
      process.env.PUBLIC_URL || "https://youb.app"
    }/api/verify?token=${token}`;

    // 3. Send Verification Email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "YOUB <no-reply@my.youb.app>",
      to: email,
      subject: "Bestätige deine E-Mail Adresse bei YOUB",
      html: `
        <h1>Willkommen bei YOUB, ${name}!</h1>
        <p>Vielen Dank für dein Interesse. Bitte bestätige deine E-Mail Adresse, um deine Anfrage abzuschließen.</p>
        <a href="${verificationUrl}" style="background-color: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin-top: 20px;">
          E-Mail bestätigen
        </a>
        <p style="margin-top: 40px; font-size: 12px; color: #666;">
          Wenn du dich nicht bei YOUB angemeldet hast, kannst du diese E-Mail einfach ignorieren.
        </p>
      `,
    });

    if (emailError) {
      console.error("Resend Email Error:", emailError);
      throw createError({
        statusCode: 500,
        statusMessage: emailError.message || "Failed to send email",
      });
    }

    return { message: "Verification email sent", id: emailData?.id };
  } catch (error: any) {
    console.error("Endpoint Error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage:
        error.statusMessage || error.message || "Internal Server Error",
    });
  }
});
