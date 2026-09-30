import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <section>
                     <Link className={styles.logo} to={"/"}><img src="/logo.png"/></Link>
                </section>

                <section>
                    <nav className={styles.nav}>
                        <NavLink className={styles.link} to={"/reserve"}>Varaa luokaa</NavLink>
                    </nav>
                </section>

                <section>
                    <Link className={styles.login} to={"/login"}>Kirjaudu</Link>
                </section>
            </div>
        </header>
    );
}

export default Header;