import { Router } from "express";
import {
	checkDejaRealisee,
	create,
	destroy,
	destroyByEleveProgramme,
	getAll,
	getByDate,
	getByEleve,
	getById,
	getBySeance,
	update,
} from "./suiviActions.js";

const router = Router();

router.get("/seance/:id_seance", getBySeance);
router.get("/date/:date", getByDate);
router.get("/", getAll);
router.get("/eleve/:idEleve", getByEleve);
router.get("/check/:id_seance/:date/:id_eleve_programme", checkDejaRealisee);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);
router.delete("/eleve-programme/:id", destroyByEleveProgramme);

export default router;
