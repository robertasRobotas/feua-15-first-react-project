import styles from "./styles.module.css";

const Article = () => {
  return (
    <article className={styles.main}>
      <img src="https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg" />
      <h3>Some article</h3>
    </article>
  );
};

export default Article;
