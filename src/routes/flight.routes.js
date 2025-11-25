import express from "express";
import { getFlights } from "../controllers/flight.controller.js";

const router = express.Router();

router.get("/", getFlights);

export default router;
