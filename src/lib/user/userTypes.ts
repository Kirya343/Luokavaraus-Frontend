export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface AuthRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    success: boolean,
    message: string
}