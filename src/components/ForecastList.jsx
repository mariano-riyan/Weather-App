import ForecastItem from "./ForecastItem";

const ForecastList = ({ forecasts }) => {

    if (!forecasts?.length) return null;

    return (
        <div className="flex overflow-scroll gap-4 my-8">

            {forecasts
                .slice(0, 5)
                .map((forecast) => (
                        <ForecastItem key={forecast.dt} forecast={forecast}/>
                )
            )}
        </div>
    );
}
 
export default ForecastList;