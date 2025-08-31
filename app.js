const express = require("express");
const cors = require("cors");
const usersService = require("./services/service.users.js");
const apartmentService = require("./services/service.apartment.js");
const authService = require("./services/service.auth.js");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba para verificar que el backend funciona
app.get("/api/test", (req, res) => {
    res.json({ 
        message: "Backend funcionando correctamente", 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Rutas
app.use("/users", usersService);
app.use("/apartment", apartmentService);
app.use("/auth", authService);

const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log("Servidor corriendo en http://localhost:3000"));


module.exports = app;
