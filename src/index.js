import e from "express";
import { api } from "./routes/api.js";
import {PORT} from "./config.js";


const app = e();

app.use(e.json());



app.use("/api", api);
app.use("/", e.static("public"));


app.get("/", (req, res) => {
    res.status(201).json({status: "ok"});
});

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
