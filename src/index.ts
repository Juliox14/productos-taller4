import express from "express";
import dotenv from "dotenv";
import productosRoutes from "./routes/productos.routes.ts";

dotenv.config(); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/productos", productosRoutes);

app.listen(port, () => {
    console.log(`Escuchando puerto: ${port}`);
});
