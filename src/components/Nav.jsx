import styles from "../styles/nav.module.css";
export default function Nav() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navLogo}>asas</div>
        <div className={styles.others}>
          <div className={styles.links}>
            <div className={styles.link}></div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}></div>
          </div>
        </div>
      </div>
    </>
  );
}
