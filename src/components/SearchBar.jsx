function SearchBar({ city, onCityChange, onSearch }) {
    return ( 
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                onSearch();
            }}
        >
            <input 
                type="text"
                aria-label="City"
                value={city}
                onChange={onCityChange}
            />

            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;