import { Outlet } from "react-router-dom"
import styles from "./RootLayout.module.scss"
import Header from "../Header/Header";

const RootLayout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            
            <main className={styles.main}>
                <Outlet/>
            </main>
        </div>
    )
}

export default RootLayout;