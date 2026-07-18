import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import ForecastList from "./components/ForecastList";
import UnitToggle from "./components/UnitToggle";
import { useWeather } from "./context/WeatherContext";
import LandingPage from "./components/LandingPage";
import HourlyForecastList from "#components/HourlyForecastList";

function App() {

		const {
			unit,
			weatherData,
			forecastData,
			isLoading,
			error
		} = useWeather();

	return (
		<div className="p-4 md:p-8">

			
			<UnitToggle />

			{!weatherData &&
				<LandingPage />
			}

				<SearchBar />

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
