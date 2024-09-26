import express from "express";
import fileUpload from "express-fileupload";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

import drinkRoutes from "./routes/drinks.routes";
import { db } from "./db/drinks.db";
import cors from 'cors';
const app = express();
const port = 4000;

console.log(__dirname);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    createParentPath: true,
  })
);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(cors({
  origin: 'http://localhost:5173', // Change this to match your React app’s URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Add necessary headers
  credentials: true, // Allow credentials like cookies or authorization headers
}));
app.use("/api", drinkRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

db.sync();

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export { app, server };
