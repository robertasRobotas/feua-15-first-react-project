import { useState } from "react";
import Question from "../Question/Question";
import styles from "./styles.module.css";

const Questions = () => {
  const [question, setQuestion] = useState([
    {
      question: "Ruda rudeklė, darbšti pereklė, takus numynė, kalnus supylė.",
      answer: "Skruzdė",
    },
    {
      question: "Lygūs laukai be takų, o ąžuolai be šakų.",
      answer: "Upė ir meldai",
    },
    {
      question: "Mažam puodely gardi košelė",
      answer: "Riešutas",
    },
    {
      question: "Samanyne stuobrelis riogso",
      answer: "Grybas",
    },
    {
      question: "Samanyne stuobrelis riogso",
      answer: "Grybas",
    },
  ]);

  return (
    <div className={styles.main}>
      {question.map((q) => {
        return <Question question={q.question} answer={q.answer} />;
      })}
    </div>
  );
};

export default Questions;
