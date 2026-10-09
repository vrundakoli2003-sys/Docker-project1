
const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", async (req, res) => {
  let dbStatus = "Database not configured";

  if (process.env.DB_HOST) {
    try {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "root",
        database: process.env.DB_NAME || "opsmate"
      });

      await connection.query(
        "CREATE TABLE IF NOT EXISTS visits (id INT AUTO_INCREMENT PRIMARY KEY, visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
      );
      await connection.query("INSERT INTO visits () VALUES ()");
      const [rows] = await connection.query("SELECT COUNT(*) AS count FROM visits");
      dbStatus = "MySQL connected. Visit count: " + rows[0].count;
      await connection.end();
    } catch (error) {
      dbStatus = "Database connection failed: " + error.message;
    }
  }

  res.send(
    "<h1>OpsMate is running</h1>" +
    "<p>Containerized with Docker.</p>" +
    "<p>" + dbStatus + "</p>"
  );
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", service: "opsmate" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("OpsMate listening on port " + PORT);
});
