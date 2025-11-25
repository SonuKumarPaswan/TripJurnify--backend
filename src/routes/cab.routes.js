import express from "express";
import { getCabs } from "../controllers/cab.controller.js";

const router = express.Router();

router.get("/", getCabs);

export default router;
