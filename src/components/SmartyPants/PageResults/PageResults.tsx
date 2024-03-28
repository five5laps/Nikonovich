import styles from "./PageResults.module.css";

interface IPageResults {
  cards: React.ReactNode;
  title?: string;
  description?: string;
  background: string;
}

const PageResults = (props: IPageResults) => {
  return (
    <div className={styles.results} style={{ background: props.background }}>
      <div className={styles.results_content}>
        <div className={styles.results_content_top}>
          <div style={{ fontSize: "52px" }}>
            {" "}
            {props.title || "Результаты анализа"}{" "}
          </div>
          <div style={{ fontSize: "32px", lineHeight: "135%" }}>
            {props.description || "Необходимые разделы"}
          </div>
        </div>
        <div className={styles.results_content_cards}>{props.cards}</div>
      </div>
    </div>
  );
};

export default PageResults;
