import styles from "./Example.module.css";

interface IExample {
  ImageHeight: string;
  Image: string;
  Title: string;
  Name: string;
  ContentBackground: string;
  ButtonBoxShadow: string;
  ButtonBackground: string;
  link: string;
}

const Example = (props: IExample) => {
  return (
    <div className={styles.example}>
      <div
        style={{ background: props.ContentBackground }}
        className={styles.example__content}>
        <div className={styles.example__content__img}>
          <img src={props.Image} height={props.ImageHeight} />
        </div>
        <div className={styles.example__content__description}>
          <div className={styles.example__content__description_block}>
            <div className={styles.example__content__description_title}>
              {props.Title}
            </div>
            <div className={styles.example__content__description_name}>
              {props.Name}
            </div>
          </div>
          <div>
            <a href={props.link}>
              <div
                style={{
                  boxShadow: props.ButtonBoxShadow,
                  background: props.ButtonBackground,
                }}
                className={styles.example__content__description_learnMoreBtn}>
                Узнать подробнее
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
