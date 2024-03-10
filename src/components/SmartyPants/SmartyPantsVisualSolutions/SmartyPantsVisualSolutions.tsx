import SmartyPantsColorBoxes from "../SmartyPantsColorBoxes/SmartyPantsColorBoxes";
import styles from "./SmartyPantsVisualSolutions.module.css";

const SmartyPantsVisualSolutions = () => {
  return (
    <div className={styles.design_visualSolutions}>
      <div className={styles.design_visualSolutions_top}>
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
      <div className={styles.design_visualSolutions_squares}>
        <SmartyPantsColorBoxes />
      </div>
      <div className={styles.design_visualSolutions_fonts}>
        Шрифты и тестовые стили
        <div className={styles.design_visualSolutions_fonts_content}>
          <div className={styles.design_visualSolutions_fonts_content_left}>
            <div
              className={
                styles.design_visualSolutions_fonts_content_left_hBlock
              }>
              <div>H1 Заголовок</div>
              <h1>SmartyPants</h1>
              <div>Alegreya Sans/ 64 px/ Medium</div>
            </div>
            <div
              className={
                styles.design_visualSolutions_fonts_content_left_hBlock
              }>
              <div>H2 Заголовок</div>
              <h2>SmartyPants</h2>
              <div>Alegreya Sans/ 52 px/ Regular</div>
            </div>
            <div
              className={
                styles.design_visualSolutions_fonts_content_left_hBlock
              }>
              <div>H3 Заголовок</div>
              <h3>SmartyPants</h3>
              <div>Alegreya Sans/ 28 px/ Regular</div>
            </div>
          </div>
          <div className={styles.design_visualSolutions_fonts_content_right}>
            <div
              className={
                styles.design_visualSolutions_fonts_content_right_hblock
              }>
              <div>text</div>
              <div>Пример довольно длинного текста</div>
              <div>Fira Sans/ 20 px/ Regular</div>
            </div>
            <div
              className={
                styles.design_visualSolutions_fonts_content_right_hblock
              }>
              <div>links</div>
              <div>Пример довольно длинного текста</div>
              <div>Fira Sans/ 20 px/ Regular</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartyPantsVisualSolutions;
