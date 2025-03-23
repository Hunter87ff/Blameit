import { Router } from "express";

const webhooks = Router();

webhooks.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).json({status: "ok"});
});

export { webhooks };