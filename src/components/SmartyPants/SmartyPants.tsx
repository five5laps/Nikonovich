import Footer from "../Footer/Footer";
import MainPageNav from "../MainPage/MainPageNav/MainPageNav";
import PageTop from "../Page/PageTop/PageTop";
import styles from "./SmartyPants.module.css";

import smarty from "../../assets/notebooks/MacBook Pro.png";
import PageProject from "./PageProject/PageProject";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import PageResults from "./PageResults/PageResults";
import ColorBox from "../UI/ColorBox/ColorBox";
import SmartyPantsColorBoxes from "./SmartyPantsColorBoxes/SmartyPantsColorBoxes";

const SmartyPants = () => {
  return (
    <div className={styles.smartypants}>
      <MainPageNav />
      <PageTop image={smarty} imageHeight={"550px"} imageMarginTop={"30px"} />
      <PageProject />
      <ProjectDescription />
      <PageResults />
      <div className={styles.design}>
        <div className={styles.design_top}>
          <div className={styles.design_top_title}>Дизайн</div>
          <div className={styles.design_top_text}>
            Визуальное оформление разрабатывалось путем создания мудборда,
            прототипирования, разработки элементов UI kit и, наконец, создания
            первого варианта лендинга.
          </div>
        </div>
        <div className={styles.design_visual_solutions}>
          <div className={styles.design_visual_solutions_top}>
            <div>Конкретные визуальные решения</div>
            <div
              style={{
                fontSize: "32px",
                lineHeight: "135%",
                paddingTop: "40px",
              }}>
              Цветовая палитра
            </div>
          </div>
          <div className={styles.design_visual_solutions_squares}>
            <SmartyPantsColorBoxes />
          </div>
          <div className={styles.design_visual_solutions_fonts}>
            Шрифты и тестовые стили
            <div className={styles.design_visual_solutions_fonts_content}>
              <div
                className={styles.design_visual_solutions_fonts_content_left}>
                a
              </div>
              <div
                className={styles.design_visual_solutions_fonts_content_right}>
                <div>a</div>
                <div>a</div>
                <div>a</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SmartyPants;
