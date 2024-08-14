import styles from "./styles.module.css";
import DressCard from "../DressCard/DressCard";

const DressWrapper = ({ dress }) => {
  return (
    <div className={styles.main}>
      {dress &&
        dress.map((d) => {
          return (
            <DressCard
              key={d.id}
              imgUrl={d.imgUrl}
              title={d.title}
              price={d.price}
            />
          );
        })}
    </div>
  );
};

export default DressWrapper;
