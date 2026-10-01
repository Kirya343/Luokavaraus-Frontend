import { Equipment, type IClassroom } from "@/lib"
import styles from "./ReservationPage.module.scss"
import { useCallback, useEffect, useState } from "react"
import ClassRoomCard from "@/components/ui/ClassroomCard/ClassroomCard"
import Loader from "@/components/ui/Loader/Loader"

const ReservationPage = () => {

    const [equip, setEquip] = useState<Equipment | null>(null)
    const [people, setPeople] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>("")
    const [finishDate, setFinishDate] = useState<string>("")

    const [loading, setLoading] = useState<boolean>(true)

    const [classrooms, setClassrooms] = useState<IClassroom[] | []>([])

    const loadClassrooms = useCallback(async () => {

        setLoading(true)

        try {
            const school = {
                id: 1,
                address: "Microkatu 1"
            }

            /* const request: ClassroomListRequest = {
                equipment: equip,
                people,
                startDate,
                finishDate
            } 
            
            const data = await classroomService.list(request) */

            await new Promise(resolve => setTimeout(resolve, 1500))

            setClassrooms([
                { id: 1, imagePath: "/classrooms/classroom_3.jpg", maxPeople: 30, equipment: [], freeTime: [], school: school }, 
                { id: 2, imagePath: "/classrooms/classroom_1.jpg", maxPeople: 25, equipment: [], freeTime: [], school: school }, 
                { id: 3, imagePath: "/classrooms/classroom_4.jpg", maxPeople: 20, equipment: [], freeTime: [], school: school }, 
                { id: 4, imagePath: "/classrooms/classroom_1.jpg", maxPeople: 35, equipment: [], freeTime: [], school: school }, 
                { id: 5, imagePath: "/classrooms/classroom_3.jpg", maxPeople: 15, equipment: [], freeTime: [], school: school }, 
                { id: 6, imagePath: "/classrooms/classroom_4.jpg", maxPeople: 40, equipment: [], freeTime: [], school: school }, 
                { id: 7, imagePath: "/classrooms/classroom_2.jpg", maxPeople: 28, equipment: [], freeTime: [], school: school }, 
                { id: 8, imagePath: "/classrooms/classroom_3.jpg", maxPeople: 50, equipment: [], freeTime: [], school: school }
            ])
        } finally {
            setLoading(false)
        }
    }, [equip, people, startDate, finishDate])

    useEffect(() => {

        loadClassrooms()
    }, [])

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
                            <option value="" onSelect={() => setEquip(null)} selected={equip === null}>Valitse</option>

                            {(Object.keys(Equipment) as Array<keyof typeof Equipment>).map(eq => (
                                <option key={eq} value={eq} onSelect={() => setEquip(Equipment[eq])} selected={equip === Equipment[eq]}>
                                    {Equipment[eq]}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.param}>
                        <span>2. HENKILÖMÄÄRÄ</span>
                        <input 
                            type="number"
                            value={people}
                            onChange={(e) => setPeople(Number(e.target.value || 0))}
                        />
                    </div>

                    <div className={styles.param}>
                        <span>3. ALKU</span>

                        <input 
                            type="datetime-local"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>

                    <div className={styles.param}>
                        <span>4. LOPPU</span>

                        <input 
                            type="datetime-local"
                            value={finishDate}
                            onChange={(e) => setFinishDate(e.target.value)}
                        />
                    </div>
                </div>

                <button className={styles.findClassroms} onClick={loadClassrooms}>LÖYDÄ VAPAAT LUOKAT</button>
            </div>

            <Loader loadingActive={loading}>
                <div className={styles.classesList}>
                    {classrooms.map(cr => <ClassRoomCard classroom={cr} />)}
                </div>
            </Loader>
        </div>
    )
}

export default ReservationPage