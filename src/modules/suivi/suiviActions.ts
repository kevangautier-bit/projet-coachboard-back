import type { RequestHandler } from "express";
import * as suiviRepository from "./suiviRepository.js";

// GET /api/suivi
export const getAll: RequestHandler = async (_req, res, next) => {
	try {
		const rows = await suiviRepository.findAll();
		res.json(rows);
	} catch (err) {
		next(err);
	}
};

// GET /api/suivi/:id
export const getById: RequestHandler = async (req, res, next) => {
	try {
		const suivi = await suiviRepository.findById(String(req.params.id));
		if (!suivi) {
			res.status(404).json({ error: "Suivi non trouvé" });
			return;
		}
		res.json(suivi);
	} catch (err) {
		next(err);
	}
};

// GET /api/suivi/seance/:id
export const getBySeance: RequestHandler = async (req, res, next) => {
	try {
		const suivi = await suiviRepository.findBySeance(String(req.params.id));
		res.json(suivi);
	} catch (err) {
		next(err);
	}
};

// GET /api/suivi/date/:date
export const getByDate: RequestHandler = async (req, res, next) => {
	try {
		const suivi = await suiviRepository.findByDate(String(req.params.date));
		res.json(suivi);
	} catch (err) {
		next(err);
	}
};

export const getByEleve: RequestHandler = async (req, res, next) => {
	try {
		const rows = await suiviRepository.findByEleve(String(req.params.idEleve));
		res.json(rows);
	} catch (err) {
		next(err);
	}
};

// POST /api/suivi
export const create: RequestHandler = async (req, res, next) => {
	try {
		const {
			charge_soulevee,
			reps_reelle,
			poids_corporel,
			ressenti,
			commentaires,
			date,
			statut,
			id_seance,
			id_seances_exercices,
			id_eleve_programme,
		} = req.body;
		const suivi = await suiviRepository.create(
			charge_soulevee,
			reps_reelle,
			poids_corporel,
			ressenti,
			commentaires,
			date,
			statut,
			id_seance,
			id_seances_exercices,
			id_eleve_programme,
		);
		res.status(201).json({ id: suivi });
	} catch (err) {
		next(err);
	}
};

// PUT /api/suivi/:id
export const update: RequestHandler = async (req, res, next) => {
	try {
		const {
			charge_soulevee,
			reps_reelle,
			poids_corporel,
			ressenti,
			commentaires,
			date,
			statut,
			id_seance,
			id_seances_exercices,
			id_eleve_programme,
		} = req.body;
		const updated = await suiviRepository.update(
			String(req.params.id),
			charge_soulevee,
			reps_reelle,
			poids_corporel,
			ressenti,
			commentaires,
			date,
			statut,
			id_seance,
			id_seances_exercices,
			id_eleve_programme,
		);

		if (!updated) {
			res.status(404).json({ error: "Suivi non trouvé" });
			return;
		}

		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};

// DELETE /api/suivi/:id
export const destroy: RequestHandler = async (req, res, next) => {
	try {
		const deleted = await suiviRepository.destroy(String(req.params.id));

		if (!deleted) {
			res.status(404).json({ error: "Suivi non trouvé" });
			return;
		}

		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};

// DELETE /api/eleve_programme/:id
export const destroyByEleveProgramme: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		const deleted = await suiviRepository.destroyByEleveProgramme(
			String(req.params.id),
		);

		if (!deleted) {
			res.status(404).json({ error: "Suivi non trouvé" });
			return;
		}

		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};
