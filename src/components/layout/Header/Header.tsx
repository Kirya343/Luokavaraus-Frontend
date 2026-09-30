import { Link } from "react-router-dom";
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <img className={styles.logo} src="/logo.png"/>
                <Link className={styles.login} to={"/login"}>Kirjaudu</Link>
            </div>
        </header>
    );
}

export default Header;