const SearchHistory = ({ history }) => {

    return ( 
        <form >
            {history.map(city => (
                <button 
                    type="submit"
                    key={history.indexOf(city)} 
                    value={city}
                    className="capitalize block">
                    {city}
                </button>
            ))}
        </form>
    );
}
 
export default SearchHistory;