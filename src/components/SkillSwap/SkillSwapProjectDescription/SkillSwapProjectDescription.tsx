import styles from "./SkillSwapProjectDescription.module.css";

const SkillSwapProjectDescription = () => {
  return (
    <div className={styles.skillswap__projectDescription}>
      <span>
        <a
          target="_blank"
          style={{
            textDecoration: "underline",
            color: "black",
            fontStyle: "italic",
            fontWeight: "600",
            textDecorationSkipInk: "none",
          }}
          href="https://www.figma.com/proto/eTl3opyfIXJg8jsZtfWsj1/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3-%D0%B4%D0%BB%D1%8F-%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BB%D1%83%D0%B1%D0%B0-(Copy)?page-id=502%3A2&type=design&node-id=555-9&viewport=220%2C455%2C0.16&t=Tv1jSRKWSis5rsq5-1&scaling=min-zoom&mode=design">
          SkillSwap
          <i style={{ color: "#e87492", textDecoration: "none" }}>*</i>
        </a>{" "}
        —{" "}
      </span>
      мобильное приложение для обмена навыками. Внутри можно найти множество
      мастер-классов и пройти обучение под руководством опытных мастеров.
      Главной особенностью данного приложения является возможность участия в
      онлайн мастер-классах, что позволяет пользователю задавать вопросы
      наставнику в режиме реального времени. Кроме того, отличительной чертой
      приложения является функция просмотра коротких видео o хобби, которая
      позволяет пользователю погрузиться в мир новых, неизвестных ему увлечений.
    </div>
  );
};

export default SkillSwapProjectDescription;
