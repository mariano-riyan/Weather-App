import { Button } from "@/components/ui/button";
import { useWeather } from "@/context/WeatherContext";


const UnitToggle = () => {

    const { handleUnit, unit } = useWeather();

    return (
        <Button
            variant="secondary"
            className="px-4 py-2 h-full w-24 gap-4 flex justify-around cursor-pointer relative"
            onClick={handleUnit}
            aria-label="Toggle temperature unit"
        >
            <div className={`${unit === 'metric' ? 'font-semibold text-primary-foreground' : ''} z-2`}>
                °C
            </div>

            <div className={`${unit === 'imperial' ? 'font-semibold text-primary-foreground' : ''} z-2`}>
                °F
            </div>

            <span className={`absolute bg-primary h-[80%] w-[40%] rounded-full ${unit === 'metric' ? 'left-2.5' : 'translate-x-5.5'} duration-300 ease-initial shadow-sm`}></span>
        </Button>
    );
}

export default UnitToggle;