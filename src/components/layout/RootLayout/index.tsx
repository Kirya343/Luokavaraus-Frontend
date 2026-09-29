import { Outlet } from "react-router-dom"
import styles from "./RootLayout.module.scss"

const RootLayout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>

                </div>
            </header>
            
            <main className={styles.main}>
                <Outlet/>
            </main>
        </div>
    )
}

export default RootLayout;