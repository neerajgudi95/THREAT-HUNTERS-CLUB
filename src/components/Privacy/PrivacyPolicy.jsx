import React from "react";
import "./PrivacyPolicy.css";
const PrivacyPolicy = () => {
  return (
    <div className="thc__rules-wrapper section__padding">
      <div className="thc__rules-container">
        <h3 className="gradient__text">Code of Conduct</h3>
        <p>
          As a member of Threat Hunters, you are expected to adhere to the
          following standards of behaviour:
        </p>
        <ul>
          <li>
            Respect the rights and dignity of others, including their opinions,
            beliefs, and privacy.
          </li>
          <li>
            Refrain from engaging in harassment, discrimination, or any form of
            bullying, including online.
          </li>
          <li>
            Avoid disruptive or inappropriate behaviour, such as excessive noise
            or disruptive discussions.
          </li>
          <li>
            Abide by the laws and regulations applicable to the club and its
            activities.
          </li>
          <li>
            Maintain the confidentiality of sensitive information and
            discussions, unless otherwise specified.
          </li>
          <li>
            Be responsible and respectful in your use of club resources, such as
            equipment and facilities.
          </li>
          <li>
            Not engage in any activities that could harm the reputation or
            integrity of the club.
          </li>
          <li>
            Participate actively in club events and discussions and support the
            goals and objectives of the club.
          </li>
        </ul>
        <p className="thc__rules-fail">
          Failure to comply with this code of conduct may result in disciplinary
          action, including warnings, suspension of membership, or termination
          of membership. We expect all members to work together to maintain a
          positive and respectful environment for everyone."
        </p>
      </div>
      <div className="thc__rules-container thc__rules-policy">
        <h3 className="gradient__text">Privacy Policy</h3>
        <p>
          "At Threat Hunters, we are committed to protecting the privacy of our
          club members. We collect personal information, such as names, email
          addresses, phone numbers when it is voluntarily submitted to us
          through online forms and other methods. <br />
          <br />
          The information we collect is used to improve our student engagement
          campaigns, communication, and provide a personalized experience. We do
          not sell or rent personal information to third parties.
          <br />
          <br />
          We retain personal information for as long as it is necessary for the
          purposes for which it was collected and as required by applicable
          laws. After that time, we securely dispose of the information.
          <br />
          <br />
          If you have any questions or concerns about our privacy policy or the
          way we handle personal information, please contact us."
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
