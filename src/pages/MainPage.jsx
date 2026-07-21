import ToggleLayout from "@/components/toggles/index";
import EmptyState from "@/components/empty-state/EmptyState";
import SearchBar from "@/components/search/SearchBar";
import WeatherCard from "@/components/weather/WeatherCard";
import ForecastList from "@/components/weather/ForecastList";
import HourlyForecastList from "@/components/weather/HourlyForecastList";

import { useWeather } from "@/context/WeatherContext";

const MainPage = () => {

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
				<EmptyState />
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
    );
}
 
export default MainPage;