"use client";

import {
  CookieConsent,
  getLocalStorage,
  setLocalStorage,
} from "@/lib/storageHelper";
import { useEffect, useState } from "react";
import LinkTo from "./LinkTo";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<CookieConsent | null>(
    null
  );

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage("cookie_consent", cookieConsent);

      const newValue = cookieConsent?.consent ? "granted" : "denied";

      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });

      //For Testing
      console.log("Cookie Consent: ", JSON.stringify(cookieConsent), newValue);
    }
  }, [cookieConsent]);

  const handleOnAccept = () => {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 6);

    const cookieConsentData = {
      consent: true,
      expiryDate: futureDate.toISOString(),
    };

    setCookieConsent(cookieConsentData);
  };

  const handleOnDecline = () => {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 1);

    const cookieConsentData = {
      consent: false,
      expiryDate: futureDate.toISOString(),
    };

    setCookieConsent(cookieConsentData);
  };

  const shouldShowBanner = (): boolean => {
    if (cookieConsent == null) {
      return true;
    }

    const now = new Date().getTime();
    const expiryDate = new Date(cookieConsent.expiryDate).getTime();

    if (now >= expiryDate || cookieConsent == null) {
      return true;
    }

    return false;
  };

  const isShowingBanner = shouldShowBanner();

  return !!isShowingBanner ? (
    <section
      className={`flex flex-col fixed bottom-6 left-0 right-0 max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-2xl xs:w-full xs:max-w-screen-sm`}
    >
      <h2 className="font-semibold text-gray-800 dark:text-white text-center">
        🍪 Cookie Notice
      </h2>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">
        We use cookies to ensure that we give you the best experience on our
        website.{" "}
        <LinkTo href="#" className="text-blue-500 hover:underline">
          Read privacy policy
        </LinkTo>
        .{" "}
      </p>

      <div className="flex items-center justify-center mt-4 gap-x-4 shrink-0">
        <button
          onClick={handleOnAccept}
          className="text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
        >
          Accept
        </button>
        <button
          onClick={handleOnDecline}
          className="text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
        >
          Decline
        </button>
      </div>
    </section>
  ) : null;
}
