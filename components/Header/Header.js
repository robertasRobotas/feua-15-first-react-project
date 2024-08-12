import styles from "./styles.module.css";

const Header = ({ isDisplayLogo }) => {
  return (
    <header className={styles.main}>
      {isDisplayLogo && <div>FEUA-15</div>}
    </header>
  );
};

export default Header;
