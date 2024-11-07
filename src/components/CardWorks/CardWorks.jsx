import styles from "./CardWorks.module.scss";

const CardWorks = ({ title, text, url }) => {
  return (
    <>
      <div
        className={styles.boxWrap}
      >
        <a
          className={styles.link}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};

export default CardWorks;
