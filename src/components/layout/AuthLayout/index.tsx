import clsx from "clsx";
import styles from "./AuthLayout.module.scss"
import type { ReactNode } from "react";

interface AuthlayoutProps {
    message: { message: string, success: boolean} | null;
    inputs: ReactNode;
    links: ReactNode;
}

const AuthLayout = ({ message, inputs, links }: AuthlayoutProps) => {
    return (
       <div className={styles.body}>
            <div className={styles.formWrap} role="main">

                <div className={clsx("message", message?.success ? "success" : "error")}>
                    {message?.message}
                </div>

                <div className="inputs">
                    {inputs}
                </div>

            </div>

            <div className={styles.links}>
                {links}
            </div>
       </div> 
    )
}

export default AuthLayout;