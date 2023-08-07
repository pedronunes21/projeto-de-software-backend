import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { GetUserByIdRequest } from "../../types/User";

export default class GetUserByIdService {
    async execute(props: GetUserByIdRequest) {
        const { id } = props;

        const userRepo = AppDataSource.getRepository(User)

        try {
            const user = await userRepo.findOne({
                where: {
                    id
                }
            })

            return {
                status: 200,
                message: "Requisição concluída!",
                data: {
                    user
                }
            }

        } catch (e) {
            return { status: 500, message: "Ocorreu algum erro!" }
        }

    }
}