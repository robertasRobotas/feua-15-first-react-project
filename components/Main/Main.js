import DressWrapper from "../DressWrapper/DressWrapper";
import Questions from "../Questions/Questions";
import styles from "./styles.module.css";

const Main = ({ dress }) => {
  return (
    <main className={styles.main}>
      <DressWrapper dress={dress} />
    </main>
  );
};

export default Main;
