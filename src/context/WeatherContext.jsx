import { createContext, useContext, useState, useEffect } from "react";

import { getCachedWeather, setCachedWeather } from "../services/cacheService";
import { fetchForecastData, fetchWeatherData } from "../services/weatherApi";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    const [unit, setUnit] = useState('metric');
	const [weatherData, setWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [history, setHistory] = useState(() => {
		try {
			const storedHistory = JSON.parse(localStorage.getItem('history'));
			return Array.isArray(storedHistory) ? storedHistory : [];
		} catch {
			return [];
		}
	});
	const [lastSearchedCity, setLastSearchedCity] = useState(null);

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

	useEffect(() => {
		try {
			localStorage.setItem('history', JSON.stringify(history));
		} catch (error) {
			console.error('Local Storage is not available: ', error);
		}
	}, [history]);

	const writeHistory = (cityToWrite) => {
		setHistory(prevHistory => {
			const filteredHistory = prevHistory.filter(data => data.toLowerCase().trim() !== cityToWrite.toLowerCase().trim());
			const limitedHistory = [cityToWrite, ...filteredHistory].slice(0, 5);
			return limitedHistory;
		});
	}

    const toggleUnit = (newUnit) => {
        setUnit(newUnit);
    }

	const handleSearch = async (searchCity, overrideUnit) => {

		if (!searchCity || !searchCity.trim() || !unit.trim()) return false;

		const effectiveUnit = overrideUnit ?? unit;

		const cacheKey = `weather_${searchCity}_${effectiveUnit}`;
		const cached = getCachedWeather(cacheKey);

		if (cached) {
			setWeatherData(cached.data.weather);
			setForecastData(cached.data.forecast);
			setLastSearchedCity(searchCity);

			writeHistory(searchCity);
			setError(null);
			return true;
		}

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
			setWeatherData(null);
			setForecastData(null);
			return false;
		} finally {
			setIsLoading(false);
		}
	}

    return (
        <WeatherContext.Provider value={{
			unit,
			toggleUnit,
			handleUnit,
			handleSearch,
			weatherData,
			forecastData,
			isLoading,
			error,
			history
			}}>
            {children}
        </WeatherContext.Provider>
    );
}

/* eslint-disable react-refresh/only-export-components */
export const useWeather = () => {
    return useContext(WeatherContext);
}