import type { ResultSetHeader, RowDataPacket } from "mysql2";
import client from "../../database/client.js";

export const findAll = async () => {
	const [rows] = await client.query<RowDataPacket[]>("SELECT * FROM EXERCICES");
	return rows;
};

export const search = async (nom: string) => {
	const [rows] = await client.query<RowDataPacket[]>(
		"SELECT * FROM EXERCICES WHERE NOM LIKE ?",
		[`%${nom}%`],
	);
	return rows;
};

export const findById = async (id: string) => {
	const [rows] = await client.query<RowDataPacket[]>(
		"SELECT * FROM EXERCICES WHERE ID_EXERCICE = ?",
		[id],
	);
	return rows[0] as RowDataPacket | undefined;
};

export const findByCoach = async (idCoach: string) => {
	const [rows] = await client.query<RowDataPacket[]>(
		"SELECT * FROM EXERCICES WHERE ID_COACH = ?",
		[idCoach],
	);
	return rows;
};

export const create = async (
	nom: string,
	description: string,
	groupeMusculaire: string,
	type: string,
	imageUrl: string,
	idCoach: number,
) => {
	const [result] = await client.query<ResultSetHeader>(
		"INSERT INTO EXERCICES (NOM, DESCRIPTION, GROUPE_MUSCULAIRE, TYPE, IMAGE_URL, ID_COACH) VALUES(?, ?, ?, ?, ?, ?)",
		[nom, description, groupeMusculaire, type, imageUrl, idCoach],
	);
	return result.insertId;
};

export const update = async (
	id: string,
	nom: string,
	description: string,
	groupeMusculaire: string,
	type: string,
	imageUrl: string,
) => {
	const [result] = await client.query<ResultSetHeader>(
		"UPDATE EXERCICES SET NOM = ?, DESCRIPTION = ?, GROUPE_MUSCULAIRE = ?, TYPE = ?, IMAGE_URL = ? WHERE ID_EXERCICE = ?",
		[nom, description, groupeMusculaire, type, imageUrl, id],
	);
	return result.affectedRows > 0;
};

export const destroy = async (id: string) => {
	const [result] = await client.query<ResultSetHeader>(
		"DELETE FROM EXERCICES WHERE ID_EXERCICE = ?",
		[id],
	);
	return result.affectedRows > 0;
};
