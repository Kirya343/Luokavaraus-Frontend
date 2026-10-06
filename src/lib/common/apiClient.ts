// apiClient.js
import { API_URL } from "@/lib";
import axios from "axios";

const api = axios.create({
    baseURL: API_URL || "https://music.workswap.org",
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
});

const setupAuthInterceptor = (instance: typeof api) => {
    instance.interceptors.response.use(
        response => response,
        async error => {
            const originalRequest = error.config;

            if (
                error.response?.status !== 401 ||
                originalRequest._retry
            ) {
                throw error;
            }

            originalRequest._retry = true;

            return instance(originalRequest);
        }
    );

    return instance;
};

setupAuthInterceptor(api);

export const createApi = (prefix: string) =>
    setupAuthInterceptor(
        axios.create({
            ...api.defaults,
            baseURL: `${api.defaults.baseURL}${prefix}`,
        })
    );

export default api;