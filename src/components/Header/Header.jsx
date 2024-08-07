import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.top}>
            <img src="/" alt="icon" />
            <nav className={styles.hamburger}>
              <FaHamburger onClick={handleClickHamburger} />
            </nav>
          </div>

          <div className={` ${isOpen ? styles.menuOpen : styles.menuClose}`}>
            <div className={styles.social}>
              <p>Linkedin</p>
              <p>Instagram</p>
              <p>Telegram</p>
            </div>

            <nav className={styles.menu}>
              <li>
                <FaArrowRight className={styles.arrow} />
                Home
              </li>
              <li>
                <FaArrowRight className={styles.arrow} />
                About me
              </li>
              <li>
                <FaArrowRight className={styles.arrow} />
                Tooling
              </li>
              <li>
                <FaArrowRight className={styles.arrow} />
                Works
              </li>
              <li>
                <FaArrowRight className={styles.arrow} />
                Contacts
              </li>
              <li>
                <FaArrowRight className={styles.arrow} />
                Resume
              </li>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
