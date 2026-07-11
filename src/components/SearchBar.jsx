import { useState } from "react";

import { Search, X } from "lucide-react";

import SearchHistory from "./SearchHistory";

function SearchBar({ value, onCityChange, onSearch, history, onXClick }) {

    const [showX, setShowX] = useState('opacity-0');

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            onSearch();
            e.target.blur();
            setShowX('opacity-0 cursor-default');
        }
    }

    const handleHistoryClick = (e) => {
        onCityChange(e);
        onSearch(e.target.value);
    }
    
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
                        style={{ textTransform: 'capitalize' }}
                        onChange={onCityChange}
                        onFocus={() => {setShowX('opacity-100 cursor-pointer')}}
                        onBlur={() => {setShowX('opacity-0 cursor-default')}}
                        onKeyDown={handleEnter}
                        className="outline-none w-full"
                    />
                    
                    <button
                        type="button"
                        aria-label="Clear City"
                        className={`${showX} bg-transparent border-0 p-0`}
                        onClick={() => {
                            onXClick();
                            setShowX('opacity-0 cursor-default')
                        }}
                    >
                        <X />
                    </button>
                </div>
                <SearchHistory history={history} onCityClick={handleHistoryClick} visibility={showX}/>
            </form>
        </div>
    );
}

export default SearchBar;