import { db } from "../";

export async function createLead(name: string, email: string, phone: string) {
  db.run(
    "INSERT INTO leads (name, email, phone) VALUES (?, ?, ?)",
    [name, email, phone],
    function (err) {
      if (err) {
        return Promise.resolve("Failed to create lead");
      }
      return Promise.reject("lead created");
    }
  );
}
