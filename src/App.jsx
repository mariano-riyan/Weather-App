import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import ForecastList from "./components/ForecastList";
import { useWeather } from "./context/WeatherContext";
import LandingPage from "./components/LandingPage";
import HourlyForecastList from "#components/HourlyForecastList";
import ToggleLayout from "./components/layouts/toggles/index";

function App() {

		const {
			unit,
			weatherData,
			forecastData,
			isLoading,
		} = useWeather();

	return (
		<div className="p-4 md:p-8">

			<ToggleLayout />

			{!weatherData &&
				<LandingPage />
			}

			{weatherData &&
				<SearchBar />
			}

			{isLoading && 
				<p>Loading...</p>
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
