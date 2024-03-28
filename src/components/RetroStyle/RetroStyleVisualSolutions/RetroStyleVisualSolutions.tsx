import RetroStyleColorBoxes from "./RetroStyleColorBoxes/RetroStyleColorBoxes";
import styles from "./RetroStyleVisualSolutions.module.css";
import forms from "../../../assets/retrostyle/forms.jpg";

const RetroStyleVisualSolutions = () => {
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
        <RetroStyleColorBoxes />
      </div>
      <div className={styles.design_visualSolutions_fonts}>
        Шрифты и тестовые стили
        <div className={styles.design_visualSolutions_fonts_content}>
          <div className={styles.design_visualSolutions_fonts_content_left}>
            <div
              className={
                styles.design_visualSolutions_fonts_content_left_hBlock
              }>
              <h1>H1: Заголовок</h1>
              <div>Alegreya SC/ 52 px/ Medium</div>
            </div>
            <div
              className={
                styles.design_visualSolutions_fonts_content_left_hBlock
              }>
              <h2>H2: Заголовок</h2>
              <div>Alegreya SС/ 34 px/ Medium</div>
            </div>
            <div
              className={
                styles.design_visualSolutions_fonts_content_left_hBlock
              }>
              <h3>H3: Заголовок </h3>
              <div>Alegreya SC/ 26 px/ Medium</div>
            </div>
          </div>
          <div className={styles.design_visualSolutions_fonts_content_right}>
            <div
              className={
                styles.design_visualSolutions_fonts_content_right_hblock
              }>
              <div>Text: основной текст на странице</div>
              <div>Alegreya SC/ 20 px/ Medium</div>
            </div>
            <div
              className={
                styles.design_visualSolutions_fonts_content_right_hblock
              }>
              <div>Links: ссылки и подписи</div>
              <div>Alegreya SC/ 20 px/ Italic</div>
            </div>
            <div
              className={
                styles.design_visualSolutions_fonts_content_right_hblock
              }>
              <div>TextMobile: текст для смартфонов</div>
              <div>Alegreya SC/ 16 px/ Medium</div>
            </div>
          </div>
        </div>
        <div className={styles.design_visualSolutions_fonts_components}>
          <div
            className={styles.design_visualSolutions_fonts_components_content}>
            Базовые и уточненные формы (компоненты)
            <img src={forms} alt="forms" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroStyleVisualSolutions;
