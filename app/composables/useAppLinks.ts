const IOS_APP_URL = "https://apps.apple.com/us/app/youb/id6758287703";
const ANDROID_APP_URL = "https://play.google.com/store/apps/details?id=my.youb.app";
const WEB_LOGIN_URL = "https://my.youb.app";

export const useAppLinks = () => {
  const appDownloadUrl = ref(WEB_LOGIN_URL);

  onMounted(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (/android/.test(userAgent)) {
      appDownloadUrl.value = ANDROID_APP_URL;
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      appDownloadUrl.value = IOS_APP_URL;
    }
  });

  return {
    androidAppUrl: ANDROID_APP_URL,
    appDownloadUrl,
    iosAppUrl: IOS_APP_URL,
    webLoginUrl: WEB_LOGIN_URL,
  };
};
