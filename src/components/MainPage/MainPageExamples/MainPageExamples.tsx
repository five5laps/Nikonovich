import Example from "./Example/Example";
import styles from "./MainPageExamples.module.css";

import smartyPants from "../../../assets/notebooks/MacBook Pro.png";
import retro from "../../../assets/notebooks/Rectangle.png";
import trip from "../../../assets/notebooks/Rectangle(1).png";
import skillswap from "../../../assets/notebooks/Galaxy Note 20 Ultra.png";

const MainPageExamples = () => {
  return (
    <div className={styles.mainPage__Examples}>
      Последние работы
      <div className={styles.mainPage__Examples_content}>
        <Example
          ImageHeight={"550px"}
          Image={smartyPants}
          Title={"SmartyPants"}
          Name={"Официальная станица образовательного центра"}
          ContentBackground={"#748ee8"}
          ButtonBoxShadow={"0 4px 4px 0 #988654"}
          ButtonBackground={
            "linear-gradient(270deg, #fde1ec 0%, #e8c974 68.75%)"
          }
          link={"/smartypants"}
        />
        <Example
          ImageHeight={"550px"}
          Image={retro}
          Title={"Ретро стиль"}
          Name={"Мастер-класс по направлению в дизайне"}
          ContentBackground={"#74e884"}
          ButtonBoxShadow={"0 4px 4px 0 #8b4a5b"}
          ButtonBackground={
            "linear-gradient(270deg, #f0e36c 0%, #e87492 78.12%)"
          }
          link={"/retrostyle"}
        />
        <Example
          ImageHeight={"420px"}
          Image={trip}
          Title={"Пора в поход"}
          Name={"Туристический клуб"}
          ContentBackground={"#e87492"}
          ButtonBoxShadow={"0 4px 4px 0 #8b4a5b"}
          ButtonBackground={
            "linear-gradient(270deg, #fcfde1 0%, #74e884 50%, #367877 100%)"
          }
          link={"/timetotrip"}
        />
        <Example
          ImageHeight={"444px"}
          Image={skillswap}
          Title={"SkillSwap"}
          Name={"Приложение обмена навыками"}
          ContentBackground={"#e8c974"}
          ButtonBoxShadow={"0 4px 4px 0 #8b4a5b"}
          ButtonBackground={
            "linear-gradient(270deg, #748ee8 46.88%, #5f3678 100%)"
          }
          link={"/skillswap"}
        />
      </div>
    </div>
  );
};

export default MainPageExamples;
