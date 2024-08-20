import styles from "./styles.module.css";

const CharacterCard = ({ id, imgUrl, name, species, removeCharacter }) => {
  return (
    <div
      onClick={() => {
        removeCharacter(id);
      }}
      className={styles.main}
    >
      {imgUrl ? (
        <img src={imgUrl} alt="dress photo" />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          alt="dress photo"
        />
      )}

      <h2>{name}</h2>
      <h4>{species}</h4>
    </div>
  );
};

export default CharacterCard;
