import type { IClassroom } from "@/lib";
import styles from "./ClassroomCard.module.scss"
import UserIcon from "@/components/icons/UserIcon";
import LocationIcon from "@/components/icons/LocationIcon";

interface ClassRoomCardProps { 
    classroom: IClassroom, 
    onClick?: () => void, 
    handleReserve: () => void 
}

const ClassRoomCard = ({ classroom, onClick, handleReserve }: ClassRoomCardProps) => {
    return (
        <article className={styles.card} onClick={onClick}>
            <img className={styles.image} src={classroom.imagePath} />
            <div className={styles.body}>

                <span className={styles.title}>Luokka #{classroom.id}</span>

                {classroom.equipment.length > 0 && <span>{classroom.equipment}</span>}

                <div className={styles.feature}>
                    <UserIcon size={18}/>
                    <span>Maksiimi ihmisia: {classroom.maxPeople}</span>
                </div>
                <div className={styles.feature}>
                    <LocationIcon size={18}/>
                    <span>Koulu: {classroom.school.address}</span>
                </div>

                <div className={styles.actions} onClick={handleReserve}>
                    <button className={styles.reserveBtn}>Varaa nyt</button>
                </div>
            </div>
        </article>
    );
}

export default ClassRoomCard;