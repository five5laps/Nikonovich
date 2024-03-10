import styles from "./PageDesign.module.css";

interface IPageDesign {
  solutions: React.ReactNode;
  text: string;
}

const PageDesign = (props: IPageDesign) => {
  return (
    <div className={styles.design}>
      <div className={styles.design_top}>
        <div className={styles.design_top_title}>Дизайн</div>
        <div className={styles.design_top_text}>{props.text}</div>
      </div>
      {props.solutions}
    </div>
  );
};

export default PageDesign;
