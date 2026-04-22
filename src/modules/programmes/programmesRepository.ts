import type { ResultSetHeader, RowDataPacket } from "mysql2";
import client from "../../database/client.js";

export const findAll = async () => {
	const [rows] = await client.query<RowDataPacket[]>(
		"SELECT PROGRAMMES.ID_PROGRAMME, ELEVES_PROGRAMMES.ID_ELEVE_PROGRAMME, ELEVES_PROGRAMMES.DATE_DEBUT, PROGRAMMES.DUREE AS duree_programme, PROGRAMMES.NOM AS nom_programme, ELEVES_PROGRAMMES.STATUT, ELEVES.NOM AS nom_eleve, ELEVES.PRENOM AS prenom_eleve FROM ELEVES_PROGRAMMES JOIN PROGRAMMES ON ELEVES_PROGRAMMES.ID_PROGRAMME = PROGRAMMES.ID_PROGRAMME JOIN ELEVES ON ELEVES_PROGRAMMES.ID_ELEVE = ELEVES.ID_ELEVE",
	);
	return rows;
};

export const search = async (nom: string) => {
	const [rows] = await client.query<RowDataPacket[]>(
		"SELECT * FROM PROGRAMMES WHERE NOM LIKE ? ",
		[`%${nom}%`],
	);
	return rows;
};

export const findById = async (id: string) => {
	const [rows] = await client.query<RowDataPacket[]>(
		"SELECT * FROM PROGRAMMES WHERE ID_PROGRAMME = ?",
		[id],
	);
	return rows[0] as RowDataPacket | undefined;
};

export const create = async (
	nom: string,
	objectif: string,
	duree: number,
	idCoach: number,
) => {
	const [result] = await client.query<ResultSetHeader>(
		"INSERT INTO PROGRAMMES (NOM, OBJECTIF, DUREE, ID_COACH) VALUES(?, ?, ?, ?)",
		[nom, objectif, duree, idCoach],
	);
	return result.insertId;
};

export const update = async (
	id: string,
	nom: string,
	objectif: string,
	duree: number,
) => {
	const [result] = await client.query<ResultSetHeader>(
		"UPDATE PROGRAMMES SET NOM = ?, OBJECTIF = ?, DUREE = ? WHERE ID_PROGRAMME = ?",
		[nom, objectif, duree, id],
	);
	return result.affectedRows > 0;
};

export const destroy = async (id: string) => {
	const [result] = await client.query<ResultSetHeader>(
		"DELETE FROM PROGRAMMES WHERE ID_PROGRAMME = ?",
		[id],
	);
	return result.affectedRows > 0;
};
