import { useEffect, useState } from "react"

import { fetchWeatherData, fetchForecastData } from "./services/weatherApi";

import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import ForecastList from "./components/ForecastList";

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
	const [showHistory, setShowHistory] = useState(false);

	const historyToggle = () => {
		setShowHistory(!showHistory);
	}

	const handleInputChange = (e) => {
		setCity(e.target.value);
	}
	
	const writeHistory = () => {

		setHistory(prevHistory => {
			const filteredHistory = prevHistory.filter(data => data.toLowerCase().trim() !== city.toLowerCase().trim());
			const limitedHistory = [city, ...filteredHistory].slice(0, 5);
			return limitedHistory;
		});
	}

	useEffect(() => {
		localStorage.setItem('history', JSON.stringify(history));
	}, [history]);

	const handleSearch = async () => {
		if (!city.trim()) {
			setError("Please Enter a City");
			return;
		}

		setIsLoading(true);
		setError(null);

		try {
			const [weather, forecast] = await Promise.all([
				fetchWeatherData(city),
				fetchForecastData(city)
			]);
			
			setWeatherData(weather);
			setForecastData(forecast);
			writeHistory()
			setCity('')
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
			
			<SearchBar 
				value={city} 
				onCityChange={handleInputChange} 
				onSearch={handleSearch} 
				history={history} 
				onShowHistory={historyToggle} 
			/>

			{isLoading && 
				<p>Loading...</p>
			}

			{error && 
				<p>{error}</p>
			}

			{weatherData &&
				<WeatherCard weather={weatherData} />
			}

			{forecastData && (
				<ForecastList forecasts={forecastData.list}/>
			)}
			
		</div>
	)
}

export default App
