import Footer from "../Footer/Footer";
import MainPageNav from "../MainPage/MainPageNav/MainPageNav";
import PageProject from "../Page/PageProject/PageProject";
import PageTop from "../Page/PageTop/PageTop";
import skillswap from "../../assets/skillswap/logo.png";
import styles from "./SkillSwap.module.css";
import ProjectDescription from "../Page/ProjectDescription/ProjectDescription";
import SkillSwapProjectDescription from "./SkillSwapProjectDescription/SkillSwapProjectDescription";
import SkillSwapDescriptionEnemy from "./SkillSwapDescriptionEnemy/SkillSwapDescriptionEnemy";
import PageResults from "../SmartyPants/PageResults/PageResults";
import SkillSwapCards from "./SkillSwapCards/SkillSwapCards";

const SkillSwap = () => {
  return (
    <div className={styles.skillswap}>
      <MainPageNav />
      <PageTop
        background="#e8c974"
        image={skillswap}
        imageHeight={"480px"}
        imageMarginTop={"20px"}
      />
      <PageProject
        title="Пора в поход"
        line1={{
          paddingRight: "395px",
          who: "Заказчик",
          text: "Учебный проект. Яндекс практикум",
        }}
        line2={{
          paddingRight: "885px",
          who: "Область",
          text: "Хобби",
        }}
        line3={{
          paddingRight: "385px",
          who: "Моя роль",
          text: "Проведение анализа конкурентов, проведение глубинного интервью, прототипирование",
        }}
        line4={{
          paddingRight: "768px",
          who: "Время реализации",
          text: "Октябрь 2023",
        }}
      />
      <ProjectDescription
        isLink={true}
        description={<SkillSwapProjectDescription />}
        enemy={<SkillSwapDescriptionEnemy />}
      />
      <PageResults cards={<SkillSwapCards />} background="#e8c974" />
      <div className={styles.interview}>
        <div className={styles.interview_top}>
          <div className={styles.interview_top_title}>Глубинное интервью</div>
          <div className={styles.interview_top_text}>
            Следующим этапом командной работы стало глубинное интервью. В ходе
            данного исследования я принимала активное участие в работе команды,
            предлагая свои варианты вопросов для гайда интервью, с ним можно
            ознакомиться далее. Затем самостоятельно провела интервью у двух
            респондентов и проанализировала их, сделала ключевые выводы, которые
            позже помогли команде выявить основные пожелания потенциальных
            пользователей.
          </div>
        </div>
        <div className={styles.interview_card}>
          <div className={styles.interview_card_content}>
            <div className={styles.interview_card_content_start}>
              Начало интервью
            </div>
            <div className={styles.interview_card_content_dialog}>
              <div className={styles.interview_card_content_hello}>
                — Привет, <p>[имя респондента]</p>! Меня зовут <p>[ваше имя]</p>
                . Можем перейти на «ты»?
              </div>
              <div>Давай сразу расскажу, как все будет происходить: </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SkillSwap;
