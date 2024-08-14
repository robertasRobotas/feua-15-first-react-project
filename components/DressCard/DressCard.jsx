import styles from "./styles.module.css";

const DressCard = ({ imgUrl, title, price }) => {
  return (
    <div
      onClick={() => {
        console.log(title);
      }}
      className={styles.main}
    >
      <img src={imgUrl} alt="dress photo" />
      <h2>{title}</h2>
      <h4>{price}$</h4>
    </div>
  );
};

export default DressCard;
