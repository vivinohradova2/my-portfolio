import "./App.css";
import "./App.module.scss";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Tooling from "./components/Tooling/Tooling";

function App() {
  return (
    <>
      <Header />
      <About />
      <Tooling />
      <Works />
      {/* <Contacts />
      <Footer /> */}
    </>
  );
}

export default App;
