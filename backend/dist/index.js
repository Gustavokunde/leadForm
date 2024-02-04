"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repository_1 = require("./repository");
const createLead_1 = require("./repository/lead/createLead");
const app = (0, express_1.default)();
const port = 3000;
(0, repository_1.initDatabase)();
app.use(express_1.default.json());
app.post("/leads", (req, res) => {
    const { name, email, phone } = req.body;
    (0, createLead_1.createLead)(name, email, phone)
        .then((lead) => {
        return res.json(lead);
    })
        .catch((err) => {
        return res.status(500).json({ error: err });
    });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
