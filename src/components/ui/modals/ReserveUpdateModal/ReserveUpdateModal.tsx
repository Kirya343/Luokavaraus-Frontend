import { reservationService, useUser, type IReservation, type ReservationRequest } from "@/lib"
import Modal from "../Modal/Modal"
import styles from "./ReserveUpdateModal.module.scss"
import { useEffect, useState } from "react"
import LoginRequiredModal from "../LoginRequiredModal/LoginRequiredModal"

interface ReserveUpdateModalProps {
    reservationId: number | null
    onClose: () => void
}

const ReserveUpdateModal = ({
    reservationId,
    onClose,
}: ReserveUpdateModalProps) => {

    const { isAuthenticated } = useUser();

    const [reservation, setReservation] = useState<IReservation | null>(null)

    useEffect(() => {
        async function loadReservation(id: number) {
            const res = await reservationService.loadReservation(id)
            
            setReservation(res.data)
        }

        if (reservationId) loadReservation(reservationId)
    }, [reservationId])

    const updateReservation = async () => {

        const classroom = reservation?.classroom
        if (!classroom || !reservationId) return;

        const success = confirm(`Muokka varaus ${reservationId}`)

        if (!success) return;

        const request: ReservationRequest = {
            classroomId: reservation?.classroom.id,
            peopleCount: reservation.peopleCount,
            startAt: reservation.startAt,
            finishAt: reservation.finishAt
        }

        try {
            const res = await reservationService.update(reservationId, request)

            if (res.status === 200) {

            }

        } catch (e) {
            console.error(e)
        } finally {
            onClose()
        }
    }

    return isAuthenticated ? (
        <Modal isOpen={!!reservationId} onClose={onClose} title={"Reserve classroom"}>
            <div className={styles.body}>
                {reservation && (
                    <div className={styles.reserveParams}>

                        <div className={styles.param}>
                            <span>1. HENKILÖMÄÄRÄ</span>
                            <input 
                                type="number"
                                value={reservation.peopleCount}
                                onChange={(e) => setReservation(p => p ? ({...p, peopleCount: Number(e.target.value || 0)}) : p)}
                            />
                        </div>

                        <div className={styles.param}>
                            <span>2. ALKU</span>

                            <input 
                                type="datetime-local"
                                value={reservation.startAt.slice(0, 16)}
                                onChange={(e) => setReservation(p => p ? ({
                                    ...p, 
                                    startAt: e.target.value,
                                    finishAt: e.target.value
                                }) : p)}
                            />
                        </div>

                        <div className={styles.param}>
                            <span>3. LOPPU</span>

                            <input 
                                type="datetime-local"
                                value={reservation.finishAt.slice(0, 16)}
                                onChange={(e) => setReservation(p => p ? ({...p, finishAt: e.target.value}) : p)}
                            />
                        </div>
                    </div>
                )}
            </div>

            <button onClick={updateReservation}>
                Varaa luokka
            </button>
        </Modal>
    ) : <LoginRequiredModal isOpen={!!reservationId} onClose={onClose} />
}

export default ReserveUpdateModal;