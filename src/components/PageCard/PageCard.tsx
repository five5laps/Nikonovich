import styles from "./PageCard.module.css";

interface IPageCard {
  section: string;
  top: string;
  content: React.ReactNode;
}

const PageCard = (props: IPageCard) => {
  return (
    <div className={styles.results_content_cards_item}>
      <div className={styles.results_content_cards_item_section}>
        {props.section}
      </div>
      <div className={styles.results_content_cards_item_text}>
        <div className={styles.results_content_cards_item_text_top}>
          {props.top}
        </div>
        <div className={styles.results_content_cards_item_text_content}>
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default PageCard;
