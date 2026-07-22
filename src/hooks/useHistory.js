import { useState, useEffect } from "react";

export const useHistory = () => {

    
    const [history, setHistory] = useState(() => {
        try {
            const storedHistory = JSON.parse(localStorage.getItem('history'));
            return Array.isArray(storedHistory)
            ? storedHistory.filter(item => typeof item === 'string').slice(0, 5) 
            : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('history', JSON.stringify(history));
        } catch (error) {
            console.error('Local Storage is not available: ', error);
        }
    }, [history]);

	const writeHistory = (cityToWrite) => {
		setHistory(prevHistory => {
			const filteredHistory = prevHistory.filter(data => data.toLowerCase().trim() !== cityToWrite.toLowerCase().trim());
			const limitedHistory = [cityToWrite, ...filteredHistory].slice(0, 5);
			return limitedHistory;
		});
	}

    const clearHistory = () => {
        setHistory([]);
    }

    const removeHistory = (cityToRemove) => {
        setHistory(prevHistory => 
            prevHistory.filter(data => data.toLowerCase().trim() !== cityToRemove.toLowerCase().trim())
        )
    }

    return { history, writeHistory, clearHistory, removeHistory };
}
 