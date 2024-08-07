import styles from "./CardTooling.module.scss";
import reactImg from "../../assets/images/react.png";
import jsImg from "../../assets/images/js.png";
import tsImg from "../../assets/images/ts.png";
import reduxImg from "../../assets/images/redux.png";
import jestImg from "../../assets/images/jest.png";
import htmlImg from "../../assets/images/html.png";
import cssImg from "../../assets/images/css.png";
import sassImg from "../../assets/images/sass.png";
import ajaxImg from "../../assets/images/ajax.png";
import restImg from "../../assets/images/rest.png";
import unitImg from "../../assets/images/unit.png";
import gitImg from "../../assets/images/git.png";
import bootstrapImg from "../../assets/images/bootstrap.png";
import bemImg from "../../assets/images/bem.png";
import muiImg from "../../assets/images/mui.png";
import oopImg from "../../assets/images/oop.png";

const data = [
  { url: reactImg, titles: "React" },
  { url: jsImg, titles: "JavaScript" },
  { url: tsImg, titles: "TypeScript" },
  { url: reduxImg, titles: "Redux" },
  { url: reduxImg, titles: "ReduxTK" },
  { url: jestImg, titles: "Jest" },
  { url: htmlImg, titles: "HTML5" },
  { url: cssImg, titles: "CSS3" },
  { url: sassImg, titles: "SASS" },
  { url: ajaxImg, titles: "AJAX" },
  { url: restImg, titles: "REST" },
  { url: unitImg, titles: "Unit test" },
  { url: gitImg, titles: "Git" },
  { url: bootstrapImg, titles: "Bootstrap" },
  { url: bemImg, titles: "BEM" },
  { url: muiImg, titles: "MUI" },
  { url: oopImg, titles: "OOP" },
];

const CardTooling = () => {
  return (
    <>
      <div className={styles.cardWrap}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <img className={styles.icon} src={item.url} alt={item.title} />
            <p className={styles.text}>{item.titles}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardTooling;
