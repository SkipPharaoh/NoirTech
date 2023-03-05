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
          </div>
        </div>
      </div>
    </div>
  );
}
