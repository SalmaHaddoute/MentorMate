import express from "express";
import { getAccompagnants } from "../controllers/accompagnant.controller.js";

const router = express.Router();

router.get("/accompagnants", getAccompagnants);

export default router;
