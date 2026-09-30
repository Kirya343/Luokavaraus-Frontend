import type { IClassroom } from "@/lib";
import styles from "./ClassroomCard.module.scss"

const ClassRoomCard = ({ classroom }: {classroom: IClassroom}) => {
    return (
        <article className={styles.card}>
            <div className={styles.body}>
                <span>Luokka #{classroom.id}</span>
                <span>{classroom.equipment}</span>
                <span>Maksiimi ihmisia: {classroom.maxPeople}</span>
                <span>Koulu: {classroom.school.address}</span>
            </div>
        </article>
    );
}

export default ClassRoomCard;