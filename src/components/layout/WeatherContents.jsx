import WeatherElements from "@/components/weather/WeatherElements";
import ForecastList from "@/components/weather/ForecastList";
import HourlyForecastList from "@/components/weather/HourlyForecastList";
import WeatherCard from "@/components/weather/WeatherCard";
import { useWeather } from "@/context/WeatherContext";

const WeatherContents = () => {

    const {
        unit,
        weatherData,
        forecastData,
		isLoading,
		isPending
    } = useWeather();

    return (
			( isPending || forecastData && weatherData) && (
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col col-span-1 lg:col-span-2">
                        <WeatherCard weather={weatherData} tempUnit={unit} onLoading={isLoading} />
                        <HourlyForecastList forecasts={forecastData?.list} onLoading={isLoading} />
                        <ForecastList forecasts={forecastData?.list} onLoading={isLoading}/>
                    </div>
                    <div>
                        <WeatherElements weather={weatherData} unit={unit} onLoading={isLoading} />
                    </div>
                </div>
            )
    );
}
 
export default WeatherContents;