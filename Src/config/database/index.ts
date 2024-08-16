import promise from "bluebird";
import pg from "pg-promise";
import envs from "../env/index";
import dotenv from'dotenv'
dotenv.config()

const options = {
  promiseLib: promise,
};

const pgp = pg(options);
const db = pgp(process.env.DATABASE_URL as string);

async function databaseConnection(){
    try {
        await db.connect()
        console.log('Database connected Successsfully')
    } catch (error) {
        console.log("Database connection failed!", error)
    }
}
databaseConnection()
export default db;
export type DatabaseType = typeof db;

