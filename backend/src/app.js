import express from "express";
import cors from "cors";

// Routes
import accompagnantRoutes from "./routes/accompagnant.routes.js";
import demandeAideRoutes from "./routes/demandeAide.routes.js";

const app = express();

/* =========================
   Middlewares globaux
========================= */
app.use(cors({
  origin: "http://localhost:5173", // Front Vite
}));
app.use(express.json());

/* =========================
   Routes API
========================= */
app.use("/api", accompagnantRoutes);
app.use("/api", demandeAideRoutes);

/* =========================
   Route test
========================= */
app.get("/", (req, res) => {
  res.send("API MentorMate is running 🚀");
});

export default app;