const SearchHistory = ({ history, onCityClick, visibility }) => {

    return ( 
        <div className={`${visibility} absolute bg-secondary/20 backdrop-blur-md border-2 rounded-2xl w-sm overflow-hidden transition-opacity duration-300`}>
            {history.map(city => (
                <button 
                    type="button"
                    key={city} 
                    value={city}
                    onClick={onCityClick}
                    className="capitalize block py-1.5 hover:bg-accent w-full text-start active:bg-accent px-4">
                    {city}
                </button>
            ))}
        </div>
    );
}
 
export default SearchHistory;