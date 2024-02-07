import styles from "./PageTop.module.css";

interface IPageTop {
  image: string;
  imageHeight: string;
  imageMarginTop: string;
}

const PageTop = (props: IPageTop) => {
  return (
    <div className={styles.pageTop}>
      <div
        style={{ marginTop: props.imageMarginTop }}
        className={styles.pageTop_img}>
        <img style={{ height: props.imageHeight }} src={props.image} />
      </div>
    </div>
  );
};

export default PageTop;
