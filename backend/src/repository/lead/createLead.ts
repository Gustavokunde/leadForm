import { db } from "..";

export async function createLead(name: string, email: string, phone: string) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO leads (name, email, phone) VALUES (?, ?, ?)",
      [name, email, phone],
      function (err) {
        if (err) {
          return reject("Failed to create lead" + err);
        }
        return resolve("lead created");
      }
    );
  });
}
