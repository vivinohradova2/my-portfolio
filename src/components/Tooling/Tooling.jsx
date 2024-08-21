import styles from "./Tooling.module.scss";
import CardTooling from "../CardTooling/CardTooling";

const Tooling = () => {
  return (
    <section id="tooling" className={styles.tooling}>
      <div className={styles.container}>
        <h2>Tooling</h2>
        <CardTooling />
      </div>
    </section>
  );
};

export default Tooling;
