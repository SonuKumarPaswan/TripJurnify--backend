import { searchHotels } from "../services/hotel.service.js";

export const getHotels = async (req, res) => {
    try {
        const { city } = req.query;
        const hotels = await searchHotels(city);

        res.json({
            success: true,
            data: hotels
        });
    } catch (error) {
        res.status(500).json({ message: "Hotel API Error", error });
    }
};
