import {PropsWithChildren} from "react";
import styles from "../../styles/Home.module.css";

export const DefaultLayout = ({children}: PropsWithChildren<{}>) => {
    return <div className={styles.container}>
        <main className={styles.main}>
            <div className={styles.connect}>
                {children}
            </div>
        </main>
    </div>
}
