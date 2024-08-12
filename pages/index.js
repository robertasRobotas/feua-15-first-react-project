import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  const [isDisplayLogo, setDisplayLogo] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          console.log("click");
          setDisplayLogo(true);
        }}
      >
        click
      </button>
      <Header isDisplayLogo={isDisplayLogo} />
      <Main />
      <Footer />
    </>
  );
};

export default MainPage;
