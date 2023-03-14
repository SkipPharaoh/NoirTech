import { legalTextStyling } from "../../lib/styling/legalStyling";

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="mt-6 mb-6 lg:mb-12">
            <h1>
              <span className={`${legalTextStyling.header} text-center`}>
                Privacy Policy
              </span>
            </h1>
            <h1 className={legalTextStyling.title}>Who Are We</h1>
            <p className={legalTextStyling.body}>
              Our website address is: https://www.noirtechtribe.com
            </p>
            <h1 className={legalTextStyling.title}>Cookies</h1>
            <p className={legalTextStyling.body}>
              Our website uses cookies to improve your browsing experience and
              to personalize the content and advertisements we display to you.
              Cookies are small text files that are stored on your device when
              you visit our website. They help us to understand how you interact
              with our website and allow us to remember your preferences and
              settings.
            </p>
            <p className={legalTextStyling.body}>
              We use third-party analytics tools, such as Google Analytics and
              Vercel Analytics, to collect information about how visitors use
              our website. The information collected through these tools may
              include your IP address, browser type, device type, operating
              system, and other usage data. This information is used to improve
              our website and to provide you with a better user experience.
            </p>
            <p className={legalTextStyling.body}>
              We also work with advertising partners to display personalized
              advertisements to you based on your browsing behavior and
              interests. These partners may use cookies to collect information
              about your online activity and to serve you with relevant ads. You
              can opt-out of personalized ads by visiting the Digital
              Advertising Alliance's opt-out page (
              <a
                href="http://optout.aboutads.info"
                className={legalTextStyling.link}
              >
                http://optout.aboutads.info
              </a>
              ).
            </p>
            <p className={legalTextStyling.body}>
              By using our website, you consent to the use of cookies as
              described in this policy. If you do not agree with our use of
              cookies, you can disable cookies in your browser settings, but
              please note that this may affect the functionality of our website.
            </p>
            <h1 className={legalTextStyling.title}>
              Embedded Content From Other Websites
            </h1>
            <p className={legalTextStyling.body}>
              Articles on this site may include embedded content (e.g. videos,
              images, articles, etc.). Embedded content from other websites
              behaves in the exact same way as if the visitor has visited the
              other website.
            </p>
            <p className={legalTextStyling.body}>
              These websites may collect data about you, use cookies, embed
              additional third-party tracking, and monitor your interaction with
              that embedded content, including tracking your interaction with
              the embedded content if you have an account and are logged in to
              that website.
            </p>
            <h1 className={legalTextStyling.title}>
              Who We Share Your Data With
            </h1>
            <p className={legalTextStyling.body}>
              We do not share your data with anyone.
            </p>
            <h1 className={legalTextStyling.title}>Where we send your data</h1>
            <p className={legalTextStyling.body}>
              First party cookies are created by the website that you are
              visiting. A third-party cookie is frequently used in behavioral
              advertising and analytics and is created by a domain other than
              the website you are visiting. Third-party cookies, tags, pixels,
              beacons and other similar technologies (collectively, “Tags”) may
              be placed on the Website to monitor interaction with advertising
              content and to target and optimize advertising. Each internet
              browser has functionality so that you can block both first and
              third-party cookies and clear your browser’s cache. The “help”
              feature of the menu bar on most browsers will tell you how to stop
              accepting new cookies, how to receive notification of new cookies,
              how to disable existing cookies and how to clear your browser’s
              cache. For more information about cookies and how to disable them,
              you can consult the information at{" "}
              <a
                href="https://allaboutcookies.org/how-to-manage-cookies"
                className={legalTextStyling.link}
              >
                All About Cookies
              </a>
              .
            </p>
            <p className={legalTextStyling.body}>
              Without cookies you may not be able to take full advantage of the
              Website content and features. Please note that rejecting cookies
              does not mean that you will no longer see ads when you visit our
              Site. In the event you opt-out, you will still see
              non-personalized advertisements on the Website.
            </p>
            <p className={legalTextStyling.body}>
              The Website collects the following data using a cookie when
              serving personalized ads:
            </p>
            <ul className={`${legalTextStyling.ul} ml-8`}>
              <li>IP Address</li>
              <li>Device Type</li>
              <li>Web browser type</li>
              <li>Operating System type</li>
              <li>Operating System version</li>
              <li>Language of the website</li>
            </ul>
            <p className={legalTextStyling.body}>
              If you would like more information about this practice and to know
              your choices to opt-in or opt-out of this data collection, please
              visit{" "}
              <a
                href="https://thenai.org/opt-out/"
                className={legalTextStyling.link}
              >
                National Advertising Initiative opt out page
              </a>
              . You may also visit{" "}
              <a
                href="https://optout.aboutads.info/?c=2&lang=EN"
                className={legalTextStyling.link}
              >
                Digital Advertising Alliance website
              </a>{" "}
              and{" "}
              <a
                href="https://optout.networkadvertising.org/?c=1"
                className={legalTextStyling.link}
              >
                Network Advertising Initiative website
              </a>{" "}
              to learn more information about interest-based advertising. You
              may download the AppChoices app at{" "}
              <a
                href="https://youradchoices.com/appchoices"
                className={legalTextStyling.link}
              >
                Digital Advertising Alliance’s AppChoices app
              </a>{" "}
              to opt out in connection with mobile apps, or use the platform
              controls on your mobile device to opt out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
