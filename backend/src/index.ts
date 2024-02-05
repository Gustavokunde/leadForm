import cors from "cors";
import "dotenv/config";
import express from "express";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { initDatabase } from "./repository";
import { createLead } from "./repository/lead/createLead";

const app = express();
const port = 3000;

initDatabase();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.post("/leads", app.use(isAuthenticated), async (req, res) => {
  const { name, email, phone } = req.body;
  await createLead(name, email, phone)
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
