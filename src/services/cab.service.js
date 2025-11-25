import axios from "axios";

export const searchCabs = async (pickup, drop) => {
    const res = await axios.get(process.env.CAB_API_URL, {
        params: { pickup, drop },
        headers: { Authorization: `Bearer ${process.env.CAB_API_KEY}` }
    });

    return res.data;
};
