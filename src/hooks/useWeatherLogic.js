import { useHistory } from "./useHistory";
import { useWeatherSearch } from "./useWeatherSearch";

export const useWeatherLogic = () => {
    
	const { clearHistory, removeHistory, writeHistory, ...history } = useHistory();
	const search = useWeatherSearch(writeHistory);
	
    return { ...search, ...history, clearHistory, removeHistory };
}