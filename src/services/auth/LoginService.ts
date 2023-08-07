import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { compare } from "bcrypt"
import jwt from 'jsonwebtoken'
import { LoginRequest } from "../../types/User";

export class LoginService {

    async execute(props: LoginRequest) {
        const userRepo = AppDataSource.getRepository(User);

        const { email, password } = props;

        const user = await userRepo.findOne({
            where: { email }
        })

        if (!user) {
            return {
                status: 404,
                message: "Esse usuário não existe"
            }
        }

        const userWithPassword = await userRepo.createQueryBuilder().addSelect("User.password").where({ email }).getOne()

        const passwordMatch = await compare(password, userWithPassword!.password)

        if (!passwordMatch) {
            return { status: 400, message: "Senha incorreta!" }
        }

        const token = jwt.sign({
            user: { id: user.id, email: user.email }
        }, process.env.JWT_SECRET_KEY!)

        return {
            status: 200,
            message: "Usuário logado com sucesso!",
            data: {
                token
            }
        }
    }

}