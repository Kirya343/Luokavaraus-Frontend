import type { IClassroom } from "../classroom";

export interface ReservationRequest {
    classroomId: number;
    peopleCount: number;
    startAt: string;
    finishAt: string;
}

export interface IReservation {
    id: number;
    classroom: IClassroom
    peopleCount: number;
    startAt: string;
    finishAt: string;
}