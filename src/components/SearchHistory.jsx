const SearchHistory = ({ history }) => {

    return ( 
        <div >
            {history.map(city => (
                <button 
                    type="submit"
                    key={city} 
                    className="capitalize block">
                    {city}
                </button>
            ))}
        </div>
    );
}
 
export default SearchHistory;