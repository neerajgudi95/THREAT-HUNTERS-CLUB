import React from "react";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="section__padding thc__landingPage">
      <div className="thc__termsConditions">
        <h2 className="gradient__text">Terms and Conditions</h2>
        <p>
          Welcome to Threat Hunters Club (the threathuntersclub.tech). These
          Terms and Conditions ("Terms") govern your use of the Website, so
          please read them carefully before accessing or using the Website.
        </p>

        <p>
          By accessing or using the Website, you agree to be bound by these
          Terms. If you disagree with any part of the Terms, then you may not
          access the Website.
        </p>
        <div className="terms">
          <h3 className="gradient__text">1. Intellectual Property</h3>
          <p>
            All content on the Website, including but not limited to text,
            graphics, logos, images, and software, is the property of Threat
            Hunters Club or its licensors and is protected by copyright,
            trademark, and other intellectual property laws. You may not use,
            reproduce, modify, distribute, or transmit any content from the
            Website without prior written consent from Threat Hunters Club.
          </p>
        </div>
        <div className="terms">
          <h3 className="gradient__text">2. User Accounts</h3>
          <p>
            You may be required to create a user account to access certain
            features of the Website. You are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            that occur under your account. You agree to notify Threat Hunters
            Club immediately of any unauthorized use of your account or any
            other breach of security.
          </p>
        </div>
        <div className="terms">
          <h3 className="gradient__text">3. Course Content</h3>
          <p>
            The Website offers online course in cybersecurity ("Courses").
            Course content, including but not limited to lectures, videos,
            quizzes, and assignments, is provided for educational purposes only.
            Threat Hunters Club makes no guarantees regarding the accuracy,
            completeness, or usefulness of course content.
          </p>
        </div>
        <div className="terms">
          <h3 className="gradient__text">4. Payment and Refunds</h3>
          <p>
            You agree to pay all fees associated with Courses that you enroll
            in. Payment may be processed through third-party payment processors,
            and you agree to abide by their terms and conditions. Refunds may be
            available in accordance with the refund policy posted on the
            Website.
          </p>
        </div>
        <div className="terms">
          <h3 className="gradient__text">5. Prohibited Conduct</h3>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the Website in any way that violates applicable laws or
              regulations;
            </li>
            <li>
              Use the Website to engage in any fraudulent or deceptive
              activities;
            </li>
            <li>
              Interfere with or disrupt the operation of the Website or servers;
            </li>
            <li>
              Use any automated means, including but not limited to bots,
              scripts, or spiders, to access the Website or collect information
              from the Website;
            </li>
            <li>
              Impersonate any person or entity or falsely claim an affiliation
              with any person or entity.
            </li>
          </ul>
        </div>
        <div className="terms">
          <h3 className="gradient__text">6. Limitation of Liability</h3>
          <p>
            In no event shall Threat Hunters Club be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            but not limited to lost profits or data, arising out of or in
            connection with your use of the Website or Courses, even if Threat
            Hunters Club has been advised of the possibility of such damages.
          </p>
        </div>
        <div className="terms">
          <h3 className="gradient__text">7. Changes to Terms</h3>
          <p>
            Threat Hunters Club reserves the right to modify these Terms at any
            time without prior notice. The most current version of the Terms
            will be posted on the Website. Your continued use of the Website
            after any changes to these Terms constitutes your acceptance of the
            revised Terms.
          </p>
        </div>
        <div className="terms">
          <h3 className="gradient__text">8. Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Karnataka, India, without regard to its
            conflict of law provisions.
          </p>
        </div>
        <div className="terms">
          <h3 className="gradient__text">9. Contact Information</h3>
          <p>
            If you have any questions about these Terms, please contact us at
            <span className="mail">thc_admin@threathuntersclub.tech</span>.
          </p>

          <p>
            By accessing or using the Website, you acknowledge that you have
            read, understood, and agree to be bound by these Terms. If you do
            not agree to these Terms, you may not access or use the Website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
