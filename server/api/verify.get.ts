import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const token = query.token as string;

  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!token) {
    throw createError({
      statusCode: 400,
      statusMessage: "Token is required",
    });
  }

  try {
    const { email, audienceId } = JSON.parse(
      Buffer.from(token, "base64").toString()
    );

    if (!email || !audienceId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid token",
      });
    }

    // 1. Update contact status to Subscribed
    // We can update directly using the email address
    const { error: updateError } = await resend.contacts.update({
      email: email,
      audienceId: audienceId,
      unsubscribed: false,
      properties: {
        status: "confirmed",
      },
    });

    if (updateError) {
      console.error("Resend Update Error:", updateError);
      throw updateError;
    }

    // 2. Redirect to success page
    return sendRedirect(event, "/verified", 302);
  } catch (error: any) {
    console.error("Verification Error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Verification failed",
    });
  }
});
