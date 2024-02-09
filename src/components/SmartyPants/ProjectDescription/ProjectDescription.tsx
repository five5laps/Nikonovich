import styles from "./ProjectDescription.module.css";

const ProjectDescription = () => {
  return (
    <div className={styles.project_description}>
      <div className={styles.project_description_page}>
        <span>SmartyPants — </span> современный центр развития ребенка <br />
        с прогрессивным подходом к обучению и воспитанию детей. <br />
        Подготовка производится по нескольким основным направлениям, для разных
        возрастных групп. <br />
        <div style={{ marginTop: "24px" }}>
          Главные положительные черты центра состоят в тщательном подборе
          высококлассных специалистов и небольшом наполнении групп.
        </div>
        <br /> Основная цель проекта — рекламная, поэтому в качестве реализации
        было выбрано создание лендинга.
      </div>
      <div className={styles.project_description_enemy}>
        <div className={styles.project_description_enemy_top}>
          Анализ конкурентов
        </div>
        <div className={styles.project_description_enemy_text}>
          На первом этапе работы был произведен анализ прямых
          <br /> конкурентов. Были проанализированы сайты частных детских садов,
          образовательных центров и центров дошкольной подготовки с целью
          исследования привычных решений в интерфейсе и контенте для основных
          пользователей данных ресурсов — родителей.
          <br /> Кроме того, важной частью исследования стали общие преимущества
          и недостатки решений конкурентов, на основе которых был разработан
          собственный дизайн SmartyPants.
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
