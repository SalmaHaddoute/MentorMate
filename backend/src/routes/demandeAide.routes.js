import express from "express";
import {
  postDemandeAide,
  getDemandeAide,
  patchDemandeAide,
} from "../controllers/demandeAide.controller.js";

const router = express.Router();

router.post("/demandes-aide", postDemandeAide);
router.get("/demandes-aide/:id", getDemandeAide);
router.patch("/demandes-aide/:id", patchDemandeAide);

export default router;
