import TimeToTripColorBoxes from "./TimeToTripColorBoxes/TimeToTripColorBoxes";
import styles from "./TimeToTripVisualSolutions.module.css";

const TimeToTripVisualSolutions = () => {
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
        <TimeToTripColorBoxes />
      </div>
      <div className={styles.design_visualSolutions_fonts}>
        Шрифты и тестовые стили //Шрифты проверить и исправить
        <div className={styles.design_visualSolutions_fonts_content}>
          <div className={styles.design_visualSolutions_fonts_content_left}>
            <div
              className={
                styles.design_visualSolutions_fonts_content_left_hBlock
              }>
              <div>H1 Заголовок</div>
              <h1>Пора в поход</h1>
              <div>Oswald / 52 px/ SemiBold</div>
            </div>
            <div
              className={
                styles.design_visualSolutions_fonts_content_left_hBlock
              }>
              <div>H2 Заголовок</div>
              <h2>Пора в поход</h2>
              <div>Oswald / 48 px/ SemiBold</div>
            </div>
            <div
              className={
                styles.design_visualSolutions_fonts_content_left_hBlock
              }>
              <div>H3 Заголовок</div>
              <h3>Пора в поход</h3>
              <div>Fira Sans/ 24 px/ Medium</div>
            </div>
          </div>
          <div className={styles.design_visualSolutions_fonts_content_right}>
            <div
              className={
                styles.design_visualSolutions_fonts_content_right_hblock
              }>
              <div>text</div>
              <div>Пора в поход</div>
              <div>Fira Sans/ 20 px/ Regular</div>
            </div>
            <div
              className={
                styles.design_visualSolutions_fonts_content_right_hblock
              }>
              <div>links</div>
              <div>Пора в поход</div>
              <div>Fira Sans/ 20 px/ Regular</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeToTripVisualSolutions;
