function WeatherCard({ weather }) {
    return ( 
        <div>
            <h1>{weather.name}, {weather.sys.country}</h1>
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
            <p>{(weather.main.temp).toFixed()}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>hello</p>
        </div>
    );
}

export default WeatherCard;