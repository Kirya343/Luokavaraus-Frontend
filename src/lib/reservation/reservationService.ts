import axios from "axios";
import type { ReservationRequest } from "@/lib";
import { API_URL } from "@/lib";

export const reservationService = {
    
    reserve: (request: ReservationRequest) => axios.post(`${API_URL}/reservation`, request, { withCredentials: true }),
}