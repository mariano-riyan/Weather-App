function SearchBar({ city, onCityChange, onSearch }) {
    return ( 
        <div>
            <input 
                type="text"
                value={city}
                onChange={onCityChange}
            />

            <button onClick={onSearch}>search</button>
        </div>
    );
}

export default SearchBar;