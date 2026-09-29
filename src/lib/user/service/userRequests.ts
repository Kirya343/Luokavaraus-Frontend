import axios from "axios";
import { API_URL } from "../../common/config";
import type { AuthRequest, IUser } from "../userTypes";

export const login = (request: AuthRequest) =>
    axios.post(`${API_URL}/user/login`, request, {
        withCredentials: true
    });

export const register = (request: AuthRequest) =>
    axios.post(`${API_URL}/user/register`, request, {
        withCredentials: true
    });

export const getCurrent = (): Promise<IUser | null> =>
    axios.get(`${API_URL}/user`, {
        withCredentials: true
    });