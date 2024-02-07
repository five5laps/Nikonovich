import Line from "../../Line/Line";
import styles from "./PageProject.module.css";

const PageProject = () => {
  return (
    <div className={styles.pageProject}>
      <div className={styles.pageProject_title}>SmartyPants</div>
      <div className={styles.pageProject_description}>
        <Line paddingRight="700px" who="Заказчик" text="Учебный проект" />
        <Line
          paddingRight="410px"
          who="Область"
          text="Дополнительное детское образование"
        />
        <Line
          paddingRight="325px"
          who="Моя роль"
          text="Полный дизайн лендинга от исследования до концепции и визуализации"
        />
        <Line paddingRight="805px" who="Время реализации" text="2 недели" />
      </div>
    </div>
  );
};

export default PageProject;
