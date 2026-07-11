const SearchHistory = ({ history, onCityClick, visibility }) => {

    return ( 
        <div className={`${visibility} absolute`}>
            {history.map(city => (
                <button 
                    type="button"
                    key={city} 
                    value={city}
                    onClick={onCityClick}
                    className="capitalize block">
                    {city}
                </button>
            ))}
        </div>
    );
}
 
export default SearchHistory;