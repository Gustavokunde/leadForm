import sqlite3 from "sqlite3";

export const db = new sqlite3.Database("leads.db");

export function initDatabase() {
  db.run(`
      CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        phone TEXT
      )
    `);
}
