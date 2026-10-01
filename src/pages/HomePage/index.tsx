import { Link } from "react-router-dom"
import styles from "./HomePage.module.scss"
import { useEffect, useState } from "react"
import Loader from "@/components/ui/Loader/Loader";

interface IStat {
    classrooms: number;
    schools: number;
    reservations: number;
    users: number;
    freeClassRoomsNow: number;
}

const HomePage = () => {

    const [stat, setStat] = useState<IStat | null>(null)

    useEffect(() => {
        async function loadStat() {

            await new Promise(resolve => setTimeout(resolve, 1500))

            setStat({ classrooms: 200, schools: 10, reservations: 500, users: 2000, freeClassRoomsNow: 34})
        }

        loadStat() 
    }, [])

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>LUOKAVARAUS</span>

                    <h1>
                        Löydä ja varaa sopiva tila helposti
                    </h1>

                    <p>
                        Luokavaraus auttaa löytämään vapaat luokat ja
                        oppimistilat nopeasti. Tarkista saatavuus,
                        valitse sopiva tila ja tee varaus muutamassa
                        minuutissa.
                    </p>

                    <Link to="/reserve" className={styles.primaryButton}>
                        Löydä vapaa luokka
                    </Link>
                </div>

                <div className={styles.heroCard}>
                    <span>Vapaita tiloja juuri nyt</span>
                    <strong><Loader loadingActive={!stat} size={30} styles={{width: "50%", height: "4rem"}}>{stat?.freeClassRoomsNow}</Loader></strong>
                    <small>luokkaa saatavilla</small>
                </div>
            </section>

            <section className={styles.statistics}>
                <Loader loadingActive={!stat}>
                    <div className={styles.stat}>
                        <strong>{stat?.classrooms}+</strong>
                        <span>Luokkaa</span>
                    </div>
                </Loader>
                <Loader loadingActive={!stat}>
                    <div className={styles.stat}>
                        <strong>{stat?.schools}</strong>
                        <span>Koulua</span>
                    </div>
                </Loader>
                <Loader loadingActive={!stat}>
                    <div className={styles.stat}>
                        <strong>{stat?.reservations}+</strong>
                        <span>Varausta</span>
                    </div>
                </Loader>
                <Loader loadingActive={!stat}>
                    <div className={styles.stat}>
                        <strong>{stat?.users}+</strong>
                        <span>Käyttäjää</span>
                    </div>
                </Loader>
            </section>

            <section className={styles.about}>
                <div className={styles.sectionHeading}>
                    <span>PALVELUMME</span>
                    <h2>Kaikki tarvittava tilan varaamiseen</h2>
                    <p>
                        Luokavaraus tekee sopivan tilan löytämisestä
                        helppoa. Voit etsiä tiloja henkilömäärän,
                        varusteiden ja ajankohdan perusteella.
                    </p>
                </div>

                <div className={styles.features}>
                    <article className={styles.feature}>
                        <div className={styles.featureNumber}>01</div>
                        <h3>Helppo haku</h3>
                        <p>
                            Löydä sopiva luokka muutamalla hakuehdolla.
                            Sinun ei tarvitse käydä läpi jokaista tilaa
                            erikseen.
                        </p>
                    </article>

                    <article className={styles.feature}>
                        <div className={styles.featureNumber}>02</div>
                        <h3>Ajantasainen saatavuus</h3>
                        <p>
                            Näet tilojen vapaat ajat ja voit valita
                            juuri sinulle sopivan ajankohdan.
                        </p>
                    </article>

                    <article className={styles.feature}>
                        <div className={styles.featureNumber}>03</div>
                        <h3>Sopivat varusteet</h3>
                        <p>
                            Hae tiloja niiden varusteiden perusteella,
                            kuten projektorin, tietokoneen tai
                            valkotaulun mukaan.
                        </p>
                    </article>

                    <article className={styles.feature}>
                        <div className={styles.featureNumber}>04</div>
                        <h3>Nopea varaaminen</h3>
                        <p>
                            Kun sopiva tila löytyy, voit tehdä
                            varauksen nopeasti ilman turhaa paperityötä.
                        </p>
                    </article>
                </div>
            </section>

            <section className={styles.howItWorks}>
                <div className={styles.sectionHeading}>
                    <span>NÄIN SE TOIMII</span>
                    <h2>Varaa tila kolmessa vaiheessa</h2>
                </div>

                <div className={styles.steps}>
                    <div className={styles.step}>
                        <strong>1</strong>
                        <div>
                            <h3>Valitse hakuehdot</h3>
                            <p>
                                Kerro, kuinka monta henkilöä tilassa
                                tarvitaan ja mitä varusteita tarvitset.
                            </p>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <strong>2</strong>
                        <div>
                            <h3>Löydä sopiva tila</h3>
                            <p>
                                Tarkista vapaat luokat ja niiden
                                saatavuus haluamallesi ajalle.
                            </p>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <strong>3</strong>
                        <div>
                            <h3>Tee varaus</h3>
                            <p>
                                Valitse sopiva tila ja vahvista varaus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.trust}>
                <div>
                    <span>LUOTETTU PALVELU</span>
                    <h2>
                        Yhä useammat koulut käyttävät Luokavarausta
                    </h2>
                    <p>
                        Palvelumme auttaa kouluja ja käyttäjiä
                        hallitsemaan tilojen käyttöä tehokkaammin.
                        Kaikki tarvittava tieto löytyy yhdestä paikasta.
                    </p>
                </div>

                <div className={styles.trustStats}>
                    <div>
                        <strong>99 %</strong>
                        <span>onnistuneista varauksista</span>
                    </div>

                    <div>
                        <strong>24/7</strong>
                        <span>tilojen saatavuus verkossa</span>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <h2>Löydä sopiva tila seuraavaa tapahtumaasi varten</h2>
                <p>
                    Aloita haku ja löydä vapaa luokka helposti.
                </p>

                <Link to="/reserve" className={styles.primaryButton}>
                    Etsi vapaita luokkia
                </Link>
            </section>
        </main>
    )
}

export default HomePage