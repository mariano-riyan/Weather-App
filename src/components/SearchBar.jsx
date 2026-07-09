import { useState } from "react";

import { Search, X } from "lucide-react";

import SearchHistory from "./SearchHistory";

function SearchBar({ value, onCityChange, onSearch, history, onXClick }) {

    const [showX, setShowX] = useState('opacity-0');
    
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
                        className="outline-none w-full"
                    />
                    
                    <X  className={`${showX}`} 
                        onClick={() => {
                            onXClick();
                            setShowX('opacity-0 cursor-default')
                        }}
                    />
                </div>
                <SearchHistory history={history} onCityClick={onCityChange} visibility={showX}/>
            </form>
        </div>
    );
}

export default SearchBar;