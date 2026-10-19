import type { IReservation, ReservationRequest } from "@/lib";
import { createApi } from "../common/apiClient";

const reservationApi = createApi("/reservation")

export const reserve = (request: ReservationRequest) => reservationApi.post(``, request)
export const getMyReservations = () => reservationApi.get<IReservation[]>("/my")