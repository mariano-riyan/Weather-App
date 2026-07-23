import { Skeleton } from "#components/ui/skeleton";
import { formatWeekday } from "@/utils/forecast";

function ForecastItem({ forecast, onLoading }) {

    const temp = forecast?.main?.temp?.toFixed() ?? '';
    const feelsLike = forecast?.main?.feels_like?.toFixed() ?? '';
    const icon = forecast?.weather[0]?.icon;
    const desc = forecast?.weather[0]?.description ?? 'Weather Icon'

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return ( 
        <div>
            {onLoading
                ?
                <div className="space-y-2 p-4 md:p-6 xl:p-8 bg-foreground/10 backdrop-blur-xl rounded-xl border border-white/20 md:min-w-50 text-center place-items-center min-w-40">  

                    <Skeleton className="w-20 h-6" />

                    <Skeleton className="h-20 w-20" />

                    <div className="flex flex-col">
                        <Skeleton className="text-sm font-bold w-20 h-6" />
                    </div>
                </div>
                :
                <div className="p-4 md:p-6 xl:p-8 bg-foreground/10 backdrop-blur-xl rounded-xl border border-white/20 md:min-w-50 text-center place-items-center min-w-40">  

                    <span className="font-bold">
                        {formatWeekday(forecast.dt_txt)}
                    </span>

                    <img
                        src={iconUrl} 
                        alt={desc}
                        className=""
                    />

                    <div className="flex flex-col">
                        <span className="text-sm font-bold">{temp}° / {feelsLike}°</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default ForecastItem;