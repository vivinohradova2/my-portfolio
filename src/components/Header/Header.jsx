import { useState, useEffect } from "react";
import { FaHamburger, FaArrowRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "tooling", label: "Tooling" },
  { id: "works", label: "Works" },
  { id: "contacts", label: "Contacts" },
  { id: "resume", label: "Resume" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (index, sectionId) => {
    setCurrentIndex(index);
    setIsOpen(false);

    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });

    const offset = window.innerWidth < 521 ? -40 : window.innerWidth <= 768 ? -50 : 0;
    setTimeout(() => {
      window.scrollBy(0, offset);
    }, 500);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100; // Смещение для точности
    let foundIndex = 0;

    sections.forEach((section, index) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        const offsetTop = sectionElement.offsetTop;
        const offsetBottom = offsetTop + sectionElement.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          foundIndex = index;
        }
      }
    });

    setCurrentIndex(foundIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <section id="home" className={styles.container}>
          <div className={styles.top}>
            <img src={logo} alt="icon" />

            <nav className={styles.hamburger}>
              {isOpen ? (
                <RxCross1 onClick={handleClickHamburger} />
              ) : (
                <FaHamburger onClick={handleClickHamburger} />
              )}
            </nav>
          </div>

          {/* Mobile */}
          <div className={styles.mobile}>
            <div className={` ${isOpen ? styles.menuOpen : styles.menuClose}`}>
              <div className={styles.social}>
                <a href="https://www.linkedin.com/in/viktoriia-vynohradova/" target="blank">
                  <p>Linkedin</p>
                </a>

                <a href="https://www.instagram.com/frontend_vika/" target="blank">
                  <p>Instagram</p>
                </a>
                <a href="https://t.me/vinohradova_frontend" target="blank">
                  <p>Telegram</p>
                </a>
              </div>

              <nav className={styles.menu}>
                {sections.map((section, index) => (
                  <li
                    key={section.id}
                    className={`${currentIndex === index ? styles.active : ""}`}
                    onClick={() => handleNavClick(index, section.id)}
                  >
                    <FaArrowRight className={styles.arrow} />
                    {section.label}
                  </li>
                ))}
              </nav>
            </div>
          </div>

          {/* Desktop */}
          <div className={styles.desktop}>
            <div className={styles.social}>
              <a href="https://www.linkedin.com/in/viktoriia-vynohradova/" target="blank">
                <p>Linkedin</p>
              </a>

              <a href="https://www.instagram.com/frontend_vika/" target="blank">
                <p>Instagram</p>
              </a>
              <a href="https://t.me/vinohradova_frontend" target="blank">
                <p>Telegram</p>
              </a>
            </div>

            <nav className={styles.menu}>
              {sections.map((section, index) => (
                <li
                  key={section.id}
                  className={`${currentIndex === index ? styles.active : ""}`}
                  onClick={() => handleNavClick(index, section.id)}
                >
                  <FaArrowRight className={styles.arrow} />
                  {section.label}
                </li>
              ))}
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
