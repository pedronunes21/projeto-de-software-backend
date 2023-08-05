
interface CreateUserRequest {
    email: string;
    password: string;
    name: string;
    photoURL?: string;
    permission?: number;
}

interface LoginRequest {
    email: string;
    password: string;
}

interface UserToken {
    token: string;
}