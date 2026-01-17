const express = require("express");
const app = express();
const path = require("path");

// 🔥 CSP RELAJADA (IMPORTANTE)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;"
  );
  next();
});

// Servir frontend
app.use(express.static(path.join(__dirname, "../public")));

// RUTAS
app.get("/auth/discord", (req, res) => {
  res.send("Discord OAuth aquí");
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
