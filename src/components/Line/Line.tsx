import styles from "./Line.module.css";

interface ILine {
  who: string;
  text: string;
  paddingRight: string;
}

const Line = (props: ILine) => {
  return (
    <div className={styles.pageProject_description_line}>
      <div className={styles.pageProject_description_line_first}>
        {props.who}
      </div>
      <div
        style={{ paddingRight: props.paddingRight }}
        className={styles.pageProject_description_line_second}>
        {props.text}
      </div>
    </div>
  );
};

export default Line;
