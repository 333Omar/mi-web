const express = require("express");
const app = express();

// Usamos un puerto dinámico para Render
const PORT = process.env.PORT || 10000;

// 1. Servir archivos de la carpeta public de forma simple
app.use(express.static("public"));

// 2. Ruta principal
app.get("/", (req, res) => {
  // Aquí le decimos que busque el index.html en la carpeta public que tiene al lado
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log("Servidor activo en el puerto " + PORT);
});
