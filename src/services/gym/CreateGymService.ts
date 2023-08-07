
import { AppDataSource } from "../../data-source";
import { Gym } from "../../entities/Gym";
import { CreateGymRequest } from "../../types/Gym";

export class CreateGymService {

    async execute(props: CreateGymRequest) {
        const gymRepo = AppDataSource.getRepository(Gym);

        const { name, address, description, logoURL } = props;

        if (!name || !address || !description) {
            return { status: 400, message: "Você deve informar todos os campos!" }
        }

        const gym = gymRepo.create({
            name,
            address,
            description
        })

        try {
            gymRepo.save(gym)
        } catch (err) {
            return {
                status: 500,
                message: "Ocorreu algum erro ao criar a academia!"
            }
        }

        return {
            status: 201,
            message: "Academia criada com sucesso!",
            data: {
                id: gym.id,
                name: gym.name,
                address: gym.address,
                description: gym.description,
            }
        }
    }

}