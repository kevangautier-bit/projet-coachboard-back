import type { ResultSetHeader, RowDataPacket } from "mysql2";
import client from "../../database/client.js";

export const findAll = async () => {
	const [rows] = await client.query<RowDataPacket[]>("SELECT * FROM SEANCES");
	return rows;
};

export const findById = async (id: string) => {
	const [rows] = await client.query<RowDataPacket[]>(
		"SELECT * FROM SEANCES WHERE ID_SEANCE = ?",
		[id],
	);
	return rows[0] as RowDataPacket | undefined;
};

export const findByProgramme = async (idProgramme: string) => {
	const [rows] = await client.query<RowDataPacket[]>(
		"SELECT * FROM SEANCES WHERE ID_PROGRAMME = ? ORDER BY ORDRE ASC",
		[idProgramme],
	);
	return rows;
};

export const create = async (
	titre: string,
	jour: string,
	ordre: number,
	idProgramme: number,
) => {
	const [result] = await client.query<ResultSetHeader>(
		"INSERT INTO SEANCES (TITRE, JOUR, ORDRE, ID_PROGRAMME) VALUES (?, ?, ?, ?)",
		[titre, jour, ordre, idProgramme],
	);
	return result.insertId;
};

export const update = async (
	id: string,
	titre: string,
	jour: string,
	ordre: number,
) => {
	const [result] = await client.query<ResultSetHeader>(
		"UPDATE SEANCES SET TITRE = ?, JOUR = ?, ORDRE = ? WHERE ID_SEANCE = ?",
		[titre, jour, ordre, id],
	);
	return result.affectedRows > 0;
};

export const destroy = async (id: string) => {
	const [result] = await client.query<ResultSetHeader>(
		"DELETE FROM SEANCES WHERE ID_SEANCE = ?",
		[id],
	);
	return result.affectedRows > 0;
};
