import type { IReservation, ReservationRequest } from "@/lib";
import { createApi } from "../common/apiClient";

const reservationApi = createApi("/reservation")

export const reserve = (request: ReservationRequest) => reservationApi.post(``, request)
export const getMyReservations = () => reservationApi.get<IReservation[]>("/my")
export const update = (id: number, request: ReservationRequest) => reservationApi.put(`/${id}`, request)
export const deleteReservation = (id: number) => reservationApi.delete(`/${id}`)
export const loadReservation = (id: number) => reservationApi.get<IReservation>(`/${id}`)