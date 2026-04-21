const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Esto sirve todos los archivos de la carpeta public (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, "public")));

// 2. ESTO ES LO QUE FALTABA:
// Le dice al servidor que si alguien entra a la raíz, le mande el index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Servidor activo en el puerto " + PORT);
});
