export const useCookieConsent = () => {
  // Consent cookie: 'accepted', 'declined', or undefined
  const consent = useCookie<"accepted" | "declined" | undefined>(
    "cookie-consent",
    {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
    },
  );

  const isConsentGiven = computed(() => true);
  const isConsentDefined = computed(() => true);

  const acceptAll = () => {
    consent.value = "accepted";
  };

  const declineAll = () => {
    consent.value = "declined";
  };

  return {
    consent,
    isConsentGiven,
    isConsentDefined,
    acceptAll,
    declineAll,
  };
};
