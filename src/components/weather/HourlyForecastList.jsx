import { getHourlyForecasts } from "@/utils/forecast";
import HourlyForecastItem from "./HourlyForecastItem";
import { Card } from "@/components/ui/Card";

const HourlyForecastList = ({ forecasts, onLoading }) => {

    const hourlyForecast = getHourlyForecasts(forecasts);

    return (
        <Card className="px-2">

            <h5 className="text-xs font-bold px-2 xl:px-5">24-HOUR FORECAST <em>3/hrs</em></h5>

            <div className="flex p-1 hide-scrollbar overflow-x-auto gap-3 lg:gap-4">
                {hourlyForecast
                    .map((forecast) => (
                            <HourlyForecastItem 
                                key={forecast.dt} 
                                forecast={forecast}
                                onLoading={onLoading}
                            />
                    )
                )}
            </div>
        </Card>
    );
}
 
export default HourlyForecastList;