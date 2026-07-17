# Functional & Non-Functional Requirements

## 1. Functional Requirements (Features)
- [X] `[FR-01]` **City Search:** The application shall provide a search bar allowing users to enter a city name to retrieve weather data.

- [X] `[FR-02]` **Current Weather Display:** The application shall display the current temperature, weather conditions *(e.g., Sunny, Rainy)*, and key meteorological elements *(wind speed, humidity, clouds, rain precipitation, visibility)*.

- [X] `[FR-03]` **5-Day Forecast:** The application shall provide a 5-day weather forecast, showing the expected temperature range and conditions for each day.

- [X] `[FR-04]` **Unit Toggle:** The application shall provide a UI element to allow users to toggle between Celsius (°C) and Fahrenheit (°F) units, with the choice persisting during the session.

- [ ] `[FR-05]` **Error Handling:** The application shall display a user-friendly error message if a city is not found or if the API service is unavailable.

- [X] `[FR-06]` **Search History:** The application shall display the search history when the search bar is clicked.

- [ ] `[FR-07]` **Theme Toggle:** The application shall provide a UI element that allow users to toggle the theme *(Light & Dark)*.



## 2. Non-Functional Requirements
- `[NFR-01]` **Performance:** The application should load the initial dashboard in under 1.5 seconds under a standard 4G/LTE network connection.

- `[NFR-02]` **Responsiveness:** The user interface must be fully responsive, providing a seamless experience across desktop, tablet, and mobile device screen sizes.

- `[NFR-03]` **Accessibility:** The interface shall meet basic accessibility standards, ensuring sufficient contrast ratios between text and background colors.

- `[NFR-04]` **Reliability:** The application must cache API results locally (e.g., in localStorage or server-side cache) for a short duration to ensure functionality during intermittent network connectivity.

- `[NFR-05]` **Security:** No sensitive API credentials (e.g., weather API keys) shall be exposed in the client-side code; all third-party API interactions must be handled via secure server-side logic.


## 3. User Stories
- [US-01] Daily Planning: "As a commuter, I want to quickly check the current weather in my city so that I can decide how to dress and prepare for my travel."

- [US-02] Weekly Planning: "As a casual user, I want to view a 5-day forecast so that I can plan my outdoor activities for the upcoming weekend."

- [US-03] Unit Customization: "As a user with a regional preference, I want to toggle between Celsius and Fahrenheit so that the temperature data is displayed in a format I understand."

- [US-04] Error Recovery: "As a first-time visitor, I want to receive clear feedback if I mistype a city name so that I know why the app isn't showing the information I requested."