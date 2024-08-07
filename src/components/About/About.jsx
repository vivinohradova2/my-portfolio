import React from "react";
import styles from "./About.module.scss";

const Main = () => {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.container}>
          <p className={styles.text}>
            I bring designs of any complexity to life by creating responsive and
            cross-browser layouts. I develop websites that display perfectly on
            any device, with expertise in flexbox and the Bootstrap framework. I
            pay attention to crucial details and write clean, easily extendable,
            and maintainable code. I have a deep understanding of web page
            structure.
          </p>
          <img src="/" alt="myPhoto" />
        </div>
      </section>
    </>
  );
};

export default Main;
