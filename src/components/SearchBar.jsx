import { useState } from "react";

import SearchHistory from "./SearchHistory";

import { Search, X } from "lucide-react";

function SearchBar({ value, onCityChange, onSearch, history }) {

    const [showHistory, setShowHistory] = useState(false);

    return ( 
        <div>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch();
                }}
            >
                <div className="rounded-full bg-foreground/50 p-2 flex place-self-center md:place-self-start group">
                    <Search className="inline-block mx-4" />
                    <input 
                        type="text"
                        placeholder="Search City..."
                        aria-label="City"
                        value={value}
                        onChange={onCityChange}
                        onFocus={() => setShowHistory(true)}
                        className="outline-none w-full"
                    />
                    {showHistory && <button onClick={() => setShowHistory(false)}><X /></button>}
                </div>
            </form>

            {showHistory && <SearchHistory history={history} /> }
        </div>
    );
}

export default SearchBar;