import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {

    async handle(request: Request, response: Response) {
        const props = request.body;

        const data = await new CreateUserService().execute({ ...props })

        if (data.status >= 300) {
            response.status(data.status).json({
                message: data.message
            })
        } else {
            response.json({ ...data })
        }
    }
}