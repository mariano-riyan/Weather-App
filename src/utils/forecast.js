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

export function getHourlyForecasts(forecasts) {
    const times = new Set();

    return forecasts.filter(forecast => {
        const time = forecast.dt_txt.split(' ')[1];

        if (times.has(time) ) {
            return;
        }

        return times.add(time);
    })
}

export function formatTime(date) {
    const time = new Date(date).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    return time;
}

export function formatWeekday(date) {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = new Date(date).getDay();

    return days[day];
}