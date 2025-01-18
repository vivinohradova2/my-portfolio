import styles from "./CardWorks.module.scss";

const CardWorks = ({ title, text, url, isActive }) => {
  return (
    <>
      <div className={styles.boxWrap}>
        <a
          className={`${styles.link} ${!isActive ? styles.disabled : ""}`}
          href={isActive ? url : "#"}
          target={isActive ? "_blank" : "_self"}
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!isActive) {
              e.preventDefault();
            }
          }}
        >
          {title}
        </a>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};

export default CardWorks;
