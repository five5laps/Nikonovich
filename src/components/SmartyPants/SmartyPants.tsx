import Footer from "../Footer/Footer";
import MainPageNav from "../MainPage/MainPageNav/MainPageNav";
import PageTop from "../Page/PageTop/PageTop";
import styles from "./SmartyPants.module.css";

import smarty from "../../assets/notebooks/MacBook Pro.png";
import PageProject from "../Page/PageProject/PageProject";
import ProjectDescription from "../Page/ProjectDescription/ProjectDescription";
import PageResults from "./PageResults/PageResults";
import SmartyPantsVisualSolutions from "./SmartyPantsVisualSolutions/SmartyPantsVisualSolutions";
import SmartyPantsSlider from "./SmartyPantsSlider/SmartyPantsSlider";
import SmartyPantsProjectDescription from "./SmartyPantsProjectDescription/SmartyPantsProjectDescription";
import SmartyPantsProjectDescriptionEnemy from "./SmartyPantsProjectDescriptionEnemy/SmartyPantsProjectDescriptionEnemy";
import SmartyPantsCards from "./SmartyPantsCards/SmartyPantsCards";
import PageDesign from "../Page/PageDesign/PageDesign";

const SmartyPants = () => {
  return (
    <div className={styles.smartypants}>
      <MainPageNav />
      <PageTop
        background="#748ee8"
        image={smarty}
        imageHeight={"550px"}
        imageMarginTop={"30px"}
      />
      <PageProject
        line1={{
          paddingRight: "717px",
          who: "Заказчик",
          text: "Учебный проект",
        }}
        line2={{
          paddingRight: "385px",
          who: "Область",
          text: "Дополнительное детское образование",
        }}
        line3={{
          paddingRight: "385px",
          who: "Моя роль",
          text: "Полный дизайн лендинга от исследования до концепции и визуализации",
        }}
        line4={{
          paddingRight: "840px",
          who: "Время реализации",
          text: "2 недели",
        }}
        title="SmartyPants"
      />
      <ProjectDescription
        isLink={false}
        description={<SmartyPantsProjectDescription />}
        enemy={<SmartyPantsProjectDescriptionEnemy />}
      />
      <PageResults cards={<SmartyPantsCards />} background="#748ee8" />
      <PageDesign
        solutions={<SmartyPantsVisualSolutions />}
        text="Визуальное оформление разрабатывалось путем создания мудборда,
          прототипирования, разработки элементов UI kit и, наконец, создания
          первого варианта лендинга."
      />
      <SmartyPantsSlider />
      <Footer />
    </div>
  );
};

export default SmartyPants;
