import axios from "axios";
import { API_URL } from "../config";

export const userService = {

    login: (request: { email: string, password: string}) => axios.post(`${API_URL}/user/login`, request, { withCredentials: true }),
    register: (request: { email: string, password: string}) => axios.post(`${API_URL}/user/register`, request, { withCredentials: true }),

    current: () => axios.post(`${API_URL}/user`, { withCredentials: true }),
}