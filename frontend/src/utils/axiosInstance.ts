import { useAuthStore } from "@/stores/AuthStore";
import axios from "axios";

export const apiUrl = process.env.BACKEND_API;

const axiosInstance = axios.create({
    // baseURL: `http://127.0.0.1:8000/api/`,
    // baseURL: `http://192.168.1.199:8000/api`,
    
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_HOST,
    headers: {
        "Content-Type": "application/json",
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const { token } = useAuthStore.getState();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    response => response,

    error => {
        if (error.response && error.response.status === 401) {
            // Logout the user if token is expired
            useAuthStore.getState().logout();
            // Redirect to login page
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;

