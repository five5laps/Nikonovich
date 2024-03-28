import Footer from "../Footer/Footer";
import MainPageNav from "../MainPage/MainPageNav/MainPageNav";
import PageProject from "../Page/PageProject/PageProject";
import PageTop from "../Page/PageTop/PageTop";
import skillswap from "../../assets/skillswap/logo.png";
import styles from "./SkillSwap.module.css";
import ProjectDescription from "../Page/ProjectDescription/ProjectDescription";
import SkillSwapProjectDescription from "./SkillSwapProjectDescription/SkillSwapProjectDescription";
import SkillSwapDescriptionEnemy from "./SkillSwapDescriptionEnemy/SkillSwapDescriptionEnemy";
import PageResults from "../SmartyPants/PageResults/PageResults";
import SkillSwapCards from "./SkillSwapCards/SkillSwapCards";
import SkillSwapDialogCard from "./SkillSwapDialogCard/SkillSwapDialogCard";
import SkillSwapPrototype from "./SkillSwapPrototype/SkillSwapPrototype";

const SkillSwap = () => {
  return (
    <div className={styles.skillswap}>
      <MainPageNav />
      <PageTop
        background="#e8c974"
        image={skillswap}
        imageHeight={"480px"}
        imageMarginTop={"20px"}
      />
      <PageProject
        title="Пора в поход"
        line1={{
          paddingRight: "395px",
          who: "Заказчик",
          text: "Учебный проект. Яндекс практикум",
        }}
        line2={{
          paddingRight: "885px",
          who: "Область",
          text: "Хобби",
        }}
        line3={{
          paddingRight: "385px",
          who: "Моя роль",
          text: "Проведение анализа конкурентов, проведение глубинного интервью, прототипирование",
        }}
        line4={{
          paddingRight: "768px",
          who: "Время реализации",
          text: "Октябрь 2023",
        }}
      />
      <ProjectDescription
        isLink={true}
        description={<SkillSwapProjectDescription />}
        enemy={<SkillSwapDescriptionEnemy />}
      />
      <PageResults cards={<SkillSwapCards />} background="#e8c974" />
      <SkillSwapDialogCard />
      <SkillSwapPrototype />
      <Footer />
    </div>
  );
};

export default SkillSwap;
