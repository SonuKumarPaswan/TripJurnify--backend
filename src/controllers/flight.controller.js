import { searchFlights } from "../services/flight.service.js";

export const getFlights = async (req, res) => {
    try {
        const { from, to, date } = req.query;

        const flights = await searchFlights(from, to, date);

        res.json({
            success: true,
            data: flights
        });
    } catch (error) {
        res.status(500).json({ message: "Flight API Error", error });
    }
};
