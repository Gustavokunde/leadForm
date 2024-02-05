import cors from "cors";
import express from "express";
import { initDatabase } from "./repository";
import { createLead } from "./repository/lead/createLead";
const app = express();
const port = 3000;

initDatabase();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.post("/leads", (req, res) => {
  const { name, email, phone } = req.body;
  createLead(name, email, phone)
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
