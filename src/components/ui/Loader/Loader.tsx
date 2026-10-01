import type { ReactNode } from "react";
import css from "./Loader.module.scss";
import LoadingSpinnerIcon from "@/components/icons/LoadingSpinnerIcon";

const Loader = ({
    loadingActive,
    children,
    size,
    styles
}: {
    loadingActive: boolean;
    children: ReactNode;
    size?: number;
    styles?: React.CSSProperties
}) => {

    return loadingActive ? (
        <div className={css.wrapper} style={styles}>
            <div className={css.loader} style={{ height: size }}>
                <LoadingSpinnerIcon width={size}/>
            </div>
        </div>
    ) : children;
};

export default Loader;