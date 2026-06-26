import Card from "./ui/Card";

function WeatherCard({ weather }) {

    const { icon, description } = weather.weather[0];
    const iconUrl = `https://openweathermap.org/payload/api/media/file/${icon}.png`;

    return ( 
        <div className="my-4 space-y-8">
            <div className="">
                <h1 className="text-3xl text-center font-bold">{weather.name}, {weather.sys.country}</h1>

                <div className="space-y-6 md:flex">
                    <img 
                        src={iconUrl}
                        alt={description}
                        className="block mx-auto"
                    />

                    <div className="text-center space-y-1 md:text-start">
                        <p className="text-6xl">{weather.main.temp.toFixed()}°C</p>
                        <p className="text-xs">Feels like {weather.main.temp.toFixed()}°C</p>
                        <p>{weather.weather[0].description.toUpperCase()}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Card name={"HUMIDITY"} value={weather.main.humidity} unit={'%'}/>
                <Card name={"WIND SPEED"} value={weather.wind.speed} unit={'km/h'}/>
            </div>
        </div>
    );
}

export default WeatherCard;