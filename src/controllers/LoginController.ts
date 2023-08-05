import { Request, Response } from "express";
import { LoginService } from "../services/LoginService";

export class LoginController {

    async handle(request: Request, response: Response) {
        const props = request.body;

        const data = await new LoginService().execute({ ...props })

        if (data.status >= 300) {
            response.status(data.status).json({
                message: data.message
            })
        } else {
            response.json({ ...data })
        }

    }

}