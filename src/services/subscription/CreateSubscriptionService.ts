import { AppDataSource } from "../../data-source";
import { Subscription } from "../../entities/Subscription";
import { CreateSubscriptionRequest } from "../../types/Subscription";
import { GetGymByIdService } from "../gym/GetGymByIdService";
import GetUserByIdService from "../user/GetUserByIdService";
import { GetSubscriptionByUserService } from "./GetSubscriptionByUserAndGymService";

export default class CreateSubscriptionService {

    async execute(props: CreateSubscriptionRequest) {

        const { gymId, userId } = props;

        const subRepo = AppDataSource.getRepository(Subscription)

        if (!gymId || !userId) {
            return { status: 400, message: "Você deve informar todos os campos!" }
        }

        try {

            const user = await new GetUserByIdService().execute({
                id: userId
            })

            if (user.data?.user === null) {
                return { status: 404, message: "Usuário inválido!" }
            }

            const gym = await new GetGymByIdService().execute({
                id: gymId
            })

            if (gym.data?.gym === null) {
                return { status: 404, message: "Academia inválida!" }
            }

            const userSubscriptions = await new GetSubscriptionByUserService().execute({
                userId,
                gymId
            })

            if (userSubscriptions.data?.subscriptions.length === 0) {
                // Usuário ainda não ta matriculado nessa academia

                const subscription = subRepo.create({
                    gym: gymId,
                    user: userId
                })

                await subRepo.save(subscription)

                return {
                    status: 201,
                    message: "Matrícula realizada com sucesso!",
                    data: {
                        id: subscription.id,
                        gymId,
                        userId
                    }
                }

            } else {
                // Usuário ja matriculado
                return {
                    status: 400,
                    message: "Usuário já está matriculado nessa academia!"
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