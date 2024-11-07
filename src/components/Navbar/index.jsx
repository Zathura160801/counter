import shoppingIcon from "../../assets/shopping-icon.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <img className={styles.navIcon} src={shoppingIcon} alt="shopping icon" />
      <h1 className={styles.navTitle}>Shopping List</h1>
    </nav>
  );
}
