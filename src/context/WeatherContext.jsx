import { useWeatherLogic } from "../hooks/useWeatherLogic";
import { createContext, useContext } from "react";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    
	const weatherLogic = useWeatherLogic();
    return (
        <WeatherContext.Provider value={weatherLogic}>
            {children}
        </WeatherContext.Provider>
    );
}

/* eslint-disable react-refresh/only-export-components */
export const useWeather = () => {
    return useContext(WeatherContext);
}