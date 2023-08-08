
export interface CreateLessonRequest {
    gymId: string;
    trainingId: string;
    title: string;
    maxUsers: number;
    weekDay: number;
    time: string;
}