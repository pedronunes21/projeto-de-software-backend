import { AppDataSource } from "../../data-source";
import { Training } from "../../entities/Training";
import { GetTrainingByIdRequest } from "../../types/Training";

export class GetTrainingByIdService {

    async execute(props: GetTrainingByIdRequest) {
        const { id } = props;

        const trainingRepo = AppDataSource.getRepository(Training)

        try {
            const training = await trainingRepo.findOne({
                where: { id }
            })

            return {
                status: 200,
                message: "Requisição concluída!",
                data: {
                    training
                }
            }

        } catch (e) {
            return { status: 500, message: "Ocorreu algum erro!" }
        }

    }

}