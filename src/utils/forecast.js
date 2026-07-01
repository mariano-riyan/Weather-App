export function getDailyForecasts(forecasts) {
    return forecasts.filter(forecast => forecast.dt_txt.endsWith('12:00:00'));
}