import { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {
const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  })
}

const toggleVisibility = () => {
  if (window.pageYOffset > 300) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
};

useEffect(() => {
  window.addEventListener("scroll", toggleVisibility);

  return () => {
    window.removeEventListener("scroll", toggleVisibility);
  };
}, []);
  
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.text}>&copy; {new Date().getFullYear()} Vynohradova Viktoriia</p>
          {isVisible && (
            <FaArrowUp className={styles.arrow} onClick={scrollToTop} />
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
