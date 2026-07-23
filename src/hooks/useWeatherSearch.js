import { useState } from 'react';
import { getCachedWeather, setCachedWeather } from '../services/cacheService';
import { fetchForecastData, fetchWeatherData } from '../services/weatherApi';

export const useWeatherSearch = (writeHistory) => {
	
	const [unit, setUnit] = useState('metric');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [lastSearchedCity, setLastSearchedCity] = useState(null);
	const [isPending, setIsPending] = useState(false);


    const toggleUnit = (newUnit) => {
        setUnit(newUnit);
    }

    const handleUnit = async () => {
        const newUnit = unit === 'metric' ? 'imperial' : 'metric';
        if (weatherData) {
            const success = await handleSearch(lastSearchedCity, newUnit);
            if (success) {
                toggleUnit(newUnit);
            }
        } else {
            toggleUnit(newUnit);
        }
    }

    const handleSearch = async (searchCity, overrideUnit) => {

		if (!searchCity || !searchCity.trim() || !unit.trim()) return false;

		const effectiveUnit = overrideUnit ?? unit;

		const cacheKey = `weather_${searchCity}_${effectiveUnit}`;
		const cached = getCachedWeather(cacheKey);

		if (cached) {
			setWeatherData(cached?.data?.weather);
			setForecastData(cached?.data?.forecast);
			setLastSearchedCity(searchCity);

			writeHistory(searchCity);
			setError(null);
			return true;
		}

		setIsPending(true);
		setIsLoading(true);
		setError(null);

		try {
			const [weather, forecast] = await Promise.all([
				fetchWeatherData(searchCity, effectiveUnit),
				fetchForecastData(searchCity, effectiveUnit)
			]);
			
			setWeatherData(weather);
			setForecastData(forecast);
			setLastSearchedCity(searchCity);

			setCachedWeather(cacheKey, weather, forecast);
			writeHistory(searchCity);
			return true;
		} catch (error) {
			setError(error.message);
			return false;
		} finally {
			setIsPending(false);
			setTimeout(() => setIsLoading(true), 800);
		}
	}

    return{ unit, weatherData, forecastData, isLoading, error, lastSearchedCity, isPending, handleUnit, handleSearch };
}