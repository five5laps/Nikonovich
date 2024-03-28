import styles from "./RetroStylePrototype.module.css";

import diagram from "../../../assets/retrostyle/prototype.jpg";

const RetroStylePrototype = () => {
  return (
    <div className={styles.retrostyle_prototype}>
      <div className={styles.retrostyle_prototype_title}>Прототипирование</div>
      <div className={styles.retrostyle_prototype_description}>
        На этапе создания прототипов первым делом была разработана блок-схема,
        отражающая основной пользовательский сценарий. Следующим действием была
        разработка вайрфреймов. После чего можно было переходить к разработке
        визуального стиля.
      </div>
      <div className={styles.retrostyle_prototype_diagram}>
        <img src={diagram} alt="diagram" />
      </div>
    </div>
  );
};

export default RetroStylePrototype;
