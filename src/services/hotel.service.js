import axios from "axios";

export const searchHotels = async (city) => {
    const options = {
        method: "GET",
        url: process.env.HOTEL_API_URL,
        params: { city },
        headers: {
            "X-RapidAPI-Key": process.env.RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.HOTEL_API_HOST,
        },
    };

    const { data } = await axios.request(options);
    return data;
};
