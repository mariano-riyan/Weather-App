import { getDailyForecasts } from "../utils/forecast";

import ForecastItem from "./ForecastItem";

const ForecastList = ({ forecasts }) => {

    if (!forecasts?.length) return null;

    const dailyForecast = getDailyForecasts(forecasts);

    return (
        <div className="my-8">

            <h5 className="text-xs font-bold p-4">WEEKLY OUTLOOK</h5>

            <div className="flex overflow-x-auto gap-4">
                {dailyForecast
                    .map((forecast) => (
                            <ForecastItem 
                                key={forecast.dt} 
                                forecast={forecast}
                            />
                    )
                )}
            </div>
        </div>
    );
}
 
export default ForecastList;