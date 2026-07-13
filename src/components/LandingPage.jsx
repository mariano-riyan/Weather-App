import SearchBar from './SearchBar';

const LandingPage = ({ value, onCityChange, onSearch, history, onXClick }) => {
    return (
        <div>
            <div>
                <h1>Weather</h1>
                <p>Beautifully minimal weather data, engineered for the modern web.</p>
            </div>
            <SearchBar 
                value={value}
                onCityChange={onCityChange}
                onSearch={onSearch}
                history={history}
                onXClick={onXClick}
            />

            <div>
                <h2>Features</h2>
                <p>to be added...</p>
            </div>
        </div>
    );
}
 
export default LandingPage;