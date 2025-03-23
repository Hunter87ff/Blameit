import jwt from "jsonwebtoken";
import { PRIVATE_KEY, CLIENT_ID } from "../config.js";


function generateJwtToken() {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
        iat: now, // Issued at time
        exp: now + (60), // Expiration time
        iss: CLIENT_ID, // GitHub App's Client ID
    };
    return jwt.sign(payload, PRIVATE_KEY, { algorithm: "RS256" });
}

export async function getInstallationToken(id) {
    const token = generateJwtToken();
    const _token_uri = `https://api.github.com/app/installations/${id}/access_tokens`;
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28"
    }
    const response = await fetch(_token_uri, {
        method: "POST",
        headers: headers
    });
    const data = await response.json();
    return data.token;
}