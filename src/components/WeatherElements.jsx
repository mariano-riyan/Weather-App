import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import { Progress } from "./ui/progress"
import { Wind, Droplets } from "lucide-react";

const WeatherElements = ({speed, humidity, unit}) => {
    return (
        <div className="grid gap-4 min-w-xs lg:w-80 xl:w-110">
            <Card>
                <CardHeader className="space-y-4">
                    <CardTitle className="font-semibold flex gap-2 md:flex-row-reverse md:justify-between text-xs">
                        <Wind size={15} />
                        WIND SPEED
                    </CardTitle>
                    <CardDescription className="text-4xl">
                        {speed}
                        <span className="text-sm">{unit}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="space-y-4">
                    <CardTitle className="font-semibold flex gap-2 md:flex-row-reverse md:justify-between text-xs">
                        <Droplets size={15} className="inline-block mr-2" />
                        HUMIDITY
                    </CardTitle>

                    <CardDescription className="text-4xl">
                        {humidity}
                        <span className="text-sm">%</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={humidity} />
                </CardContent>
            </Card>
        </div>
    );
}
 
export default WeatherElements;