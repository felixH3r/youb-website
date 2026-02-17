export const useCookieConsent = () => {
  // Consent cookie: 'accepted', 'declined', or undefined
  const consent = useCookie<"accepted" | "declined" | undefined>(
    "cookie-consent",
    {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
    },
  );

  const isConsentGiven = computed(() => consent.value === "accepted");
  const isConsentDefined = computed(
    () => consent.value === "accepted" || consent.value === "declined",
  );

  const acceptAll = () => {
    consent.value = "accepted";
    if (import.meta.client) {
      const { initialize, enableAnalytics } = useGtag();
      initialize();
      enableAnalytics();
    }
  };

  const declineAll = () => {
    consent.value = "declined";
    if (import.meta.client) {
      const { disableAnalytics } = useGtag();
      disableAnalytics();
    }
  };

  // Initialize consent on client-side if already accepted
  if (import.meta.client && isConsentGiven.value) {
    const { initialize, enableAnalytics } = useGtag();
    initialize();
    enableAnalytics();
  }

  return {
    consent,
    isConsentGiven,
    isConsentDefined,
    acceptAll,
    declineAll,
  };
};
