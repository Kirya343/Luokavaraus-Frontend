import type { ClassroomListRequest, IClassroom } from "./classroomTypes";
import { createApi } from "../common/apiClient";

const classroomApi = createApi("/classroom")

export const list = (request: ClassroomListRequest) => classroomApi.get<IClassroom[]>(`/list`, { params: request })