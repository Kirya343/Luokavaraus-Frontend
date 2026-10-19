import { reservationService, type IReservation } from "@/lib"
import { useEffect, useState } from "react"
import styles from "./AccountPage.module.scss"
import ClassRoomCard from "@/components/ui/ClassroomCard/ClassroomCard"

const AccountPage = () => {

    const [reservations, setReservations] = useState<IReservation[]>([])

    useEffect(() => {
        async function loadReservations() {
            const res = await reservationService.getMyReservations();

            setReservations(res.data)
        }

        loadReservations()
    }, [])

    return (
        <>
            <h1>Omat varaukset</h1>

            <div  className={styles.reservations}>
                {reservations.map(r => (
                    <div className={styles.reservationCard} key={r.id}>
                        <h1>Reservation {r.id}</h1>
                        <span>{new Date(r.startAt).toLocaleString("fi")} - {new Date(r.finishAt).toLocaleString("fi")}</span>
                        <ClassRoomCard classroom={r.classroom}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AccountPage