import { useState } from "react"

import { fetchWeatherData, fetchForecastData } from "./services/weatherApi";

function App() {

	const [city, setCity] = useState('');
	const [weatherData, setWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleInputChange = (e) => {
		setCity(e.target.value);
	}

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
		<>
			<input 
				type="text"
				value={city}
				onChange={handleInputChange}
			/>

			<button onClick={handleSearch}>search</button>

			{isLoading && 
				<p>Loading...</p>
			}

			{error && 
				<p>{error}</p>
			}

			{weatherData && 
				<div>
					<h1>{weatherData.name}, {weatherData.sys.country}</h1>
					<p>{weatherData.weather[0].main}</p>
					<p>{weatherData.weather[0].description}</p>
					<p>{(weatherData.main.temp).toFixed()}°C</p>
					<p>Humidity: {weatherData.main.humidity}%</p>
				</div>
			}

			{forecastData && (
				<div>
					{forecastData.list.slice(0, 5).map(forecast => (
						<div key={forecast.dt}>
							<h1>{forecast.dt_txt}</h1>
							<p>Temperature: {forecast.main.temp}°C</p>
							<p>{forecast.main.humidity}%</p>
							<p>{forecast.weather[0].main}</p>
							<p>{forecast.weather[0].description}</p>
						</div>
					))}
				</div>
			)}
			
		</>
	)
}

export default App
