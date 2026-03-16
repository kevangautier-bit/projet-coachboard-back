import { Router } from "express";
import {
	create,
	destroy,
	getBySeance,
	update,
} from "./seances_exercicesActions.js";

const router = Router();

router.get("/seance/:id_seance", getBySeance);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
