import express from "express";
import "reflect-metadata";
import "./db"
import { routes } from "./routes";
// import dotenv from "dotenv"
import cors from "cors"

const app = express();

// dotenv.config();
require("dotenv").config()

app.use(express.json())

app.use(cors())

app.use(routes);

app.listen(8000, () => {
    setTimeout(async () => {
    }, 500)

    console.log("Server running on port 8000 🚀")
})