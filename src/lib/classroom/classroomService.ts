import axios from "axios";
import { API_URL } from "../common/config";
import type { ClassroomListRequest } from "./classroomTypes";

export const classroomService = {

    list: (request: ClassroomListRequest) => axios.get(`${API_URL}/classroom/list`, { params: request, withCredentials: true }),
}