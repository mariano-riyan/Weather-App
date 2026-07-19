import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { ThemeProvider } from './context/ThemeContext.jsx';
import { WeatherProvider } from './context/WeatherContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <WeatherProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </WeatherProvider>
    </StrictMode>,
)