import { AppDataSource } from "../../data-source";
import { Gym } from "../../entities/Gym";
import { GetGymByIdRequest } from "../../types/Gym";

export class GetGymByIdService {

    async execute(props: GetGymByIdRequest) {
        const { id } = props;

        const gymRepo = AppDataSource.getRepository(Gym)

        try {
            const gym = await gymRepo.findOne({
                where: { id }
            })

            return {
                status: 200,
                message: "Requisição concluída!",
                data: {
                    gym
                }
            }

        } catch (e) {
            return { status: 500, message: "Ocorreu algum erro!" }
        }

    }

}