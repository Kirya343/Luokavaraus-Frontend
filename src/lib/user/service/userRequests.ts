import axios from "axios";
import type { AuthRequest, AuthResponse, IUser, RegisterRequest } from "../userTypes";
import { createApi } from "@/lib/common/apiClient";

const userApi = createApi("/user")

export const login = async (request: AuthRequest) =>
    await userApi.post<AuthResponse>(`/login`, request);

export const register = (request: RegisterRequest) =>
    userApi.post<AuthResponse>(`/register`, request);

export const getCurrent = () =>
    axios.get<IUser>(``);