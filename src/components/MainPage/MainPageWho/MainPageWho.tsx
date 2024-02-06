import styles from "./MainPageWho.module.css";

const MainPageWho = () => {
  return (
    <div className={styles.mainPage__who_container}>
      <div className={styles.mainPage__who}>
        <div className={styles.mainPage__who_content}>
          <div className={styles.mainPage__who_content_title}>
            <div className={styles.mainPage__who_content_name}>
              Никонович Екатерина -
            </div>
            <div className={styles.mainPage__who_content_designer}>
              Junior UX/UI DESIGNER
            </div>
          </div>
          <div className={styles.mainPage__who_content_photo}></div>
        </div>
      </div>
    </div>
  );
};

export default MainPageWho;
