import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss"
import { useUser } from "@/lib";

const Header = () => {

    const { user } = useUser();
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link className={styles.logo} to={"/"}><img src="/logo.png"/></Link>
                    
                <nav className={styles.nav}>
                    <NavLink className={styles.link} to={"/reserve"}>Varaa luokaa</NavLink>
                    {user ? user.name : (<Link className={styles.login} to={"/login"}>Kirjaudu</Link>)}
                </nav>
            </div>
        </header>
    );
}

export default Header;