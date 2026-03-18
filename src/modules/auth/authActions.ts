import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const signin: RequestHandler = async (req, res, next) => {
	try {
		const { user } = req.body;

		const token = jwt.sign(
			{
				id: user.ID_COACH ?? user.ID_ELEVE,
				email: user.EMAIL,
				role: user.role,
			},
			process.env.JWT_SECRET as string,
			{ expiresIn: "24h" },
		);
		res.json({ token });
	} catch (err) {
		next(err);
	}
};
