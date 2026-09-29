import type { Equipment } from "./classroomEnums";

export interface ClassroomListRequest {
    page: number;
    amount: number;
    equipment: Equipment;
    peopleCount: number;
    startAt: string;
    finishAt: string;
}

export interface IClassroom {
    id: number;
    maxPeople: number;
    equipment: Equipment[];
    freeTime: TimeRange[]
    school: ISchool;
}

export interface ISchool {
    id: number;
    address: string;
}

export interface TimeRange {
    start: string;
    finish: string;
}