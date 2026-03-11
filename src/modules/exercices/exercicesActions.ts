import type { RequestHandler } from "express";
import * as exercicesRepository from "../exercices/exercicesRepository.js";

export const getAll: RequestHandler = async (_req, res, next) => {
	try {
		const rows = await exercicesRepository.findAll();
		res.json(rows);
	} catch (err) {
		next(err);
	}
};

export const getById: RequestHandler = async (_req, res, next) => {
	try {
		const exercice = await exercicesRepository.findById(String(_req.params.id));

		if (!exercice) {
			res.sendStatus(404);
			return;
		}
		res.json(exercice);
	} catch (err) {
		next(err);
	}
};

export const getByCoach: RequestHandler = async (_req, res, next) => {
	try {
		const rows = await exercicesRepository.findByCoach(
			String(_req.params.idCoach),
		);
		res.json(rows);
	} catch (err) {
		next(err);
	}
};

export const create: RequestHandler = async (_req, res, next) => {
	try {
		const { nom, description, groupe_musculaire, type, image_url, id_coach } =
			_req.body;
		const insertId = await exercicesRepository.create(
			nom,
			description,
			groupe_musculaire,
			type,
			image_url,
			id_coach,
		);
		res.status(201).json({ id: insertId });
	} catch (err) {
		next(err);
	}
};

export const update: RequestHandler = async (_req, res, next) => {
	try {
		const { nom, description, groupe_musculaire, type, image_url } = _req.body;
		const updated = await exercicesRepository.update(
			String(_req.params.id),
			nom,
			description,
			groupe_musculaire,
			type,
			image_url,
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
		const deleted = await exercicesRepository.destroy(String(_req.params.id));

		if (!deleted) {
			res.sendStatus(404);
			return;
		}
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};

export const search: RequestHandler = async (req, res, next) => {
	try {
		const query = String(req.query.query || "");
		const rows = await exercicesRepository.search(query);
		res.json(rows);
	} catch (err) {
		next(err);
	}
};
