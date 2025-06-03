import dotenv from 'dotenv'
import pg, { Connection } from 'pg'
const {Pool} = pg;

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export default pool;