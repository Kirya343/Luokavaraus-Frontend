import axios from "axios";
import { API_URL } from "../common/config";
import type { ClassroomListRequest, IClassroom } from "./classroomTypes";

export const classroomService = {

    list: (request: ClassroomListRequest): Promise<IClassroom[]> => axios.get(`${API_URL}/classroom/list`, { params: request, withCredentials: true }),
}