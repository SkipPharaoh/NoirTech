"use client";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useEffect, useState } from "react";
import LinkTo from "./LinkTo";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean>(true);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <section
      className={`${
        cookieConsent != null ? "hidden" : "flex"
      } max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl`}
    >
      <h2 className="font-semibold text-gray-800 dark:text-white">
        🍪 Cookie Notice
      </h2>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        We use cookies to ensure that we give you the best experience on our
        website.{" "}
        <LinkTo href="#" className="text-blue-500 hover:underline">
          Read privacy policy
        </LinkTo>
        .{" "}
      </p>

      <div className="flex items-center justify-center mt-4 gap-x-4 shrink-0">
        <button
          onClick={() => setCookieConsent(true)}
          className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
        >
          Accept
        </button>
        <button
          onClick={() => setCookieConsent(false)}
          className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
        >
          Decline
        </button>
      </div>
    </section>
  );
}
