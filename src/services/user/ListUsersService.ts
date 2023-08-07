import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";

export default class ListUsersService {
    async execute() {
        const userRepo = AppDataSource.getRepository(User)

        try {
            const users = await userRepo.find({})

            return {
                status: 200,
                message: "Requisição concluída!",
                data: {
                    users
                }
            }

        } catch (e) {
            return { status: 500, message: "Ocorreu algum erro!" }
        }

    }
}