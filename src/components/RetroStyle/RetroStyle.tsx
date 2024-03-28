import MainPageNav from "../MainPage/MainPageNav/MainPageNav";
import PageTop from "../Page/PageTop/PageTop";
import styles from "./RetroStyle.module.css";
import laptop from "../../assets/retrostyle/green.jpg";
import PageProject from "../Page/PageProject/PageProject";
import Footer from "../Footer/Footer";
import ProjectDescription from "../Page/ProjectDescription/ProjectDescription";
import RetroStyleProjectDescription from "./RetroStyleProjectDescription/RetroStyleProjectDescription";
import RetroStyleDescriptionEnemy from "./RetroStyleDescriptionEnemy/RetroStyleDescriptionEnemy";
import PageResults from "../SmartyPants/PageResults/PageResults";
import RetroStyleCards from "./RetroStyleCards/RetroStyleCards";
import PageDesign from "../Page/PageDesign/PageDesign";
import RetroStyleVisualSolutions from "./RetroStyleVisualSolutions/RetroStyleVisualSolutions";
import RetroStylePrototype from "./RetroStylePrototype/RetroStylePrototype";
import RetroStyleSlider from "./RetroStyleSlider/RetroStyleSlider";

const RetroStyle = () => {
  return (
    <div className={styles.retrostyle}>
      <MainPageNav />
      <PageTop
        background="#74E884"
        image={laptop}
        imageHeight={"480px"}
        imageMarginTop={"20px"}
      />
      <PageProject
        title="Retro Style Master Class"
        line1={{
          paddingRight: "395px",
          who: "Заказчик",
          text: "Учебный проект. Яндекс практикум",
        }}
        line2={{
          paddingRight: "385px",
          who: "Область",
          text: "Дополнительное профессиональное образование",
        }}
        line3={{
          paddingRight: "385px",
          who: "Моя роль",
          text: "Сбор референсов, создание прототипа, разработка визуального стиля и адаптивного дизайна",
        }}
        line4={{
          paddingRight: "840px",
          who: "Время реализации",
          text: "4 недели",
        }}
      />
      <ProjectDescription
        isLink={true}
        description={<RetroStyleProjectDescription />}
        enemy={<RetroStyleDescriptionEnemy />}
      />
      <PageResults
        title="Результаты анализа референсов"
        description="Мудборд"
        cards={<RetroStyleCards />}
        background="#74E884"
      />
      <PageDesign
        solutions={<RetroStyleVisualSolutions />}
        text="Визуальное оформление разрабатывалось на протяжении всего цикла разработки дизайна сайта. На этапе работы после создания мудборда мной были определены шрифты, цветовая палитра и базовые формы, которые будут использованы в работе. После прототипирования базовые формы уточнялись деталями, страница наполнялась акцентами, которых не было на вайрфреймах."
      />
      <RetroStylePrototype />
      <RetroStyleSlider />
      <Footer />
    </div>
  );
};

export default RetroStyle;
