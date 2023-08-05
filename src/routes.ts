import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { LoginController } from "./controllers/LoginController";
import { ValidateTokenController } from "./controllers/ValidateTokenController";

const routes = Router()

routes.get("/users", new ListUsersController().handle)

routes.post("/register", new CreateUserController().handle)
routes.post("/login", new LoginController().handle)

routes.post("/token/validate", new ValidateTokenController().handle)

export { routes };