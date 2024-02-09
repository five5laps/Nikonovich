import styles from "./ColorBox.module.css";

interface IColorBox {
  color: string;
  text: string;
  marginLeft?: string;
}

const ColorBox = (props: IColorBox) => {
  return (
    <div className={styles.colorBox}>
      <div
        style={{ background: props.color }}
        className={styles.colorBox_top}></div>
      <div className={styles.colorBox_bottom}>
        <div className={styles.colorBox_bottom_text}>
          <div style={{ marginLeft: props.marginLeft }}>{props.text}</div>
          {props.color}
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
