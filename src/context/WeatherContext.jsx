import { createContext, useContext, useState } from "react";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    const [unit, setUnit] = useState('metric');

    const toggleUnit = (newUnit) => {
        setUnit(newUnit);
    }

    return (
        <WeatherContext.Provider value={{unit, toggleUnit}}>
            {children}
        </WeatherContext.Provider>
    );
}

export const useWeather = () => {
    return useContext(WeatherContext);
}