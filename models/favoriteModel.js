import pool from "../config/db.js";

const favoriteModel = {
  createFavorite: async (userId, favoriteData) => {
    const { items } = favoriteData;

    console.log("Items recibidos:", items);

    try {
      const result = await pool.query(
        "INSERT INTO favorites (user_id, items) VALUES ($1, $2) RETURNING *",
        [userId, JSON.stringify(items)]
      );
      return result.rows[0];
    } catch (error) {
      console.log("Error en modelo:", error);
      throw error;
    }
  },
};

export default favoriteModel;