import styles from "./features-card.module.css";

const FeaturesCard = ({ title, description, imageSrc }) => {
  return (
    <div className={`${styles["features-card-container"]}`}>
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export { FeaturesCard };
