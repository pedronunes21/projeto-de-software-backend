import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { ListUsersController } from "./controllers/user/ListUsersController";
import { LoginController } from "./controllers/auth/LoginController";
import { ValidateTokenController } from "./controllers/auth/ValidateTokenController";
import { CreateGymController } from "./controllers/gym/CreateGymController";
import { CreateTrainingController } from "./controllers/training/CreateTrainingController";
import { CreateSubscriptionController } from "./controllers/subscription/CreateSubscriptionController";
import { CreateLessonController } from "./controllers/lesson/CreateLessonController";

const routes = Router()

// USERS
routes.get("/users", new ListUsersController().handle)
routes.post("/register", new CreateUserController().handle)

// AUTH
routes.post("/login", new LoginController().handle)
routes.post("/token/validate", new ValidateTokenController().handle)

// GYM
routes.post("/gym/create", new CreateGymController().handle)

// TRAINING
routes.post("/training/create", new CreateTrainingController().handle)

// SUBSCRIPTION
routes.post("/subscription/create", new CreateSubscriptionController().handle)

// LESSON
routes.post("/lesson/create", new CreateLessonController().handle)


export { routes };