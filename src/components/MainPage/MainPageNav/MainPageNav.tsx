import styles from "./MainPageNav.module.css";

const MainPageNav = () => {
  return (
    <div className={styles.mainPage__nav}>
      <div className={styles.mainPage__nav_logo}>NIKONOVICH</div>
      <div className={styles.mainPage__nav_items}>
        <a href="#" className={styles.mainPage__nav_items_item}>
          Главная
        </a>
        <div className={styles.mainPage__nav_items_item}>Работы</div>
        <a href="#" className={styles.mainPage__nav_items_item}>
          Контакты
        </a>
      </div>
    </div>
  );
};
export default MainPageNav;
