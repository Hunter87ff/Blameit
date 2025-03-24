import { configDotenv } from "dotenv";
import fs from "fs";
configDotenv();


export const PORT=process.env.PORT || 3000
export const CLIENT_ID=process.env.CLIENT_ID //use client_id insted of app id
export const PRIVATE_KEY = process.env.PRIVATE_KEY || fs.readFileSync("./private-key.pem", "utf8"); //private key or the path to the private key