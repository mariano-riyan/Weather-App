import { getDailyForecasts } from "../utils/forecast";

import ForecastItem from "./ForecastItem";

const ForecastList = ({ forecasts }) => {

    if (!forecasts?.length) return null;

    const dailyForecast = getDailyForecasts(forecasts);

    return (
        <div className="flex overflow-scroll gap-4 my-8">

            {dailyForecast
                .map((forecast) => (
                        <ForecastItem key={forecast.dt} forecast={forecast}/>
                )
            )}
        </div>
    );
}
 
export default ForecastList;