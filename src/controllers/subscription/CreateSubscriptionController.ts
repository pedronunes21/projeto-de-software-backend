import { Request, Response } from "express";
import CreateSubscriptionService from "../../services/subscription/CreateSubscriptionService";

export class CreateSubscriptionController {

    async handle(request: Request, response: Response) {
        const props = request.body;

        const data = await new CreateSubscriptionService().execute({ ...props })

        if (data.status >= 300) {
            response.status(data.status).json({
                message: data.message
            })
        } else {
            response.json({ ...data })
        }
    }
}