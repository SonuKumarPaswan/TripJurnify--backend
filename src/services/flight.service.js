import axios from "axios";

export const searchFlights = async (from, to, date) => {
    const response = await axios.get(process.env.FLIGHT_API_URL, {
        params: { from, to, date },
        headers: {
            "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        },
    });

    return response.data;
};
