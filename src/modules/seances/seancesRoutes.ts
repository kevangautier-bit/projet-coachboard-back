import { Router } from "express";
import {
	create,
	destroy,
	getAll,
	getById,
	getByProgramme,
	update,
} from "./seancesActions.js";

const router = Router();

router.get("/", getAll);
router.get("/programme/:idProgramme", getByProgramme);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
