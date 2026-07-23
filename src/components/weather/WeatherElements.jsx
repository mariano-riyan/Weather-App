import { Skeleton } from "#components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Progress } from "@/components/ui/progress"
import { Wind, Droplets, Eye, CloudHail, Cloudy } from "lucide-react";

const WeatherElements = ({ weather, unit, onLoading }) => {

    const windUnit = unit === 'imperial' ? 'mph' : 'm/s';

    const elements = {
        "wind": {
            "id": 1,
            "value": weather?.wind?.speed,
            "unit": windUnit,
            "icon": Wind,
        },
        "clouds": {
            "id": 4,
            "value": weather?.clouds?.all,
            "unit": '%',
            "icon": Cloudy,
        },
        "visibility": {
            "id": 3,
            "value": weather?.visibility  * 0.001,
            "unit": 'km',
            "icon": Eye,
        },
        "rain": {
            "id": 5,
            "value": weather?.rain?.['1h'] || 0,
            "unit": 'mm/h',
            "icon": CloudHail,
        },
        "humidity": {
            "id": 2,
            "value": weather?.main?.humidity,
            "unit": '%',
            "icon": Droplets,
            "className": 'col-span-2'
        }
    }

    return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 w-full lg:flex flex-col-reverse lg:max-w-sm justify-self-center">
            {Object.entries(elements).map(([key, value]) => {

                const Icon = value.icon;

                return (
                    <Card key={value.id} className={value.className}>
                        {onLoading
                            ?
                            <div className="space-y-4 mx-2">
                                <div className="flex gap-2 md:flex-row-reverse md:justify-between">
                                    <Skeleton className="inline-block mr-2 h-5 w-5 rounded-full" />
                                    <Skeleton className="w-25" />
                                </div>

                                <div className="flex gap-2 place-items-end">
                                    <Skeleton className="h-15 w-20" />
                                    <Skeleton className="w-8 h-5" />
                                </div>
                            </div>
                            :
                            <div>
                                <CardHeader className="space-y-4">
                                    <CardTitle className="uppercase font-semibold flex gap-2 md:flex-row-reverse md:justify-between text-xs">
                                        <Icon size={15} className="inline-block mr-2" />
                                        {key}
                                    </CardTitle>

                                    <CardDescription className="text-4xl">
                                        {value.value}
                                        <span className="text-sm">{value.unit}</span>
                                    </CardDescription>
                                </CardHeader>
                                
                                {key === 'humidity' &&
                                    <CardContent>
                                        <Progress value={value.value} />
                                    </CardContent>
                                }
                            </div>
                        }
                    </Card>
                )
            })}
        </div>
    );
}
 
export default WeatherElements;