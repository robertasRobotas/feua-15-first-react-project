import styles from "./styles.module.css";
import burgerBtn from "../../assets/burger-btn.svg";
import { useState } from "react";

// const navbar = (
//   <nav>
//     <ul>
//       <li>
//         <a href="#">About</a>
//       </li>
//       <li>
//         <a href="#">About</a>
//       </li>
//       <li>
//         <a href="#">About</a>
//       </li>
//     </ul>
//   </nav>
// );

const Header = ({ links }) => {
  const [isShowOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <header className={styles.main}>
        <div>FEUA-15</div>

        <nav>
          <ul>
            {links.map((link) => (
              <li>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => {
            setShowOverlay(!isShowOverlay);
          }}
        >
          <img src={burgerBtn.src} alt="menu button" />
        </button>
      </header>
      <div
        className={`${styles.overlay} ${isShowOverlay && styles.showOverlay}`}
      >
        <nav>
          <ul>
            {links.map((link) => (
              <li>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
