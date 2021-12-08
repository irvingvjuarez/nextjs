import Database from "../../../database/db";

const allAvos = async (request, response) => {
    const db = new Database();
    const allEntries = await db.getAll();
    const length = allEntries.length;

    response.status(200).json({ data: allEntries, length });
}

export default allAvos