import { useEffect, useState } from "react"

import { fetchWeatherData, fetchForecastData } from "./services/weatherApi";

import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import ForecastList from "./components/ForecastList";
import UnitToggle from "./components/UnitToggle";
import { useWeather } from "./context/WeatherContext";
import LandingPage from "./components/LandingPage";
import HourlyForecastList from "#components/HourlyForecastList";
import { getCachedWeather, setCachedWeather } from "./services/cacheService";

function App() {

	const [city, setCity] = useState('');
	const [weatherData, setWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [history, setHistory] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem('history')) || []
		} catch {
			return [];
		}
	});
	const [lastSearchedCity, setLastSearchedCity] = useState(null);
	
	const { unit, toggleUnit } = useWeather();

	const handleUnit = () => {
		const newUnit = unit === 'metric' ? 'imperial' : 'metric';
		toggleUnit(newUnit);
		if (weatherData) {
			handleSearch(lastSearchedCity, newUnit).catch(() => {
				toggleUnit(unit)
			});
		}
	}

	const handleClear = () => {
		setCity('');
	}

	const handleInputChange = (e) => {
		setCity(e.target.value);
	}
	
	const writeHistory = (cityToWrite) => {

		setHistory(prevHistory => {
			const filteredHistory = prevHistory.filter(data => data.toLowerCase().trim() !== cityToWrite.toLowerCase().trim());
			const limitedHistory = [cityToWrite, ...filteredHistory].slice(0, 5);
			return limitedHistory;
		});
	}

	useEffect(() => {
		localStorage.setItem('history', JSON.stringify(history));
	}, [history]);

	const handleSearch = async (searchCity, overrideUnit) => {
		const cityToSearch = searchCity ?? city;
		const effectiveUnit = overrideUnit ?? unit;

		if (!cityToSearch.trim()) return;

		const cacheKey = `weather_${cityToSearch}_${effectiveUnit}`;
		const cached = getCachedWeather(cacheKey);

		if (cached) {
			setWeatherData(cached.data.weather);
			setForecastData(cached.data.forecast);
			setLastSearchedCity(cityToSearch);

			setCity('');
			writeHistory(cityToSearch);
			setError(null);
			return;
		}

		setIsLoading(true);
		setError(null);

		try {
			const [weather, forecast] = await Promise.all([
				fetchWeatherData(cityToSearch, effectiveUnit),
				fetchForecastData(cityToSearch, effectiveUnit)
			]);
			
			setWeatherData(weather);
			setForecastData(forecast);
			setLastSearchedCity(cityToSearch);

			setCachedWeather(cacheKey, weather, forecast);
			setCity('');
			writeHistory(cityToSearch);
		} catch (error) {
			setError(error.message);
			setWeatherData(null);
			setForecastData(null);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="p-4 md:p-8">

			
			<UnitToggle 
				onToggle={handleUnit}
				activeUnit={unit}
			/>

			{!weatherData &&
				<LandingPage 
					value={city} 
					onCityChange={handleInputChange} 
					onSearch={handleSearch}
					history={history}
					onClear={handleClear}
				/>
			}

			{weatherData && 
				<SearchBar 
					value={city} 
					onCityChange={handleInputChange} 
					onSearch={handleSearch}
					history={history}
					onClear={handleClear}
				/>
			}

			{isLoading && 
				<p>Loading...</p>
			}

			{error && 
				<p>{error}</p>
			}

			{weatherData &&
				<WeatherCard weather={weatherData} tempUnit={unit} />
			}

			{forecastData && 
				<div>
					<ForecastList forecasts={forecastData.list}/>
					<HourlyForecastList forecasts={forecastData.list} />
				</div>
			}
			
		</div>
	)
}

export default App
