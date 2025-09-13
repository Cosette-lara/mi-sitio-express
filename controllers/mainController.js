// "Base de datos" en memoria
const messages = [];
const videojuegos = []; // Nuevo arreglo para videojuegos

const home = (req, res) => {
  res.render("home", { title: "Inicio", videojuegos });
};


const about = (req, res) => {
  res.render("about", { title: "Acerca de" });
};

const contact = (req, res) => {
  res.render("contact");
};

const saveContact = (req, res) => {
  const { nombre, email, mensaje } = req.body;
  messages.push({ nombre, email, mensaje });
  res.redirect('/admin');
};

const admin = (req, res) => {
  res.render("admin", { messages });
};

// Vista videojuegos
const videojuegosView = (req, res) => {
  res.render("videojuegos", { videojuegos });
};

// Guardar videojuego
const saveVideojuego = (req, res) => {
  const { titulo, genero, plataforma, anio, compania } = req.body;
  videojuegos.push({ titulo, genero, plataforma, anio, compania });
  res.redirect("/videojuegos");
};

const mainController = {
  home,
  about,
  contact,
  saveContact,
  admin,
  videojuegosView,
  saveVideojuego
};

module.exports = mainController;
