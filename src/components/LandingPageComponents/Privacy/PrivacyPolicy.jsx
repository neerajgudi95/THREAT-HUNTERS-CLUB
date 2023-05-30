import React from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textVariant,
  textVariant2,
} from "../../../utils/motion";
import "./PrivacyPolicy.css";
const PrivacyPolicy = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="thc__rules-wrapper section__padding thc__landingPage"
    >
      <div className="thc__rules-container">
        <motion.h3 variants={textVariant2} className="gradient__text">
          Code of Conduct
        </motion.h3>
        <p>
          As a member of Threat Hunters, you are expected to adhere to the
          following standards of behaviour:
        </p>
        <ul>
          <motion.li variants={textVariant(0.1)}>
            Respect the rights and dignity of others, including their opinions,
            beliefs, and privacy.
          </motion.li>
          <motion.li variants={textVariant(0.2)}>
            Refrain from engaging in harassment, discrimination, or any form of
            bullying, including online.
          </motion.li>
          <motion.li variants={textVariant(0.3)}>
            Avoid disruptive or inappropriate behaviour, such as excessive noise
            or disruptive discussions.
          </motion.li>
          <motion.li variants={textVariant(0.4)}>
            Abide by the laws and regulations applicable to the club and its
            activities.
          </motion.li>
          <motion.li variants={textVariant(0.5)}>
            Maintain the confidentiality of sensitive information and
            discussions, unless otherwise specified.
          </motion.li>
          <motion.li variants={textVariant(0.6)}>
            Be responsible and respectful in your use of club resources, such as
            equipment and facilities.
          </motion.li>
          <motion.li variants={textVariant(0.7)}>
            Not engage in any activities that could harm the reputation or
            integrity of the club.
          </motion.li>
          <motion.li variants={textVariant(0.8)}>
            Participate actively in club events and discussions and support the
            goals and objectives of the club.
          </motion.li>
        </ul>
        <p className="thc__rules-fail">
          Failure to comply with this code of conduct may result in disciplinary
          action, including warnings, suspension of membership, or termination
          of membership. We expect all members to work together to maintain a
          positive and respectful environment for everyone."
        </p>
      </div>
      <div className="thc__rules-container thc__rules-policy">
        <motion.h3 variants={textVariant(0.3)} className="gradient__text">
          Privacy Policy
        </motion.h3>
        <motion.p variants={textVariant2}>
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
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
