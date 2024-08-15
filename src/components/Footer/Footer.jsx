import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.text}>&copy; 2024 Vynohradova Viktoriia</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
