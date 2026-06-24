const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/`;

export const fetchWeatherData = async city => {
    const url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City not found');
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

export const fetchForecastData = async city => {
    const url = `${BASE_URL}forecast?q=${city}&appid=${API_KEY}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City not found');
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}