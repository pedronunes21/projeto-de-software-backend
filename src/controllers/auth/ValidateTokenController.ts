import { Request, Response } from "express";
import ValidateTokenService from "../../services/auth/ValidateTokenService";

export class ValidateTokenController {

    async handle(request: Request, response: Response) {
        const props = request.body;

        const data = await new ValidateTokenService().execute({ ...props })

        if (data.status >= 300) {
            response.status(data.status).json({
                message: data.message
            })
        } else {
            response.json({ ...data })
        }
    }
}