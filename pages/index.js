import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const MainPage = () => {
  const [characters, setCharacters] = useState();

  const fetchCharacters = async () => {
    const fetchedCharacters = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );

    setCharacters(fetchedCharacters.data);
    console.log(fetchedCharacters.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const links = [
    { link: "#", title: "About" },
    { link: "#", title: "Portfolio" },
    { link: "#", title: "Contacts" },
  ];

  return (
    <>
      <Header links={links} />
      <Main characters={characters} setCharacters={setCharacters} />
      <Footer />
    </>
  );
};

export default MainPage;
