import Line from "../../Line/Line";
import styles from "./PageProject.module.css";

interface IPageProject {
  title: string;

  line1: {
    paddingRight: string;
    who: string;
    text: string;
  };
  line2: {
    paddingRight: string;
    who: string;
    text: string;
  };
  line3: {
    paddingRight: string;
    who: string;
    text: string;
  };
  line4: {
    paddingRight: string;
    who: string;
    text: string;
  };
}

const PageProject = (props: IPageProject) => {
  return (
    <div className={styles.pageProject}>
      <div className={styles.pageProject_title}>{props.title}</div>
      <div className={styles.pageProject_description}>
        <Line
          paddingRight={props.line1.paddingRight}
          who={props.line1.who}
          text={props.line1.text}
        />
        <Line
          paddingRight={props.line2.paddingRight}
          who={props.line2.who}
          text={props.line2.text}
        />
        <Line
          paddingRight={props.line3.paddingRight}
          who={props.line3.who}
          text={props.line3.text}
        />
        <Line
          paddingRight={props.line4.paddingRight}
          who={props.line4.who}
          text={props.line4.text}
        />
      </div>
    </div>
  );
};

export default PageProject;
