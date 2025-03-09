import { Router } from "express";
import { getAll } from "../controller/productos.controller.ts";

const router = Router();

router.get("/all", getAll);


export default router;