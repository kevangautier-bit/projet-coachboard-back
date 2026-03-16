import type { RequestHandler } from "express";
import * as seances_exercicesRepository from "../seances_exercices/seances_exercicesRepository.js";

export const getBySeance: RequestHandler<{ id_seance: string }> = async (
	req,
	res,
	next,
) => {
	try {
		const { id_seance } = req.params;
		const seances_exercices =
			await seances_exercicesRepository.findBySeance(id_seance);
		if (seances_exercices.length === 0) {
			res
				.status(404)
				.json({ message: "aucun exercice trouvé pour cette séance" });
			return;
		}
		res.json(seances_exercices);
	} catch (err) {
		next(err);
	}
};

export const create: RequestHandler = async (req, res, next) => {
	try {
		const { id_seance, id_exercice, series, reps, charge, repos, ordre } =
			req.body;
		const insertId = await seances_exercicesRepository.create(
			id_seance,
			id_exercice,
			series,
			reps,
			charge,
			repos,
			ordre,
		);
		res.status(201).json({ id: insertId });
	} catch (err) {
		next(err);
	}
};

export const update: RequestHandler = async (req, res, next) => {
	try {
		const { series, reps, charge, repos, ordre } = req.body;
		const updated = await seances_exercicesRepository.update(
			String(req.params.id),
			series,
			reps,
			charge,
			repos,
			ordre,
		);

		if (!updated) {
			res.sendStatus(404);
			return;
		}
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};

export const destroy: RequestHandler = async (req, res, next) => {
	try {
		const deleted = await seances_exercicesRepository.destroy(
			String(req.params.id),
		);
		if (!deleted) {
			res.sendStatus(404);
			return;
		}
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};
