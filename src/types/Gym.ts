
export interface CreateGymRequest {
    name: string;
    address: string;
    logoURL: string;
    description: string;
}

export interface GetGymByIdRequest {
    id: string;
}