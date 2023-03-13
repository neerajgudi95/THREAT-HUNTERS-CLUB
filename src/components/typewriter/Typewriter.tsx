import React, { useState, useEffect } from "react";
import {
  TypePhase,
  useTypeWriterEffect,
} from "../../utils/custom-hooks/useTypeWriter";
import "./typeWriter.css";

const sentences = [
  "perform Security Operations?",
  "conduct Malware Analysis?",
  "improve Email Security?",
  "engage in Threat Hunting?",
  "conduct Network Penetration Testing?",
  "respond to a security incident?",
];

const Typewriter = () => {
  const { typedSentence, selectedsentence, phase, resume } =
    useTypeWriterEffect(sentences);

  return (
    <p className="type-writer">
      You'll learn, how to
      <span
        className={
          phase !== TypePhase.Deleting
            ? "end-cursor"
            : phase === TypePhase.Pausing
            ? "end-cursor blinking"
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
