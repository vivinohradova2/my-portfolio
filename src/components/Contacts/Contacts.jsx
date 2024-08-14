import styles from "./Contacts.module.scss";
import { FaLinkedin, FaInstagramSquare, FaTelegram } from "react-icons/fa";

const Contacts = () => {
  return (
    <>
      <section className={styles.contacts}>
        <div className={styles.container}>
          <h2>Contact me</h2>
          <div className={styles.social}>
            <a className={styles.tel} href="tel: +380990699471">
              +380 99 069 94 71
            </a>
            <p>
              <a
                className={styles.email}
                href="mailto: vynohradova.frontend@gmail.com"
              >
                vynohradova.frontend@gmail.com
              </a>
            </p>
            <h4 className={styles.country}>Ukraine</h4>
            <div className={styles.social_media}>
              <a
                href="https://www.linkedin.com/in/viktoriia-vynohradova/"
                target="blank"
              >
                <FaLinkedin className={styles.linkedin} />
              </a>
              <a href="https://www.instagram.com/frontend_vika/" target="blank">
                <FaInstagramSquare className={styles.instagram} />
              </a>
              <a href="https://t.me/vinohradova_frontend" target="blank">
                <FaTelegram className={styles.telegram} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
