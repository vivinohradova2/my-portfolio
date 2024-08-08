import styles from "./CardWorks.module.scss";

const CardWorks = ({ background, title, text }) => {
  return (
    <>
      <div
        className={styles.boxWrap}
        style={{ backgroundImage: `url(${background})` }}
      >
        <a className={styles.link} href="/">
          {title}
        </a>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};

export default CardWorks;
