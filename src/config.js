import { config } from "dotenv";

config();
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/test"; // si sale que esta conectada a test quiere decir que no esta conectada la base de datos

export const PORT = process.env.PORT || 5000;
