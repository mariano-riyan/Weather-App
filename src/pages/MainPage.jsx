
import EmptyState from "@/components/empty-state/EmptyState";
import WeatherCard from "@/components/weather/WeatherCard";
import ForecastList from "@/components/weather/ForecastList";
import HourlyForecastList from "@/components/weather/HourlyForecastList";

import { useWeather } from "@/context/WeatherContext";
import Header from "@/components/layout/Header";

const MainPage = () => {

    const {
		unit,
		weatherData,
		forecastData,
		isLoading,
	} = useWeather();

    return (
        <div className="px-4 md:px-8">

			<Header searchVisibility={weatherData} />

			{!weatherData &&
				<EmptyState />
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