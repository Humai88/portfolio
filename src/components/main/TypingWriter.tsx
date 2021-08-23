import styles from "./Main.module.scss";

import { useState, useEffect } from "react";

const CONSTANTS = {
  DELETING_SPEED: 50,
  TYPING_SPEED: 160,
};
type PropsType = {
  messages: string[];
};
type StateType = {
  text: string;
  message: string;
  isDeleting: boolean;
  loopNum: number;
  typingSpeed: number;
};
export const TypeWriter: React.FC<PropsType> = ({ messages }) => {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleType = () => {
      setState((currentState) => ({
        ...currentState,
        text: getCurrentText(currentState),
        typingSpeed: getTypingSpeed(currentState),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState((currentState) => ({
        ...currentState,
        isDeleting: false,
        loopNum: currentState.loopNum + 1,
        message: getMessage(currentState, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState: StateType) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState: StateType, data: any) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState: StateType) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return <span className={styles.typewriter}>{state.text}</span>;
};
