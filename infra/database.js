import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();

  try {
    const result = await client.query(queryObject);
    return result;
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
