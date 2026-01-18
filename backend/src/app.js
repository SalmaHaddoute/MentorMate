import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// route de test
app.get("/api/test", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;
