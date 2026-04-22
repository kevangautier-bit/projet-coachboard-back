import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler.js";
import router from "./router.js";
import imagesRouter from "./routes/images.js";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(
	cors({
		origin: [
			"http://localhost:5173",
			"https://projet-coachboard-front.vercel.app",
		],
	}),
);
app.use(express.json());

// Sert les GIFs en statique
app.use(express.static(path.join(__dirname, "../public")));

// Route GIFs publique
app.use("/api/gifs", imagesRouter);

// Routes
app.use(router);

// Gestion d'erreurs sur l'App

app.use(errorHandler);

export default app;
