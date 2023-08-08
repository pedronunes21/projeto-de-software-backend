
export interface CreateTrainingRequest {
    category: string;
    description: string;
    gymId: string;
}

export interface GetTrainingByIdRequest {
    id: string;
}