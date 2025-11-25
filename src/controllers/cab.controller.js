import { searchCabs } from "../services/cab.service.js";

export const getCabs = async (req, res) => {
    try {
        const { pickup, drop } = req.query;
        const data = await searchCabs(pickup, drop);

        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ message: "Cab API Error", error });
    }
};
