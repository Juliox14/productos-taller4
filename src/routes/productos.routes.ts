import { Router } from "express";
import { deleteProducto, getAll, putProductos } from "../controller/productos.controller.ts";
import { insertProductos } from "../controller/productos.controller.ts";

const router = Router();

router.get("/all", getAll);

router.post("/insert", insertProductos);

router.put("/put", putProductos);

router.delete("/delete", deleteProducto);

export default router;