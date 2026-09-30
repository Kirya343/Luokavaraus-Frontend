import type { Equipment } from "./classroomEnums";

export interface ClassroomListRequest {
    equipment: Equipment | null;
    people: number;
    startDate: string;
    finishDate: string;
}

export interface IClassroom {
    id: number;
    imagePath: string;
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