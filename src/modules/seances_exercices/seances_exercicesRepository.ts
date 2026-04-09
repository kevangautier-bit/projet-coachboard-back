import type { ResultSetHeader, RowDataPacket } from "mysql2";
import client from "../../database/client.js";

export const findBySeance = async (id_seance: string) => {
	const [rows] = await client.query<RowDataPacket[]>(
		`SELECT 
			SE.ID_SEANCES_EXERCICES,
			SE.ID_SEANCE,
			SE.ID_EXERCICE,
			SE.SERIES,
			SE.REPS,
			SE.CHARGE,
			SE.REPOS,
			SE.ORDRE,
			E.NOM AS NOM_EXERCICE
		FROM SEANCES_EXERCICES SE
		JOIN EXERCICES E ON E.ID_EXERCICE = SE.ID_EXERCICE
		WHERE SE.ID_SEANCE = ?
		ORDER BY SE.ORDRE ASC`,
		[id_seance],
	);
	return rows;
};

export const create = async (
	id_seance: string,
	id_exercice: string,
	series: number,
	reps: number,
	charge: number,
	repos: number,
	ordre: number,
) => {
	const [result] = await client.query<ResultSetHeader>(
		" INSERT INTO SEANCES_EXERCICES (ID_SEANCE, ID_EXERCICE, SERIES, REPS, CHARGE, REPOS, ORDRE) VALUES (?,?,?,?,?,?,?)",
		[id_seance, id_exercice, series, reps, charge, repos, ordre],
	);
	return result.insertId;
};

export const update = async (
	id: string,
	series: number,
	reps: number,
	charge: number,
	repos: number,
	ordre: number,
) => {
	const [result] = await client.query<ResultSetHeader>(
		"UPDATE SEANCES_EXERCICES SET SERIES = ?, REPS = ?, CHARGE = ?, REPOS = ?, ORDRE = ? WHERE ID_SEANCES_EXERCICES = ?",
		[series, reps, charge, repos, ordre, id],
	);
	return result.affectedRows > 0;
};

export const destroy = async (id: string) => {
	const [result] = await client.query<ResultSetHeader>(
		"DELETE FROM SEANCES_EXERCICES WHERE ID_SEANCES_EXERCICES = ? ",
		[id],
	);
	return result.affectedRows > 0;
};
