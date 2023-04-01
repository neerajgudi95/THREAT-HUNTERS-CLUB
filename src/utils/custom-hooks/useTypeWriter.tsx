import { useCallback, useEffect, useState } from "react";

export enum TypePhase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL_MIN = 80;
const TYPING_INTERVAL_MAX = 150;
const TYPING_PAUSE_MS = 2000;
const DELETING_INTERVAL = 50;
const DELETING_PAUSE_MS = 500;

const getRandomTypingInterval = () =>
  Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) +
  TYPING_INTERVAL_MIN;

export const useTypeWriterEffect = (
  sentences: string[]
): {
  typedSentence: string;
  selectedsentence: string;
  phase: TypePhase;
  resume: () => void;
} => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(TypePhase.Typing);
  const [typedSentence, setTypedSentence] = useState("");
  const resume = useCallback(() => {
    if (phase !== TypePhase.Pausing) return;
    setPhase(TypePhase.Deleting);
  }, [phase]);

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTypedSentence = sentences[selectedIndex].slice(
          0,
          typedSentence.length + 1
        );

        if (nextTypedSentence === typedSentence) {
          setPhase(TypePhase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedSentence(nextTypedSentence);
        }, getRandomTypingInterval());

        return () => clearTimeout(timeout);
      }
      case TypePhase.Deleting: {
        if (!typedSentence) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1;
            setSelectedIndex(sentences[nextIndex] ? nextIndex : 0);
            setPhase(TypePhase.Typing);
          }, DELETING_PAUSE_MS);
          return () => clearTimeout(timeout);
        }

        const nextRemaining = sentences[selectedIndex].slice(
          0,
          typedSentence.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedSentence(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case TypePhase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting);
        }, TYPING_PAUSE_MS);

        return () => clearTimeout(timeout);
    }
  }, [sentences, typedSentence, selectedIndex, phase]);

  return {
    typedSentence,
    phase,
    resume,
    selectedsentence: sentences[selectedIndex],
  };
};
