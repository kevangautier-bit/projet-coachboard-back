import type { RequestHandler } from "express";
import * as seancesRepository from "./seancesRepository.js";

export const getAll: RequestHandler = async (_req, res, next) => {
	try {
		const rows = await seancesRepository.findAll();
		res.json(rows);
	} catch (err) {
		next(err);
	}
};

export const getById: RequestHandler = async (_req, res, next) => {
	try {
		const seance = await seancesRepository.findById(String(_req.params.id));

		if (!seance) {
			res.sendStatus(404);
			return;
		}
		res.json(seance);
	} catch (err) {
		next(err);
	}
};

export const getByProgramme: RequestHandler = async (_req, res, next) => {
	try {
		const rows = await seancesRepository.findByProgramme(
			String(_req.params.idProgramme),
		);
		res.json(rows);
	} catch (err) {
		next(err);
	}
};

export const create: RequestHandler = async (_req, res, next) => {
	try {
		const { titre, jour, ordre, id_programme } = _req.body;
		const insertId = await seancesRepository.create(
			titre,
			jour,
			ordre,
			id_programme,
		);
		res.status(201).json({ id: insertId });
	} catch (err) {
		next(err);
	}
};

export const update: RequestHandler = async (_req, res, next) => {
	try {
		const { titre, jour, ordre, id_programme } = _req.body;

		// Récupère la séance existante d'abord
		const seance = await seancesRepository.findById(String(_req.params.id));
		if (!seance) {
			res.sendStatus(404);
			return;
		}

		const updated = await seancesRepository.update(
			String(_req.params.id),
			titre ?? seance.TITRE,
			jour ?? seance.JOUR,
			ordre ?? seance.ORDRE,
			id_programme ?? seance.ID_PROGRAMME,
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

export const destroy: RequestHandler = async (_req, res, next) => {
	try {
		const deleted = await seancesRepository.destroy(String(_req.params.id));

		if (!deleted) {
			res.sendStatus(404);
			return;
		}
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};
