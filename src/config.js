import { configDotenv } from "dotenv";
import fs from "fs";
configDotenv();


export const PORT=process.env.PORT || 3000
export const CLIENT_ID=process.env.CLIENT_ID
export const PRIVATE_KEY = process.env.PRIVATE_KEY || fs.readFileSync("./private-key.pem", "utf8");