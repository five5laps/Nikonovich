import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_text}>
          <div className={styles.me}>Связаться со мной</div>
          <div className={styles.contacts}>
            <div className={styles.mes}>Telegram @Mereko</div>
            <div className={styles.mes}>Nickonovi4@gmail.com</div>
          </div>
          <div className={styles.msk}>Москва, 2024</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
