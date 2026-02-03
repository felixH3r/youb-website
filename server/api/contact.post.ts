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
      "base64",
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
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>
    :root {
      color-scheme: light dark;
      supported-color-schemes: light dark;
    }
    
    /* Dark Mode Styles */
    @media (prefers-color-scheme: dark) {
      .body-bg {
        background-color: #000000 !important;
        color: #ffffff !important;
      }
      .dark-button {
        background-color: #ffffff !important;
        color: #000000 !important;
      }
      h1, p {
        color: #ffffff !important;
      }
    }

    /* Target specific clients like Apple Mail */
    [data-ogsc] .body-bg { background-color: #000000 !important; color: #ffffff !important; }
    [data-ogsc] .dark-button { background-color: #ffffff !important; color: #000000 !important; }
  </style>
</head>
<body class="body-bg" style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #ffffff; color: #000000;">
  <div style="max-width: 600px; margin: 0 auto;">
    <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">Willkommen bei YOUB, ${name}!</h1>
    <p style="font-size: 16px; line-height: 1.5; margin-bottom: 10px;">Vielen Dank für dein Interesse. Bitte bestätige deine E-Mail Adresse, um deine Anfrage abzuschließen.</p>
    <a href="${verificationUrl}" 
       class="dark-button" 
       style="background: #000000 !important;
              background: linear-gradient(#000000, #000000) !important; 
              color: #ffffff !important; 
              padding: 12px 24px; 
              text-decoration: none; 
              border-radius: 4px; 
              display: inline-block; 
              margin-top: 20px;
              font-weight: 600;
              border: 1px solid #ffffff;
              color-scheme: only light;">
      <span style="color: #ffffff !important;">E-Mail bestätigen</span>
    </a>
    <p style="margin-top: 40px; font-size: 12px; color: #666;">
      Wenn du dich nicht bei YOUB angemeldet hast, kannst du diese E-Mail einfach ignorieren.
    </p>
  </div>
</body>
</html>
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
