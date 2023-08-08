
import { AppDataSource } from "../../data-source";
import { Lesson } from "../../entities/Lesson";
import { CreateLessonRequest } from "../../types/Lesson";
import { GetGymByIdService } from "../gym/GetGymByIdService";
import { GetTrainingByIdService } from "../training/GetTrainingById";

export class CreateLessonService {

    async execute(props: CreateLessonRequest) {
        const lessonRepo = AppDataSource.getRepository(Lesson);

        let { gymId, maxUsers, time, title, trainingId, weekDay } = props;

        if (!gymId || !maxUsers || !time || !title || !trainingId || !weekDay) {
            return { status: 400, message: "Você deve informar todos os campos!" }
        }

        const gym = await new GetGymByIdService().execute({
            id: gymId,
        })

        if (gym.data?.gym === null) {
            return { status: 404, message: "Academia não encontrada!" }
        }

        const training = await new GetTrainingByIdService().execute({
            id: trainingId,
        })

        if (training.data?.training === null) {
            return { status: 404, message: "Treino não encontrado!" }
        }

        if (maxUsers <= 0) {
            return { status: 400, message: "O máximo de usuário deve ser maior que 0." }
        }

        if (weekDay < 0 || weekDay > 6) {
            return { status: 400, message: "Informe um dia da semana válido!" }
        }

        let hour = parseInt(time.split(":")[0])
        let minutes = parseInt(time.split(":")[1])

        if (!time.includes(":")) {
            return { status: 400, message: "A hora deve ser um número válido!" }
        }
        if (isNaN(hour) || isNaN(minutes)) {
            return { status: 400, message: "Horas ou minutos inválidos!" }
        }
        if (hour < 0 || hour > 23) {
            return { status: 400, message: "A hora deve estar entre 0 e 23" }
        }
        if (minutes < 0 || minutes > 59) {
            return { status: 400, message: "Os minutos devem estar entre 0 e 59" }
        }

        if (hour < 10)
            time = `0${hour}:`
        else
            time = `${hour}:`

        if (minutes < 10)
            time += `0${minutes}`
        else
            time += minutes

        const lesson = lessonRepo.create({
            training: trainingId,
            gym: gymId,
            maxUsers,
            time,
            title,
            weekDay
        })

        try {
            lessonRepo.save(lesson)

            return {
                status: 201,
                message: "Aula criada com sucesso!",
                data: { ...lesson }
            }

        } catch (err) {
            return {
                status: 500,
                message: "Ocorreu algum erro ao criar a aula!"
            }
        }
    }
}