import React from "react";
import {
  TypePhase,
  useTypeWriterEffect,
} from "../../../utils/custom-hooks/useTypeWriter";
import "./typeWriter.css";

const sentences = [
  "Security Operations.",
  "Malware Analysis.",
  "Email Security.",
  "Threat Hunting.",
  "Network Penetration Testing.",
  "handling security incidents.",
];

const Typewriter = () => {
  const { typedSentence, selectedsentence, phase, resume } =
    useTypeWriterEffect(sentences);

  return (
    <p className="type-writer">
      You'll learn about,
      <span
        className={
          phase !== TypePhase.Deleting
            ? "end-cursor"
            : "" && phase === TypePhase.Pausing
            ? "blinking"
            : ""
        }
        aria-label={selectedsentence}
      >
        {typedSentence}
      </span>
    </p>
  );
};

export default Typewriter;
