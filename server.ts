import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";

import appRouter from "./src/routes";

// configures dotenv to work in your application
const isProduction = process.env.NODE_ENV === "production";
dotenv.config({ path: isProduction ? ".env.production" : ".env.local" });

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", appRouter);

const server = http
    .createServer(app)
    .listen(PORT, console.log.bind(console, `Server is running😊: env => ${ENV}, port => ${PORT}`));