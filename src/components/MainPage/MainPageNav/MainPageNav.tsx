import { Link } from "react-router-dom";
import styles from "./MainPageNav.module.css";

const MainPageNav = () => {
  return (
    <div className={styles.mainPage__nav}>
      <div className={styles.mainPage__nav_logo}>NIKONOVICH</div>
      <div className={styles.mainPage__nav_items}>
        <Link to="/" className={styles.mainPage__nav_items_item}>
          Главная
        </Link>
        <div className={styles.mainPage__nav_items_item}>
          <div className={styles.dropdown}>
            <a href="">Работы</a>
            <div className={styles.dropdown_arrow}></div>
            <ul className={styles.dropdown_menu}>
              <li>
                <a href="smartypants">SmartyPants</a>
              </li>
              <li>
                <a href="retrostyle">Retro Style</a>
              </li>
              <li>
                <a style={{ fontSize: "28px" }} href="timetotrip">
                  Пора в поход
                </a>
              </li>
              <li>
                <a href="skillswap">SkillSwap</a>
              </li>
            </ul>
          </div>
        </div>

        <a href="#" className={styles.mainPage__nav_items_item}>
          Контакты
        </a>
      </div>
    </div>
  );
};
export default MainPageNav;
