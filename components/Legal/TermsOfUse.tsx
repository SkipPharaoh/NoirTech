import { TOSMenu } from "../../lib/data/TOSMenu";
import { legalTextStyling } from "../../lib/styling/legalStyling";

export default function TermsOfUse() {
  return (
    <div className="w-full bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="mt-6 mb-6 lg:mb-12">
            <h1>
              <span className={legalTextStyling.header}>
                Terms and Conditions
              </span>
            </h1>
            <p>
              <small>Last updated: March 03, 2023</small>
            </p>
            <h2 className="font-bold text-2xl mt-8 mb-4">Table of Contents</h2>
            <ol className={legalTextStyling.ol}>
              {TOSMenu.map((item) => (
                <li key={item.name} className="my-4 ml-8">
                  <a href={item.link} className={legalTextStyling.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ol>
            <h2 id="section1" className={legalTextStyling.title}>
              1. Welcome to BLK Tech ODB Media, inc.
            </h2>

            <p className={legalTextStyling.body}>
              Welcome to the website, online services and mobile web services of
              BLK Tech ODB Media, inc. ("BLK Tech ODB Media, inc.", "we," or
              "us"). These Terms and Conditions (the "Terms and Conditions") are
              a binding contract between BLK Tech ODB Media, inc. and you and
              explain the terms and conditions by which you may use and/or
              access our online and/or mobile services ("our Service"), in
              connection with www.blktechodb.com, together with any related
              subsites, sub-domains, mobile and software applications, services,
              features and/or content associated therewith (collectively, "our
              Websites").
            </p>
            <p className={legalTextStyling.body}>
              For purposes of these Terms and Conditions, "you" and "your" mean
              you as the user of our Service. If you use our Service on behalf
              of a company, organization or other entity, then (a) "you"
              includes you and that entity, (b) you represent and warrant that
              you are an authorized representative of the entity with the
              authority to bind the entity to these Terms and Conditions, and
              that you agree to these Terms and Conditions on the entity's
              behalf, and (c) your entity is legally and financially responsible
              for your use of our Service as well as for the use of your account
              by others affiliated with your entity, including any employees,
              agents or contractors.
            </p>
            <p className={legalTextStyling.body}>
              BLK Tech ODB Media, inc. reserves the right to change these Terms
              and Conditions at any time, and your continued use of our Service
              after any changes to these Terms and Conditions will be deemed
              acceptance of those changes. If you do not agree to any of these
              Terms and Conditions, do not use or access (or continue to access)
              our Service.
            </p>

            <h2 id="section2" className={legalTextStyling.title}>
              2. Interpretation and Definitions
            </h2>
            <h3 className={legalTextStyling.subtitle}>Interpretation</h3>
            <p className={legalTextStyling.body}>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <h3 className={legalTextStyling.subtitle}>Definitions</h3>
            <p className="leading-6 tracking-[-0.0125em] my-4">
              For the purposes of these Terms and Conditions:
            </p>
            <ul className="list-disc list-outside ml-8">
              <li className={legalTextStyling.body}>
                <p>
                  <strong>Affiliate</strong> means an entity that controls, is
                  controlled by or is under common control with a party, where
                  &quot;control&quot; means ownership of 50% or more of the
                  shares, equity interest or other securities entitled to vote
                  for election of directors or other managing authority.
                </p>
              </li>
              <li className="leading-6 tracking-[-0.0125em] my-4">
                <p>
                  <strong>Country</strong> refers to: Florida, United States
                </p>
              </li>
              <li className={legalTextStyling.body}>
                <p>
                  <strong>Company</strong> (referred to as either &quot;the
                  Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                  &quot;Our&quot; in this Agreement) refers to BLK Tech ODB
                  Media, inc, 1234 Main Street, New York, NY 12345.
                </p>
              </li>
              <li className={legalTextStyling.body}>
                <p>
                  <strong>Device</strong> means any device that can access the
                  Service such as a computer, a cellphone or a digital tablet.
                </p>
              </li>
              <li className={legalTextStyling.body}>
                <p>
                  <strong>Service</strong> refers to the Website.
                </p>
              </li>
              <li className={legalTextStyling.body}>
                <p>
                  <strong>Terms and Conditions</strong> (also referred as
                  &quot;Terms&quot;) mean these Terms and Conditions that form
                  the entire agreement between You and the Company regarding the
                  use of the Service. This Terms and Conditions agreement has
                  been created with the help of the{" "}
                  <a
                    href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/"
                    target="_blank"
                  >
                    Free Terms and Conditions Generator
                  </a>
                  .
                </p>
              </li>
              <li className={legalTextStyling.body}>
                <p>
                  <strong>Third-party Social Media Service</strong> means any
                  services or content (including data, information, products or
                  services) provided by a third-party that may be displayed,
                  included or made available by the Service.
                </p>
              </li>
              <li className={legalTextStyling.body}>
                <p>
                  <strong>Website</strong> refers to BLK Tech ODB, accessible
                  from{" "}
                  <a
                    href="http://www.blktechodb.com"
                    rel="external nofollow noopener"
                    target="_blank"
                    className={legalTextStyling.link}
                  >
                    http://www.blktechodb.com
                  </a>
                </p>
              </li>
              <li className={legalTextStyling.body}>
                <p>
                  <strong>You</strong> means the individual accessing or using
                  the Service, or the company, or other legal entity on behalf
                  of which such individual is accessing or using the Service, as
                  applicable.
                </p>
              </li>
            </ul>
            <h2 id="section3" className={legalTextStyling.title}>
              3. Acknowledgment
            </h2>
            <p className={legalTextStyling.body}>
              These are the Terms and Conditions governing the use of this
              Service and the agreement that operates between You and the
              Company. These Terms and Conditions set out the rights and
              obligations of all users regarding the use of the Service.
            </p>
            <p className={legalTextStyling.body}>
              Your access to and use of the Service is conditioned on Your
              acceptance of and compliance with these Terms and Conditions.
              These Terms and Conditions apply to all visitors, users and others
              who access or use the Service.
            </p>
            <p className={legalTextStyling.body}>
              By accessing or using the Service You agree to be bound by these
              Terms and Conditions. If You disagree with any part of these Terms
              and Conditions then You may not access the Service.
            </p>
            <p className={legalTextStyling.body}>
              Your access to and use of the Service is also conditioned on Your
              acceptance of and compliance with the Privacy Policy of the
              Company. Our Privacy Policy describes Our policies and procedures
              on the collection, use and disclosure of Your personal information
              when You use the Application or the Website and tells You about
              Your privacy rights and how the law protects You. Please read Our
              Privacy Policy carefully before using Our Service.
            </p>
            <h2 id="section4" className={legalTextStyling.title}>
              4. Links to Other Websites
            </h2>
            <p className={legalTextStyling.body}>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by the Company.
            </p>
            <p className={legalTextStyling.body}>
              The Company has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any third
              party web sites or services. You further acknowledge and agree
              that the Company shall not be responsible or liable, directly or
              indirectly, for any damage or loss caused or alleged to be caused
              by or in connection with the use of or reliance on any such
              content, goods or services available on or through any such web
              sites or services.
            </p>
            <p className={legalTextStyling.body}>
              We strongly advise You to read the terms and conditions and
              privacy policies of any third-party web sites or services that You
              visit.
            </p>
            <h2 id="section5" className={legalTextStyling.title}>
              5. Termination
            </h2>
            <p className={legalTextStyling.body}>
              We may terminate or suspend Your access immediately, without prior
              notice or liability, for any reason whatsoever, including without
              limitation if You breach these Terms and Conditions.
            </p>
            <h2 id="section6" className={legalTextStyling.title}>
              6. Limitation of Liability
            </h2>
            <p className={legalTextStyling.body}>
              Notwithstanding any damages that You might incur, the entire
              liability of the Company and any of its suppliers under any
              provision of this Terms and Your exclusive remedy for all of the
              foregoing shall be limited to the amount actually paid by You
              through the Service or 100 USD if You haven't purchased anything
              through the Service.
            </p>
            <p className={legalTextStyling.body}>
              To the maximum extent permitted by applicable law, in no event
              shall the Company or its suppliers be liable for any special,
              incidental, indirect, or consequential damages whatsoever
              (including, but not limited to, damages for loss of profits, loss
              of data or other information, for business interruption, for
              personal injury, loss of privacy arising out of or in any way
              related to the use of or inability to use the Service, third-party
              software and/or third-party hardware used with the Service, or
              otherwise in connection with any provision of this Terms), even if
              the Company or any supplier has been advised of the possibility of
              such damages and even if the remedy fails of its essential
              purpose.
            </p>
            <p className={legalTextStyling.body}>
              Some states do not allow the exclusion of implied warranties or
              limitation of liability for incidental or consequential damages,
              which means that some of the above limitations may not apply. In
              these states, each party's liability will be limited to the
              greatest extent permitted by law.
            </p>
            <h2 id="section7" className={legalTextStyling.title}>
              7. &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
            </h2>
            <p className={legalTextStyling.body}>
              The Service is provided to You &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; and with all faults and defects without warranty
              of any kind. To the maximum extent permitted under applicable law,
              the Company, on its own behalf and on behalf of its Affiliates and
              its and their respective licensors and service providers,
              expressly disclaims all warranties, whether express, implied,
              statutory or otherwise, with respect to the Service, including all
              implied warranties of merchantability, fitness for a particular
              purpose, title and non-infringement, and warranties that may arise
              out of course of dealing, course of performance, usage or trade
              practice. Without limitation to the foregoing, the Company
              provides no warranty or undertaking, and makes no representation
              of any kind that the Service will meet Your requirements, achieve
              any intended results, be compatible or work with any other
              software, applications, systems or services, operate without
              interruption, meet any performance or reliability standards or be
              error free or that any errors or defects can or will be corrected.
            </p>
            <p className={legalTextStyling.body}>
              Without limiting the foregoing, neither the Company nor any of the
              company's provider makes any representation or warranty of any
              kind, express or implied: (i) as to the operation or availability
              of the Service, or the information, content, and materials or
              products included thereon; (ii) that the Service will be
              uninterrupted or error-free; (iii) as to the accuracy,
              reliability, or currency of any information or content provided
              through the Service; or (iv) that the Service, its servers, the
              content, or e-mails sent from or on behalf of the Company are free
              of viruses, scripts, trojan horses, worms, malware, timebombs or
              other harmful components.
            </p>
            <p className={legalTextStyling.body}>
              Some jurisdictions do not allow the exclusion of certain types of
              warranties or limitations on applicable statutory rights of a
              consumer, so some or all of the above exclusions and limitations
              may not apply to You. But in such a case the exclusions and
              limitations set forth in this section shall be applied to the
              greatest extent enforceable under applicable law.
            </p>
            <h2 id="section8" className={legalTextStyling.title}>
              8. Governing Law
            </h2>
            <p className={legalTextStyling.body}>
              The laws of the Country, excluding its conflicts of law rules,
              shall govern this Terms and Your use of the Service. Your use of
              the Application may also be subject to other local, state,
              national, or international laws.
            </p>
            <h2 id="section9" className={legalTextStyling.title}>
              9. Disputes Resolution
            </h2>
            <p className={legalTextStyling.body}>
              If You have any concern or dispute about the Service, You agree to
              first try to resolve the dispute informally by contacting the
              Company.
            </p>
            <h2 id="section10" className={legalTextStyling.title}>
              10. For European Union (EU) Users
            </h2>
            <p className={legalTextStyling.body}>
              If You are a European Union consumer, you will benefit from any
              mandatory provisions of the law of the country in which you are
              resident in.
            </p>
            <h2 id="section11" className={legalTextStyling.title}>
              11. United States Legal Compliance
            </h2>
            <p className={legalTextStyling.body}>
              You represent and warrant that (i) You are not located in a
              country that is subject to the United States government embargo,
              or that has been designated by the United States government as a
              &quot;terrorist supporting&quot; country, and (ii) You are not
              listed on any United States government list of prohibited or
              restricted parties.
            </p>
            <h2 id="section12" className={legalTextStyling.title}>
              12. Severability and Waiver
            </h2>
            <h3 className={legalTextStyling.subtitle}>Severability</h3>
            <p className={legalTextStyling.body}>
              If any provision of these Terms is held to be unenforceable or
              invalid, such provision will be changed and interpreted to
              accomplish the objectives of such provision to the greatest extent
              possible under applicable law and the remaining provisions will
              continue in full force and effect.
            </p>
            <h3 className={legalTextStyling.subtitle}>Waiver</h3>
            <p className={legalTextStyling.body}>
              Except as provided herein, the failure to exercise a right or to
              require performance of an obligation under these Terms shall not
              effect a party's ability to exercise such right or require such
              performance at any time thereafter nor shall the waiver of a
              breach constitute a waiver of any subsequent breach.
            </p>
            <h2 id="section13" className={legalTextStyling.title}>
              13. Translation Interpretation
            </h2>
            <p className={legalTextStyling.body}>
              These Terms and Conditions may have been translated if We have
              made them available to You on our Service. You agree that the
              original English text shall prevail in the case of a dispute.
            </p>
            <p className={legalTextStyling.body}>
              We reserve the right, at Our sole discretion, to modify or replace
              these Terms at any time. If a revision is material We will make
              reasonable efforts to provide at least 30 days' notice prior to
              any new terms taking effect. What constitutes a material change
              will be determined at Our sole discretion.
            </p>
            <p className={legalTextStyling.body}>
              By continuing to access or use Our Service after those revisions
              become effective, You agree to be bound by the revised terms. If
              You do not agree to the new terms, in whole or in part, please
              stop using the website and the Service.
            </p>
            <h2 id="section14" className={legalTextStyling.title}>
              14. Entire Agreement
            </h2>
            <p className={legalTextStyling.body}>
              These Terms and Conditions shall be deemed to include all other
              notices, policies, disclaimers, and other terms contained on our
              Service; provided, however, that in the event of a conflict
              between such other terms and the terms of these Terms and
              Conditions, the terms of these Terms and Conditions shall control.
            </p>
            <h2 id="section15" className={legalTextStyling.title}>
              15. Service Contact
            </h2>
            <p className={legalTextStyling.body}>
              If you have any questions about these Terms and Conditions, You
              can contact us:
            </p>
            <ul className={legalTextStyling.ul}>
              <li>
                By email:{" "}
                <a
                  href="mailto:contact@BLKTechODB.com"
                  className={legalTextStyling.link}
                >
                  contact@BLKTechODB.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
