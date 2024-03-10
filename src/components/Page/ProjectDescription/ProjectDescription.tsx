import styles from "./ProjectDescription.module.css";

interface IProjectDescription {
  description: React.ReactNode;
  enemy: React.ReactNode;

  isLink: boolean;
}

const ProjectDescription = (props: IProjectDescription) => {
  return (
    <div className={styles.project_description}>
      <div className={styles.project_description_page}>{props.description}</div>
      {props.isLink && (
        <div className={styles.project_description_link}>
          "Ознакомиться с макетом в фигме можно по ссылке"
        </div>
      )}
      <div className={styles.project_description_enemy}>{props.enemy}</div>
    </div>
  );
};

export default ProjectDescription;
