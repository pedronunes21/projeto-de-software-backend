
import { AppDataSource } from "../../data-source";
import { Gym } from "../../entities/Gym";
import { Training } from "../../entities/Training";
import { CreateTrainingRequest } from "../../types/Training";
import { GetGymByIdService } from "../gym/GetGymByIdService";

export class CreateTrainingService {

    async execute(props: CreateTrainingRequest) {
        const trainingRepo = AppDataSource.getRepository(Training);

        const { category, description, gymId } = props;

        if (!category || !description || !gymId) {
            return { status: 400, message: "Você deve informar todos os campos!" }
        }

        const gym = await new GetGymByIdService().execute({
            id: gymId
        })

        if (gym.data?.gym === null) {
            return { status: 404, message: "Academia não encontrada!" }
        }

        const training = trainingRepo.create({
            category,
            description,
            gym: gymId
        })

        try {
            trainingRepo.save(training)

            return {
                status: 201,
                message: "Treino criado com sucesso!",
                data: {
                    id: training.id,
                    category: training.category,
                    description: training.description,
                    gymId: training.gym
                }
            }

        } catch (err) {
            return {
                status: 500,
                message: "Ocorreu algum erro ao criar a academia!"
            }
        }
    }

}