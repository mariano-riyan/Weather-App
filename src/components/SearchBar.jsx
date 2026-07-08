import { Search, X } from "lucide-react";
import { useState } from "react";

function SearchBar({ value, onCityChange, onSearch, onShowHistory }) {

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
                        onChange={onCityChange}
                        onFocus={onShowHistory, () => {setShowX('opacity-100')}}
                        onBlur={onShowHistory, () => {setShowX('opacity-0')}}
                        className="outline-none w-full"
                    />
                    
                    <X id="btn" className={showX} onClick={(() => {setShowX('opacity-0')})}/>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;