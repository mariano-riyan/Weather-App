const SearchHistory = ({ history, onCityClick, visibility }) => {

    if (!history || history.length === 0) return null;

    return ( 
        <div className={`${visibility} absolute backdrop-blur-sm border-2 rounded-2xl w-full overflow-hidden transition-opacity duration-300`}>
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