export interface ClassroomListRequest {
    page: number;
    amount: number;
    type: string;
    peopleCount: number;
    startAt: string;
    finishAt: string;
}

export interface ReservationRequest {
    classroomId: number;
    peopleCount: number;
    startAt: string;
    finishAt: string;
}