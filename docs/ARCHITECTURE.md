# Technical Architecture

## 1. Tech Stack
* **Framework:** Vite + React

* **Frontend:** Tailwind CSS v4, Shadcn UI

* **API Service:** OpenWeatherMap API

* **Storage:** Browser LocalStorage


## 2. Data Flow
* **API Integration:** The application interacts with the OpenWeatherMap API using `fetch`. All requests will be structured to handle loading, success, and error states.

* **Data Lifecycle:**

    * **Request:** User submits a city name.

    * **Cache Check:** The application checks `localStorage` for cached data for that specific city (within a valid timeframe, e.g., 30 minutes).

    * **API Fetch** (if necessary): If no cache exists, a GET request is sent to the OpenWeatherMap API.

    * **State Update:** The response is stored in React state for immediate UI rendering and simultaneously saved to `localStorage` for future use.

* **Security:** API key is stored in .env.


## 3. Component Structure
The application follows a hierarchical component-based architecture to ensure modularity and reusability.

* `App.jsx:` The root component; handles global state *(e.g., unit preference, search history)* and layout logic.

* `SearchBar.jsx:` A controlled component that manages the user input and triggers API fetch functions.

* `WeatherCard.jsx:` The main display component; receives weather data as props and renders the current conditions.

* `ForecastList.jsx:` Iterates through the 5-day forecast data to render individual forecast items.

* `UnitToggle.jsx:` A small, specialized component that allows the user to switch between Metric and Imperial units, updating the global state in `App.jsx`.
