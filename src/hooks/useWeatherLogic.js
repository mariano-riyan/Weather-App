import { useHistory } from "./useHistory";
import { useWeatherSearch } from "./useWeatherSearch";

export const useWeatherLogic = () => {
    
	const search = useWeatherSearch();
	const history = useHistory();
	
    return { ...search, ...history };
}