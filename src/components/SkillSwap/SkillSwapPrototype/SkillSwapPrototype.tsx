import styles from "./SkillSwapPrototype.module.css";
import diagram from "../../../assets/skillswap/diagram.jpg";
import phone1 from "../../../assets/skillswap/phone-1.png";
import phone2 from "../../../assets/skillswap/phone-2.png";
import phone3 from "../../../assets/skillswap/phone-3.png";

const SkillSwapPrototype = () => {
  return (
    <div className={styles.skillswap_prototype}>
      <div className={styles.skillswap_prototype_title}>Прототипирование</div>
      <div className={styles.skillswap_prototype_description}>
        Создание прототипов — важный этап работы при создании нового продукта.
        Перед созданием вайрфреймов было решено разработать блок-схемы,
        отражающие пользовательские сценарии. Первостепенно был создан основной
        пользовательский сценарий, который впоследствии был дополнен
        дополнительными и экстренными. Здесь вы можете ознакомиться с одной
        из созданных блок-схем:
      </div>
      <div className={styles.skillswap_prototype_diagram}>
        <img src={diagram} alt="diagram" />
      </div>
      <div className={styles.skillswap_prototype_phones}>
        Затем, используя блок-схемы, я осуществила пользовательские сценарии
        посредством вайрфреймов. Так, например, выглядит просмотр коротких видео
        о хобби в прототипе:
        <div className={styles.skillswap_prototype_phones_block}>
          <div>
            <img src={phone1} alt="phone1" />
          </div>
          <div>
            <img src={phone2} alt="phone2" />
          </div>
          <div>
            <img src={phone3} alt="phone3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSwapPrototype;
