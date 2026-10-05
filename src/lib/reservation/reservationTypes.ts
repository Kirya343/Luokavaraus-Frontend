import type { Equipment } from "../classroom";

export interface ReservationRequest {
    classroomId: number;
    peopleCount: number;
    equip: Equipment | null;
    startAt: string;
    finishAt: string;
}