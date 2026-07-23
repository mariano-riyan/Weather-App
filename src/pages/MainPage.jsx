
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
		isPending
	} = useWeather();

    return (
        <div className="px-4 md:px-8">

			<Header searchVisibility={weatherData} />

			{!weatherData &&
				<EmptyState />
			}

			{(isPending || weatherData) &&
				<WeatherCard weather={weatherData} tempUnit={unit} onLoading={isLoading} />
			}

			{( isPending || forecastData) && 
				<div>
					<ForecastList forecasts={forecastData?.list} onLoading={isLoading}/>
					<HourlyForecastList forecasts={forecastData?.list} onLoading={isLoading} />
				</div>
			}
			
		</div>
    );
}
 
export default MainPage;