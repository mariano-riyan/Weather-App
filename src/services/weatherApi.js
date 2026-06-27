const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const RAW_BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL;
const BASE_URL = RAW_BASE_URL?.endsWith('/') ? RAW_BASE_URL : `${RAW_BASE_URL}/`;

export const fetchWeatherData = async (city, units = 'metric') => {
    const url = `${BASE_URL}weather?q=${city}&units=${units}&appid=${API_KEY}`;

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

export const fetchForecastData = async (city, units = 'metric') => {
    const url = `${BASE_URL}forecast?q=${city}&units=${units}&appid=${API_KEY}`;

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