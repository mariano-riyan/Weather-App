function ForecastItem({ forecast }) {

    const date = forecast?.dt_txt?.split(' ');
    const temp = forecast?.main?.temp?.toFixed() ?? '';
    const feelsLike = forecast?.main?.feels_like?.toFixed() ?? '';
    const icon = forecast?.weather[0]?.icon;
    const desc = forecast?.weather[0]?.description ?? 'Weather Icon'

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return ( 
        <div className="p-4 md:p-6 xl:p-8 bg-foreground/10 backdrop-blur-xl rounded-xl border border-white/20 md:min-w-50 place-items-center min-w-40">  
            
            <span>{date?.[0] ?? 'No Date'}</span>
            
            <img
                src={iconUrl} 
                alt={desc}
                className=""
            />

            <div className="flex flex-col">
                <span className="text-sm font-bold">{temp}° / {feelsLike}°</span>
                <span></span>
            </div>
        </div>
    );
}

export default ForecastItem;