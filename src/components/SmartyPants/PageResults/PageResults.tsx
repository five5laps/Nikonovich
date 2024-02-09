import SmartyPantsCards from "../SmartyPantsCards/SmartyPantsCards";
import styles from "./PageResults.module.css";

const PageResults = () => {
  return (
    <div className={styles.results}>
      <div className={styles.results_content}>
        <div className={styles.results_content_top}>
          <div style={{ fontSize: "52px" }}>Результаты анализа</div>
          <div style={{ fontSize: "32px", lineHeight: "135%" }}>
            Необходимые разделы
          </div>
        </div>
        <div className={styles.results_content_cards}>
          <SmartyPantsCards />
        </div>
      </div>
    </div>
  );
};

export default PageResults;
