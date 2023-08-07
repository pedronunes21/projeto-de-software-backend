
export interface CreateUserRequest {
    email: string;
    password: string;
    name: string;
    photoURL?: string;
    permission?: number;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface UserToken {
    token: string;
}

export interface GetUserByIdRequest {
    id: string;
}