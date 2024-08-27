import { Router } from "express";
import userRoutes from "./user.route";

const appRouter = Router();

appRouter.get("/", (req, res) => {
    res.send("Welcome to the Store Locator api server 😊");
});

appRouter.use("/users", userRoutes);

export default appRouter;
