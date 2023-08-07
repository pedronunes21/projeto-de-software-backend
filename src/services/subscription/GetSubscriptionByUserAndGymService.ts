import { AppDataSource } from "../../data-source";
import { Subscription } from "../../entities/Subscription";
import { GetSubscriptionByUserAndGymRequest } from "../../types/Subscription";

export class GetSubscriptionByUserService {
    async execute(props: GetSubscriptionByUserAndGymRequest) {
        const { userId, gymId } = props

        const subRepo = AppDataSource.getRepository(Subscription)

        try {
            const subscriptions = await subRepo.find({
                where: {
                    user: {
                        id: userId
                    },
                    gym: {
                        id: gymId
                    }
                }
            })

            return {
                status: 200,
                message: "Requisição concluída!",
                data: {
                    subscriptions
                }
            }

        } catch (err) {
            return {
                status: 500,
                message: "Ocorreu algum erro ao filtrar as inscrições por usuário.",
                err
            }
        }


    }
}