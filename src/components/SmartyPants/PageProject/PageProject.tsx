import Line from "../../Line/Line";
import styles from "./PageProject.module.css";

const PageProject = () => {
  return (
    <div className={styles.pageProject}>
      <div className={styles.pageProject_title}>SmartyPants</div>
      <div className={styles.pageProject_description}>
        <Line paddingRight="717px" who="Заказчик" text="Учебный проект" />
        <Line
          paddingRight="385px"
          who="Область"
          text="Дополнительное детское образование"
        />
        <Line
          paddingRight="385px"
          who="Моя роль"
          text="Полный дизайн лендинга от исследования до концепции и визуализации"
        />
        <Line paddingRight="840px" who="Время реализации" text="2 недели" />
      </div>
    </div>
  );
};

export default PageProject;
