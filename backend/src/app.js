import express from "express";
import cors from "cors";
import demandeAideRoutes from "./routes/demandeAide.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes métier
app.use("/api", demandeAideRoutes);

// route test
app.get("/api/test", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;
