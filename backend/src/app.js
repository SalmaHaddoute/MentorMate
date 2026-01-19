import express from "express";
import accompagnantRoutes from "./routes/accompagnant.routes.js";

const app = express();

app.use(express.json());

app.use("/api", accompagnantRoutes);

export default app;
