function WeatherCard({ weather, tempUnit }) {

    const unit = tempUnit === 'imperial' ? 'F' : 'C';
    const name = weather?.name ?? '';
    const country = weather?.sys?.country ?? '';
    const speed = weather?.wind?.speed;
    const icon = weather?.weather?.[0]?.icon;
    const description = weather?.weather?.[0]?.description ?? '';
    const temp = weather?.main?.temp;
    const feelsLike = weather?.main?.feels_like;
    const humidity = weather?.main?.humidity;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return ( 
        <div className="my-4 space-y-16">
            <div className="min-h-[50vh] grid place-items-center md:justify-start">
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

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

            </div>
        </div>
    );
}

export default WeatherCard;