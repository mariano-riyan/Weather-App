const SearchHistory = ({ history }) => {

    return ( 
        <div className="">
            {history.map(city => (
                <div key={history.indexOf(city)} className="capitalize">
                    {city}
                </div>
            ))}
        </div>
    );
}
 
export default SearchHistory;