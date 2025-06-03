import pool from "../config/db.js"

const userModel = {
    getAllUsers: async (db) => {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    },
    getUserById: async (id) => {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return result.rows;
    },
    getIdByMail: async (mail) => {
        const result = await pool.query("SELECT id FROM users WHERE email = $1", [mail]);
        return result.rows;
    },
    getPasswordByMail: async (mail) => {
        const result = await pool.query("SELECT password FROM users WHERE email = $1", [mail]);
        return result.rows;
    },
    createUser: async (userData) => {
        const { name, email, password } = userData;
        const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
        );
        return result.rows[0];
    },
    updateUser: async(id, userData) => {
        const { name, email, password } = userData;
        const result = await pool.query(
        'UPDATE users SET name = $1, email=$2, password=$3 WHERE id = $4 RETURNING *',
        [name, email, password, id]
        );
        return result.rows[0];
    }
}

export default userModel;