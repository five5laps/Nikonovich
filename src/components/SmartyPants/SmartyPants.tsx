import Footer from "../Footer/Footer";
import MainPageNav from "../MainPage/MainPageNav/MainPageNav";
import PageTop from "../Page/PageTop/PageTop";
import styles from "./SmartyPants.module.css";

import smarty from "../../assets/notebooks/MacBook Pro.png";
import PageProject from "./PageProject/PageProject";

const SmartyPants = () => {
  return (
    <div className={styles.smartypants}>
      <MainPageNav />
      <PageTop image={smarty} imageHeight={"550px"} imageMarginTop={"30px"} />
      <PageProject />
      <Footer />
    </div>
  );
};

export default SmartyPants;
