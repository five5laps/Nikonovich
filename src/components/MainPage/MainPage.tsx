import Footer from "../Footer/Footer";
import styles from "./MainPage.module.css";
import MainPageExamples from "./MainPageExamples/MainPageExamples";
import MainPageNav from "./MainPageNav/MainPageNav";
import MainPageWho from "./MainPageWho/MainPageWho";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <MainPageNav />
      <MainPageWho />
      <MainPageExamples />
      <Footer />
    </div>
  );
};

export default MainPage;
