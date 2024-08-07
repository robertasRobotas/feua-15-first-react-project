import styles from "./styles.module.css";
import Article from "../Article/Article";

const Articles = () => {
  return (
    <div className={styles.main}>
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default Articles;
