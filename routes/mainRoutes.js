const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// Rutas existentes
router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.post("/contact", mainController.saveContact);
router.get("/admin", mainController.admin);

// Nuevas rutas videojuegos
router.get("/videojuegos", mainController.videojuegosView);
router.post("/videojuegos", mainController.saveVideojuego);

module.exports = router;
