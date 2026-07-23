import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatWeekday } from "@/utils/forecast";

function ForecastItem({ forecast, onLoading }) {

    const temp = forecast?.main?.temp?.toFixed() ?? '';
    const icon = forecast?.weather[0]?.icon;
    const desc = forecast?.weather[0]?.description ?? 'Weather Icon'

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (     
        onLoading
            ? (
            <div className="space-y-2 p-4 md:p-6 xl:p-8 bg-foreground/10 backdrop-blur-xl rounded-xl border border-white/20 md:min-w-50 text-center place-items-center min-w-40">  
                <Skeleton className="w-20 h-6" />

                <Skeleton className="h-20 w-20" />
                
                <div className="flex flex-col">
                    <Skeleton className="text-sm font-bold w-20 h-6" />
                </div>
            </div>
            )
            : (
            <Card className="min-w-fit grow rounded-xl">
                <CardTitle className="text-center font-bold opacity-50 text-xs lg:text-sm">
                    {formatWeekday(forecast.dt_txt)}
                </CardTitle>

                <CardContent className="place-self-center">
                    <img
                        src={iconUrl} 
                        alt={desc}
                        className="w-8 lg:w-10"
                    />
                </CardContent>

                <CardContent>
                    <p className="font-bold text-center text-base lg:text-lg">{temp}°</p>
                </CardContent>    
            </Card>
            )
            
    );
}

export default ForecastItem;