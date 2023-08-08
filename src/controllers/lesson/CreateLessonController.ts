import { Request, Response } from "express";
import { CreateGymService } from "../../services/gym/CreateGymService";
import { CreateLessonService } from "../../services/lesson/CreateLessonService";

export class CreateLessonController {

    async handle(request: Request, response: Response) {
        const props = request.body;

        const data = await new CreateLessonService().execute({ ...props })

        if (data.status >= 300) {
            response.status(data.status).json({
                message: data.message
            })
        } else {
            response.json({ ...data })
        }
    }
}