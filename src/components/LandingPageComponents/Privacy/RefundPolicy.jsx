import React from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textVariant,
  textVariant2,
} from "../../../utils/motion";
import "./PrivacyPolicy.css";

const RefundPolicy = () => {
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
          Refund Policy
        </motion.h3>
        <p>
          Thank you for joining our cybersecurity course. We are committed to
          providing you with high-quality educational materials to help you
          improve your cybersecurity skills.
        </p>
        <p>
          In the event that you are not satisfied with our course, we offer a
          refund policy as follows:
        </p>
        <ul>
          <motion.li variants={textVariant(0.1)}>
            Refunds will be considered within 7 days of purchase.
          </motion.li>
          <motion.li variants={textVariant(0.2)}>
            To be eligible for a refund, you must have completed no more than
            25% of the course content.
          </motion.li>
          <motion.li variants={textVariant(0.3)}>
            To request a refund, you must email us at
            thc_admin@threathuntersclub.tech with your name, email address used
            to purchase the course, and reason for the refund request.
          </motion.li>
          <motion.li variants={textVariant(0.4)}>
            Once we receive your refund request, we will review it and notify
            you of the status of your refund within 7 business days.
          </motion.li>
          <motion.li variants={textVariant(0.5)}>
            If your refund is approved, we will process the refund to the
            original payment method used to make the purchase within 14 business
            days.
          </motion.li>
        </ul>
        <p>
          Please note that we reserve the right to refuse a refund if we suspect
          that the course materials have been used improperly or if we believe
          that there has been fraudulent activity associated with the purchase.
        </p>
        <p>
          We hope that you enjoy our cybersecurity course and find it to be a
          valuable resource for improving your cybersecurity knowledge and
          skills.
        </p>
      </div>
    </motion.div>
  );
};

export default RefundPolicy;
