import { Router } from "express";
import {
	create,
	destroy,
	getAll,
	getByCoach,
	getById,
	search,
	update,
} from "./exercicesActions.js";

const router = Router();

router.get("/", getAll);
router.get("/search", search);
router.get("/coach/:idCoach", getByCoach);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
