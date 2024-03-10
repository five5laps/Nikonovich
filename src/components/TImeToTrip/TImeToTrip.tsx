import MainPageNav from "../MainPage/MainPageNav/MainPageNav";
import styles from "./TImeToTrip.module.css";

import timeToTrip from "../../assets/timetotrip/logo.png";
import PageTop from "../Page/PageTop/PageTop";
import PageProject from "../Page/PageProject/PageProject";
import ProjectDescription from "../Page/ProjectDescription/ProjectDescription";
import TimeToTripProjectDescription from "./TimeToTripProjectDescription/TimeToTripProjectDescription";
import TimeToTripProjectDescriptionEnemy from "./TimeToTripProjectDescriptionEnemy/TimeToTripProjectDescriptionEnemy";
import PageResults from "../SmartyPants/PageResults/PageResults";
import TimeToTripCards from "./TimeToTripCards/TimeToTripCards";
import PageDesign from "../Page/PageDesign/PageDesign";
import Footer from "../Footer/Footer";
import TimeToTripVisualSolutions from "./TimeToTripVisualSolutions/TimeToTripVisualSolutions";
import TimeToTripSlider from "./TimeToTripSlider/TimeToTripSlider";

const TimeToTrip = () => {
  return (
    <div className={styles.timeToTrip}>
      <MainPageNav />
      <PageTop
        background="#e87492"
        image={timeToTrip}
        imageHeight={"550px"}
        imageMarginTop={"30px"}
      />
      <PageProject
        title="Пора в поход"
        line1={{
          paddingRight: "395px",
          who: "Заказчик",
          text: "Учебный проект. Яндекс практикум",
        }}
        line2={{
          paddingRight: "860px",
          who: "Область",
          text: "Туризм",
        }}
        line3={{
          paddingRight: "385px",
          who: "Моя роль",
          text: "Лендинг для туристического похода на Байкал",
        }}
        line4={{
          paddingRight: "840px",
          who: "Время реализации",
          text: "2 недели",
        }}
      />
      <ProjectDescription
        isLink={true}
        description={<TimeToTripProjectDescription />}
        enemy={<TimeToTripProjectDescriptionEnemy />}
      />
      <PageResults cards={<TimeToTripCards />} background="#e87492" />
      <PageDesign
        text="Визуальное оформление разрабатывалось путем создания мудборда, разработки элементов UI kit и, наконец, создания первого варианта лендинга."
        solutions={<TimeToTripVisualSolutions />}
      />
      <TimeToTripSlider />
      <Footer />
    </div>
  );
};

export default TimeToTrip;
