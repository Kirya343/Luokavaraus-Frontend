import axios from "axios";
import { API_URL } from "../../common/config";
import type { AuthRequest, AuthResponse, IUser, RegisterRequest } from "../userTypes";

export const login = async (request: AuthRequest): Promise<AuthResponse> =>
    await axios.post(`${API_URL}/user/login`, request, {
        withCredentials: true
    });

export const register = (request: RegisterRequest): Promise<AuthResponse> =>
    axios.post(`${API_URL}/user/register`, request, {
        withCredentials: true
    });

export const getCurrent = (): Promise<IUser> =>
    axios.get(`${API_URL}/user`, {
        withCredentials: true
    });