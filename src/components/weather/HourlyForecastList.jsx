import { getHourlyForecasts } from "@/utils/forecast";
import HourlyForecastItem from "./HourlyForecastItem";

const HourlyForecastList = ({ forecasts }) => {

    const hourlyForecast = getHourlyForecasts(forecasts);

    return (
        <div className="my-8">

            <h5 className="text-xs font-bold p-4">24-HOUR FORECAST <em>3/hrs</em></h5>

            <div className="flex overflow-x-auto gap-4">
                {hourlyForecast
                    .map((forecast) => (
                            <HourlyForecastItem 
                                key={forecast.dt} 
                                forecast={forecast}
                            />
                    )
                )}
            </div>
        </div>
    );
}
 
export default HourlyForecastList;