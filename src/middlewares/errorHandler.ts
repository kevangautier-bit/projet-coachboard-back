import type { ErrorRequestHandler } from "express";
import { AppError } from "../utils/AppError.js";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	const status = err instanceof AppError ? err.status : 500;
	const message =
		err instanceof AppError ? err.message : "Internal server error";
	res.status(status).json({ error: message });
};
