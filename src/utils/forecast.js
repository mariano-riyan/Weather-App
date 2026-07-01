export function getDailyForecasts(forecasts) {
    const dates = new Set();
    
    return forecasts.filter(forecast => {
        const date = forecast.dt_txt.split(' ')[0];

        if (dates.has(date)) {
            return;
        }
        return dates.add(date);
    })
}