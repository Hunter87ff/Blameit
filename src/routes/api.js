import { Router } from "express";
import {webhooks} from "./child/webhooks.js"

const api = Router();

api.use("/webhook", webhooks);

export { api };
