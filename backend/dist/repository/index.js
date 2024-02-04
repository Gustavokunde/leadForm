"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = exports.db = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
exports.db = new sqlite3_1.default.Database("leads.db");
function initDatabase() {
    exports.db.run(`
      CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
      )
    `);
}
exports.initDatabase = initDatabase;
