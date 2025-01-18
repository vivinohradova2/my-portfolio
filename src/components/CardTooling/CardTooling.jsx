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
import vite from '../../assets/images/vite.png';
import tailwindcss from '../../assets/images/tailwind.png';
import zustand from '../../assets/images/zustand.png';

const data = [
  { url: reactImg, titles: "React", link: "https://legacy.reactjs.org/" },
  { url: jsImg, titles: "JavaScript", link: "https://www.w3schools.com/js/" },
  {
    url: tsImg,
    titles: "TypeScript",
    link: "https://www.typescriptlang.org/docs/",
  },
  { url: reduxImg, titles: "Redux", link: "https://redux.js.org/" },
  { url: reduxImg, titles: "ReduxTK", link: "https://redux-toolkit.js.org/" },
  {
    url: jestImg,
    titles: "Jest",
    link: "https://jestjs.io/docs/getting-started",
  },
  {
    url: htmlImg,
    titles: "HTML5",
    link: "https://www.w3schools.com/html/html_intro.asp",
  },
  {
    url: cssImg,
    titles: "CSS3",
    link: "https://www.w3schools.com/html/html_css.asp",
  },
  {
    url: sassImg,
    titles: "SASS",
    link: "https://sass-lang.com/documentation/",
  },
  {
    url: ajaxImg,
    titles: "AJAX",
    link: "https://www.w3schools.com/xml/ajax_intro.asp",
  },
  { url: restImg, titles: "REST", link: "https://uk.wikipedia.org/wiki/REST" },
  {
    url: unitImg,
    titles: "Unit test",
    link: "https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%D0%BD%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F",
  },
  { url: gitImg, titles: "Git", link: "https://git-scm.com/docs" },
  {
    url: bootstrapImg,
    titles: "Bootstrap",
    link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/",
  },
  { url: bemImg, titles: "BEM", link: "https://en.bem.info/methodology/" },
  {
    url: muiImg,
    titles: "MUI",
    link: "https://mui.com/material-ui/getting-started/",
  },
  {
    url: oopImg,
    titles: "OOP",
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming",
  },
  {
    url: vite,
    titles: "Vite",
    link: "https://vite.dev/",
  },
  {
    url: tailwindcss,
    titles: "Tailwindcss",
    link: "https://tailwindcss.com/docs/guides/vite",
  },
  {
    url: zustand,
    titles: "Zustand",
    link: "https://zustand.docs.pmnd.rs/getting-started/introduction",
  },
];

const CardTooling = () => {
  return (
    <>
      <div className={styles.cardWrap}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <img className={styles.icon} src={item.url} alt={item.title} />
            <a
              href={item.link}
              className={styles.text}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.titles}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardTooling;
