import { useState } from "react";
import styles from "./styles.module.css";

const Question = ({ question, answer }) => {
  const [isShowAnswer, setShowAnswer] = useState(false);

  return (
    <div className={styles.main}>
      <div>{question}</div>
      <button
        onClick={() => {
          setShowAnswer(!isShowAnswer);
        }}
      >
        {isShowAnswer ? <>Hide answer</> : <>Show answer</>}
      </button>

      {isShowAnswer && <div>{answer}</div>}
    </div>
  );
};

export default Question;
