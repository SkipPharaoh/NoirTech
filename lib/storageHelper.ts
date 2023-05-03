import "client-only";

export interface CookieConsent {
  consent: true | false;
  expiryDate: string;
}

export function getLocalStorage(
  key: string,
  defaultValue: CookieConsent | null
): CookieConsent | null {
  if (typeof localStorage !== "undefined") {
    const stickyValue = localStorage.getItem(key);

    return stickyValue !== null && stickyValue !== "undefined"
      ? JSON.parse(stickyValue)
      : defaultValue;
  } else {
    return defaultValue;
  }
}

export function setLocalStorage(key: string, value: CookieConsent) {
  localStorage.setItem(key, JSON.stringify(value));
}
