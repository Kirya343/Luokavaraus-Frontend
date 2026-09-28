import axios from "axios";
import type { ReservationRequest } from "./classroom/classroomTypes";
import { API_URL } from "../config";

export const reservationService = {
    
    reserve: (request: ReservationRequest) => axios.post(`${API_URL}/reservation`, request, { withCredentials: true }),
}