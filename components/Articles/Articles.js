import styles from "./styles.module.css";
import Article from "../Article/Article";
import { useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([
    {
      title: "Some good news",
      imgUrl:
        "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
    },
    {
      title: "Some normal news",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnytH5HzuloWnQCrUOJWls3SnsKI6Askr8w&s",
    },
    {
      title: "Some bad news",
      imgUrl:
        "https://www.nps.gov/subjects/mountains/images/7ead59398cfb4e54b27e0797cbe73c42Original-GAAR.jpg?maxwidth=1300&autorotate=false",
    },
  ]);

  return (
    <div className={styles.main}>
      <Article title={articles[0].title} imgUrl={articles[0].imgUrl} />
      <Article title={articles[1].title} imgUrl={articles[1].imgUrl} />
      <Article title={articles[2].title} imgUrl={articles[2].imgUrl} />
    </div>
  );
};

export default Articles;
