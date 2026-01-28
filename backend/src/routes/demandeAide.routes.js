import express from "express";
import { createDemandeAide } from "../controllers/demandeAide.controller.js";

const router = express.Router();

router.post("/demandes-aide", createDemandeAide);

export default router;
