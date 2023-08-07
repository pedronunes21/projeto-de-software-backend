import { Request, Response } from "express";
import ListUsersService from "../../services/user/ListUsersService";

export class ListUsersController {

    async handle(request: Request, response: Response) {
        const data = await new ListUsersService().execute()

        if (data.status >= 300) {
            response.status(data.status).json({
                message: data.message
            })
        } else {
            response.json({ ...data })
        }
    }
}