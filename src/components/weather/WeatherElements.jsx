import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Progress } from "@/components/ui/progress"
import { Wind, Droplets, Eye, CloudHail, Cloudy } from "lucide-react";

const WeatherElements = ({weather, unit}) => {

    const elements = {
        "humidity": {
            "id": 2,
            "value": weather?.main?.humidity,
            "unit": '%',
            "icon": Droplets,
            "className": 'col-span-2'
        },
        "wind": {
            "id": 1,
            "value": weather?.wind?.speed,
            "unit": unit,
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
        }
    }

    return (
        <div className="grid grid-cols-2 gap-5 min-w-xs lg:w-80 xl:w-110">
            {Object.entries(elements).map(([key, value]) => {

                const Icon = value.icon;

                return (
                    <Card key={value.id} className={value.className}>
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
                    </Card>
                )
            })}
        </div>
    );
}
 
export default WeatherElements;