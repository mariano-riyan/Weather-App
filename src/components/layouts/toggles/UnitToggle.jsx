import { Button } from "@/components/ui/button";
import { useWeather } from "@/context/WeatherContext";


const UnitToggle = () => {

    const { handleUnit, unit } = useWeather();

    return (
        <Button
            variant="secondary"
            className="px-4 py-2 w-24 gap-4 flex justify-around cursor-pointer relative place-items-center"
            onClick={handleUnit}
            aria-label="Toggle temperature unit"
        >
            <div className={`${unit === 'metric' ? 'font-semibold text-primary-foreground' : ''} z-2`}>
                °C
            </div>

            <div className={`${unit === 'imperial' ? 'font-semibold text-primary-foreground' : ''} z-2`}>
                °F
            </div>

            <span className={`absolute bg-primary h-[80%] w-[40%] rounded-full ${unit === 'metric' ? 'left-3' : 'translate-x-5'} duration-300 ease-in-out shadow-sm`}></span>
        </Button>
    );
}

export default UnitToggle;