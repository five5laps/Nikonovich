import styles from "./RetroStyleProjectDescription.module.css";

const RetroStyleProjectDescription = () => {
  return (
    <div className={styles.retrostyle__projectDescription}>
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
          href="#">
          Retro Style Master Class
          <i style={{ color: "#e87492", textDecoration: "none" }}>*</i>
        </a>{" "}
        —{" "}
      </span>
      мастер класс, посвященный ретро стилю в веб-дизайне. По заданию от
      заказчика сайт должен быть выполнен в выбранной стилистике, а так же
      призывать к регистрации на мероприятие. Должно быть реализовано несколько
      страниц, в которые входят: главная страница мероприятия, страница
      регистрации и страница подтверждения почты. Сайт должен быть адаптивным,
      т.е. содержать версии для десктопа, планшета и мобильных устройств.
    </div>
  );
};

export default RetroStyleProjectDescription;
