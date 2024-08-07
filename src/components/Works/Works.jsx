import styles from "./Works.module.scss";

const Works = () => {
  return (
    <>
      <section className={styles.works}>
        <div className={styles.container}>
          <h2>Works</h2>
          <div className={styles.boxWrap}>
            <a className={styles.link} href="/">
              title
            </a>
            <p className={styles.text}>text</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
