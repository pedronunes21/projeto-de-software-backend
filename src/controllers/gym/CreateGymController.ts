import { Request, Response } from "express";
import { CreateGymService } from "../../services/gym/CreateGymService";

export class CreateGymController {

    async handle(request: Request, response: Response) {
        const props = request.body;

        const data = await new CreateGymService().execute({ ...props })

        if (data.status >= 300) {
            response.status(data.status).json({
                message: data.message
            })
        } else {
            response.json({ ...data })
        }
    }
}