import express from "express";
import cors from "cors";
import usersService from "./services/service.users.js";
import apartmentService from "./services/service.apartment.js";
import authService from "./services/service.auth.js";
import bookingService from "./services/service.booking.js";

const app = express();

// Configuración de CORS
const corsOptions = {
    origin: [
        'https://frontend-hospeda-ya.vercel.app',
        'http://localhost:3000',
        'http://localhost:5173',
        'http://localhost:4173'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Rutas
app.use("/users", usersService);
app.use("/apartment", apartmentService);
app.use("/auth", authService);
app.use("/booking", bookingService);

// Servidor
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));