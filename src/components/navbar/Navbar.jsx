
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Jobfinder</h1>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.login}`}>Login</button>
          <button className={`${styles.button} ${styles.register}`}>Register</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;