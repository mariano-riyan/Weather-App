import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatWeekday } from "@/utils/forecast";

function ForecastItem({ forecast, onLoading }) {

    const temp = forecast?.main?.temp?.toFixed() ?? '';
    const icon = forecast?.weather?.[0].icon;
    const desc = forecast?.weather?.[0].description ?? 'Weather Icon'

    const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;

    return (     
        onLoading
            ? (
            <Card className="min-w-18 grow rounded-xl">
                <Skeleton className="w-10 h-5 mx-auto" />

                <Skeleton className="place-self-center h-10 w-10" />

                <Skeleton className="w-9 h-6 mx-auto" />    
            </Card>
            )
            : (
            <Card className="min-w-fit grow rounded-xl">
                <CardTitle className="text-center font-bold opacity-50 text-xs lg:text-sm">
                    {formatWeekday(forecast?.dt_txt)}
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