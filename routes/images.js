import express from "express";
import { exercices } from "../data/images.js";

const router = express.Router();

// GET /api/exercices
router.get("/", (_req, res) => {
	res.json(exercices);
});

// GET /api/exercices/:id
router.get("/:id", (req, res) => {
	const id = parseInt(req.params.id, 10);
	const exercice = exercices.find((e) => e.id === id);
	if (exercice) {
		res.json(exercice);
	} else {
		res.status(404).json({ error: "Exercice non trouvé" });
	}
});

// GET /api/exercices/categorie/:cat
router.get("/categorie/:cat", (req, res) => {
	const cat = req.params.cat.toLowerCase();
	const filtered = exercices.filter((e) => e.categorie === cat);
	res.json(filtered);
});

export default router;
