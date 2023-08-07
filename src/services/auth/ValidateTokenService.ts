import jwt from 'jsonwebtoken'
import { UserToken } from '../../types/User';

export default class ValidateTokenService {
    async execute(props: UserToken) {
        const { token } = props;

        try {
            const isValid = jwt.verify(token, process.env.JWT_SECRET_KEY!)
            return {
                status: 200,
                message: "Token validado com sucesso",
                data: isValid
            }
        } catch (err) {
            return {
                status: 404,
                message: "Token inválido!"
            }
        }

    }
}