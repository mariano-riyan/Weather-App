export const getCachedWeather = (cache) => {

    if (!cache) return null;
    

    try {
        const item = sessionStorage.getItem(cache);
        if (!item) return null;

        const data = JSON.parse(item);
        const isExpired = Date.now() - data.timestamp > (10 * 60 * 1000);

        if (isExpired) {
            sessionStorage.removeItem(cache);
            return null;
        }

        return data;
    } catch {
        sessionStorage.removeItem(cache);
        return null;
    }
}

export const setCachedWeather = (cacheKey, weather, forecast) => {
    
    const cacheEntry = {
        timestamp: Date.now(),
        data: {
            weather: {...weather},
            forecast: {...forecast}
        }
    }

    try {
        sessionStorage.setItem(cacheKey, JSON.stringify(cacheEntry));
    } catch (error) {
        console.error("Failed to cache weather data:", error);
    }

    return;
}