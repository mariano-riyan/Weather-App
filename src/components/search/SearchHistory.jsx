const SearchHistory = ({ history, onCityClick }) => {

    if (!history || history.length === 0) return null;

    return ( 
        <div className="absolute top-full left-0 mt-1 z-10 w-full backdrop-blur-sm border-2 rounded-2xl overflow-hidden">
            {history.map(city => (
                <button 
                    type="button"
                    key={city} 
                    value={city}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={onCityClick}
                    className="capitalize block py-1.5 hover:bg-accent w-full text-start active:bg-accent px-4">
                    {city}
                </button>
            ))}
        </div>
    );
}
 
export default SearchHistory;