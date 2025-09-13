// app.js
const express = require("express");
const app = express();
const path = require("path");

// Middleware para procesar formularios
app.use(express.urlencoded({ extended: true }));

// Configuración de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

// Middleware 404 (página no encontrada)
app.use((req, res, next) => {
  res.status(404).render("notFound", { url: req.originalUrl });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Servidor en http://localhost:${PORT}`)
);
