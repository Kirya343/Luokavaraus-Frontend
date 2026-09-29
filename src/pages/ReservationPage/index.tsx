import { Equipment } from "@/lib"
import styles from "./ReservationPage.module.scss"

const ReservationPage = () => {

    

    return (
        <div className={styles.layout}>

            <div className={styles.title}>
                <h1>LUOKAN JA OPPIMISTILAN VARAUS</h1>
                <h3>Löydä täydellinen luokka tapahtumaasi varten.</h3>
            </div>

            <div className={styles.reservation}>

                <h2>LUOKKIEN HAKU JA VARAUS</h2>
                
                <div className={styles.searchParams}>
                    <div className={styles.param}>
                        <span>1. VARUSTEET</span>
                        <select>
                            <option value="">Valitse</option>

                            {(Object.keys(Equipment) as Array<keyof typeof Equipment>).map(eq => (
                                <option key={eq} value={eq}>
                                    {Equipment[eq]}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.param}>
                        <span>2. HENKILÖMÄÄRÄ</span>
                        <input type="number"/>
                    </div>

                    <div className={styles.param}>
                        <span>3. ALKU</span>

                        <input type="datetime-local"/>
                    </div>

                    <div className={styles.param}>
                        <span>4. LOPPU</span>

                        <input type="datetime-local"/>
                    </div>
                </div>

                <button className={styles.findClassroms}>LÖYDÄ VAPAAT LUOKAT</button>
            </div>
        </div>
    )
}

export default ReservationPage