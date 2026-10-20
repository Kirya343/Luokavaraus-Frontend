import { reservationService, type IReservation } from "@/lib"
import { useEffect, useState } from "react"
import styles from "./AccountPage.module.scss"
import ReserveUpdateModal from "@/components/ui/modals/ReserveUpdateModal/ReserveUpdateModal"
import UserIcon from "@/components/icons/UserIcon"

const AccountPage = () => {

    const [reservations, setReservations] = useState<IReservation[]>([])
    const [updateReservationId, setUpdateReservationId] = useState<number | null>(null)

    useEffect(() => {
        async function loadReservations() {
            const res = await reservationService.getMyReservations();

            setReservations(res.data)
        }

        loadReservations()
    }, [])

    const deleteReservation = async (id: number) => {
        const res = await reservationService.deleteReservation(id)

        if (res.status == 200) {
            setReservations(prev => prev.filter(r => r.id != id))
        }
    }

    return (
        <div className={styles.page}>
            <h1>Omat varaukset</h1>

            <div className={styles.reservations}>
                {reservations.map(r => (
                    <div className={styles.reservationCard} key={r.id}>
                        <div className={styles.body}>
                            <h1>Reservation {r.id}</h1>
                            <span>{new Date(r.startAt).toLocaleString("fi")} - {new Date(r.finishAt).toLocaleString("fi")}</span>
                            <div className={styles.feature}>
                                <UserIcon size={18}/>
                                <span>Ihmisia: {r.peopleCount}</span>
                            </div>

                            <div className={styles.actions}>
                                <button className={styles.action} onClick={() => deleteReservation(r.id)}>Poista</button>
                                <button className={styles.action} onClick={() => setUpdateReservationId(r.id)}>Muokaa</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ReserveUpdateModal reservationId={updateReservationId} onClose={() => setUpdateReservationId(null)} />
        </div>
    )
}

export default AccountPage