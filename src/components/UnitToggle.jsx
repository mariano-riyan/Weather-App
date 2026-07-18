import { useWeather } from "../context/WeatherContext";


const UnitToggle = () => {

    const { handleUnit, unit } = useWeather();

    return (
        <button
            className="p-1 rounded-full flex gap-4 cursor-pointer"
            onClick={handleUnit}
            aria-label="Toggle temperature unit"
        >
            <div className={unit === 'metric' ? 'font-bold' : ''}>
                °C
            </div>

            <div className={unit === 'imperial' ? 'font-bold' : ''}>
                °F
            </div>
        </button>
    );
}

export default UnitToggle;