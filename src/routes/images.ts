import express, { type Request, type Response } from "express";
import { exercices } from "../data/images.js";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
	res.json(exercices);
});

router.get("/:id", (req: Request, res: Response) => {
	const id = parseInt(String(req.params.id), 10);
	const exercice = exercices.find((e) => e.id === id);
	if (exercice) {
		res.json(exercice);
	} else {
		res.status(404).json({ error: "Exercice non trouvé" });
	}
});

router.get("/categorie/:cat", (req: Request, res: Response) => {
	const cat = String(req.params.cat).toLowerCase();
	const filtered = exercices.filter((e) => e.categorie === cat);
	res.json(filtered);
});

export default router;
