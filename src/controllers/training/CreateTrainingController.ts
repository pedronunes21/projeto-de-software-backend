import { Request, Response } from "express";
import { CreateTrainingService } from "../../services/training/CreateTrainingService";

export class CreateTrainingController {

    async handle(request: Request, response: Response) {
        const props = request.body;

        const data = await new CreateTrainingService().execute({ ...props })

        if (data.status >= 300) {
            response.status(data.status).json({
                message: data.message
            })
        } else {
            response.json({ ...data })
        }

    }

}