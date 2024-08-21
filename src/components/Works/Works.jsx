import { useState } from "react";
import CardWorks from "../CardWorks/CardWorks";
import styles from "./Works.module.scss";
import todolist from "../../assets/images/todolist.png";
import popcorn from "../../assets/images/popcorn.png";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  const cardData = [
    {
      background: popcorn,
      title: "Title 1",
      text: "Text 1",
    },
    {
      background: todolist,
      title: "Title 2",
      text: "Text 2",
    },
    {
      background: "path/to/background3.jpg",
      title: "Title 3",
      text: "Text 3",
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
                      background={card.background}
                      title={card.title}
                      text={card.text}
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
