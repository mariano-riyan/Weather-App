
import EmptyState from "@/components/empty-state/EmptyState";


import { useWeather } from "@/context/WeatherContext";
import Header from "@/components/layout/Header";
import WeatherContents from "@/components/layout/WeatherContents";

const MainPage = () => {

    const { weatherData } = useWeather();

    return (
        <div className="px-4 md:px-8 mb-4">

			<Header searchVisibility={weatherData} />

			{!weatherData &&
				<EmptyState />
			}

			<WeatherContents />
			
		</div>
    );
}
 
export default MainPage;