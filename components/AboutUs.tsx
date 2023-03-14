import { legalTextStyling } from "../lib/styling/legalStyling";

export default function AboutUs() {
  const textStyling = legalTextStyling;

  return (
    <div className="w-full bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="mt-6 mb-6 lg:mb-12">
            <h1>
              <span className={`${textStyling.header} text-center`}>
                About Us
              </span>
            </h1>
            <h1 className={textStyling.title}>Our Mission</h1>
            <p className={textStyling.body}>
              To guide our audience through an increasingly complex professional
              career by humanizing technology, showcasing many different paths
              and filtering out the noise.
            </p>
            <h1 className={textStyling.title}>About Noir Tech Tribe</h1>
            <p className={textStyling.body}>
              Noir Tech Tribe is a digital publication that focuses on the
              intersection of technology and the Black community. We are a team
              of Black tech enthusiasts who are passionate about sharing our
              experiences and knowledge with the world. We are committed to
              providing our audience with the most up-to-date information on the
              latest tech trends, products, and services. We also aim to provide
              our audience with the tools and resources they need to succeed in
              the tech industry.
            </p>
            <p className={textStyling.body}>
              We cover a wide range of topics, including but not limited to:
              tech news, tech reviews, career advice, career resources and more.
              The topics we cover are focused on the underrepresented and
              underserved communities in the tech industry. We aim to humanize
              technology and showcase the many different paths that are
              available to those who are interested in a career in tech. The
              rapid pace of change in the tech industry creates a conversation
              that is always engaging, entertaining, and challenging. You don't
              have time to become an expert... but we'll help you become one.
            </p>
            <h1 className={`${textStyling.header} text-center`} id="contact">
              Contact Us
            </h1>
            <h1 className={textStyling.title}>
              Would you like to contribute to Noir Tech Tribe?
            </h1>
            <p className={`${textStyling.body} text-gray-500`}>
              Email: contact@noirtechtribe.com
            </p>
            <p className={`${textStyling.body} text-gray-500`}>
              Please include “Contribute to Noir Tech Tribe” in the subject.
            </p>
            <h1 className={textStyling.title}>General Questions</h1>
            <p className={`${textStyling.body} text-gray-500`}>
              Email: contact@noirtechtribe.com
            </p>
            <p className={`${textStyling.body} text-gray-500`}>
              Please include “General Questions” in the subject.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
