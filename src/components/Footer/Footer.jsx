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
  // Добавляем слушатель события при монтировании компонента
  window.addEventListener("scroll", toggleVisibility);

  // Убираем слушатель события при размонтировании компонента
  return () => {
    window.removeEventListener("scroll", toggleVisibility);
  };
}, []);
  
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.text}>&copy; 2024 Vynohradova Viktoriia</p>
          {isVisible && (
            <FaArrowUp className={styles.arrow} onClick={scrollToTop} />
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
