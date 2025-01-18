import { useState } from "react";
import CardWorks from "../CardWorks/CardWorks";
import styles from "./Works.module.scss";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  const cardData = [
    {
      url: "https://iryna-derhachova.website/?fbclid=PAZXh0bgNhZW0CMTEAAaZb5ArDvMaesYdlSGi7nl9ydq-y_HXB1XIVULcl2sNjZIjP_E7qy9jYaAg_aem__iYCpX_L4nMyLRL9nfkp3A",
      title: "Business card",
      text: "Business card website for a translator",
    },

    {
      url: "https://vivinohradova.github.io/travel-list/",
      title: "Far away",
      text: "A site for making a travel packing list. There are sorting, adding and deleting functions",
    },
    {
      url: "https://vivinohradova.github.io/memory-flip-kid/",
      title: "Memory flip",
      text: "This is a simple and fun memory game for kids! Players need to remember the locations of the cards with images and find matching pairs.",
    },
    {
      url: "https://github.com/vivinohradova/use_popcorn/tree/main/src/components",
      title: "usePopcorn",
      text: "A site for searching, adding and saving a list of favorite films",
    },
  ];

  return (
    <>
      <section id="works" className={styles.works}>
        <div className={styles.container}>
          <h2>Works</h2>
          <div className={styles.wrapCard}>
            <div className={styles.carousel}>
              <div className={styles.carouselInner}>
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className={`${styles.card} ${
                      index === currentIndex ? styles.active : ""
                    }`}
                    onClick={() => handleCardClick(index)}
                  >
                    <CardWorks
                      title={card.title}
                      text={card.text}
                      url={card.url}
                      isActive={index === currentIndex}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
