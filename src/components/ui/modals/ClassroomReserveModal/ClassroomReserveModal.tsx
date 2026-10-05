import { Equipment, reservationService, useUser, type IClassroom, type ReservationRequest } from "@/lib"
import Modal from "../Modal/Modal"
import styles from "./ClassroomReserveModal.module.scss"
import { useState } from "react"
import LoginRequiredModal from "../LoginRequiredModal/LoginRequiredModal"

interface ReserveSettings {
    equip: Equipment | null,
    people: number,
    startDate: string,
    finishDate: string,
}

interface ClassroomReserveModalProps {
    onClose: () => void,
    classroom: IClassroom | null
    initialSettings: ReserveSettings
}

const ClassroomReserveModal = ({
    onClose,
    classroom,
    initialSettings
}: ClassroomReserveModalProps) => {

    const { isAuthenticated } = useUser();

    const [settings, setSettings] = useState<ReserveSettings>(initialSettings)

    const handleReserve = async () => {

        if (!classroom) return;

        const success = confirm(`Varata luokka ${classroom.id}`)

        if (!success) return;

        const request: ReservationRequest = {
            classroomId: classroom.id,
            peopleCount: settings.people,
            equip: settings.equip,
            startAt: settings.startDate,
            finishAt: settings.finishDate
        }

        try {
            const res = await reservationService.reserve(request)

            if (res.status === 200) {

            }

        } catch (e) {
            console.error(e)
        } finally {
            onClose()
        }
    }

    return isAuthenticated ? (
        <Modal isOpen={!!classroom} onClose={onClose} title={"Reserve classroom"}>
            <div className={styles.body}>
                <div className={styles.reserveParams}>
                    <div className={styles.param}>
                        <span>1. VARUSTEET</span>
                        <select>
                            <option value="" onSelect={() => setSettings(p => ({...p, equip: null}))} selected={settings.equip === null}>Valitse</option>

                            {(Object.keys(Equipment) as Array<keyof typeof Equipment>).map(eq => (
                                <option key={eq} value={eq} onSelect={() => setSettings(p => ({...p, equip: Equipment[eq]}))} selected={settings.equip === Equipment[eq]}>
                                    {Equipment[eq]}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.param}>
                        <span>2. HENKILÖMÄÄRÄ</span>
                        <input 
                            type="number"
                            value={settings.people}
                            onChange={(e) => setSettings(p => ({...p, people: Number(e.target.value || 0)}))}
                        />
                    </div>

                    <div className={styles.param}>
                        <span>3. ALKU</span>

                        <input 
                            type="datetime-local"
                            value={settings.startDate}
                            onChange={(e) => setSettings(p => ({...p, startDate: e.target.value}))}
                        />
                    </div>

                    <div className={styles.param}>
                        <span>4. LOPPU</span>

                        <input 
                            type="datetime-local"
                            value={settings.finishDate}
                            onChange={(e) => setSettings(p => ({...p, finishDate: e.target.value}))}
                        />
                    </div>
                </div>
            </div>

            <button onClick={handleReserve}>
                Varaa luokka
            </button>
        </Modal>
    ) : <LoginRequiredModal isOpen={!!classroom} onClose={onClose} />
}

export default ClassroomReserveModal;