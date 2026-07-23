import { Card } from "@/components/ui/Card";
import { getDailyForecasts } from "@/utils/forecast";
import ForecastItem from "./ForecastItem";

const ForecastList = ({ forecasts, onLoading }) => {

    if (!forecasts?.length) return null;

    const dailyForecast = getDailyForecasts(forecasts);

    return (
        <Card className="px-2">

            <h5 className="text-xs font-bold px-2 xl:px-5">WEEKLY OUTLOOK</h5>

            <div className="flex p-1 hide-scrollbar overflow-x-auto gap-3 lg:gap-4">
                {dailyForecast
                    .map((forecast) => (
                            <ForecastItem 
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
 
export default ForecastList;