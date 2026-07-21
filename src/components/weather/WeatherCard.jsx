import WeatherElements from "./WeatherElements";

function WeatherCard({ weather, tempUnit }) {

    const unit = tempUnit === 'imperial' ? 'F' : 'C';
    const windUnit = tempUnit === 'imperial' ? 'mph' : 'm/s';
    const name = weather?.name ?? '';
    const country = weather?.sys?.country ?? '';
    const icon = weather?.weather?.[0]?.icon;
    const description = weather?.weather?.[0]?.description ?? '';
    const temp = weather?.main?.temp;
    const feelsLike = weather?.main?.feels_like;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return ( 
        <div className="my-4 flex gap-4 flex-col md:flex-row items-center">
            <div className="flex-1 min-h-[50vh] grid place-items-center md:justify-start">
                <h1 className="text-3xl font-bold text-center">{name}, {country}</h1>

                <div className="grid place-items-center md:flex md:gap-8">
                    <img 
                        src={iconUrl}
                        alt={description}
                        className=""
                    />

                    <div className="text-center space-y-1 md:text-start">
                        <p className="text-7xl">{temp.toFixed()}°{unit}</p>
                        <p className="text-sm">Feels like {feelsLike.toFixed()}°{unit}</p>
                        <p className="text-lg capitalize">{description}</p>
                    </div>
                </div>
            </div>

            <WeatherElements 
                weather={weather}
                unit={windUnit}
            />
        </div>
    );
}

export default WeatherCard;