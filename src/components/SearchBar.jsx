import { useState } from "react";

import { Search } from "lucide-react";

import SearchHistory from "./SearchHistory";
import { Input } from "./ui/input";
import { ButtonGroup } from "./ui/button-group";
import { Button } from "./ui/button"

function SearchBar({ value, onCityChange, onSearch, history }) {

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
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                onSearch();
            }}
            className="place-items-center"
        >
            <div>
                <ButtonGroup>
                    <Input 
                        type="text"
                        placeholder="Search City..."
                        aria-label="City"
                        value={value}
                        style={{ textTransform: 'capitalize' }}
                        onChange={onCityChange}
                        onFocus={() => {setShowX('opacity-100 cursor-pointer')}}
                        onBlur={() => {setShowX('opacity-0 cursor-default')}}
                        onKeyDown={handleEnter}
                        className="p-4 md:text-md lg:text-lg xl:text-xl"
                    />

                    <Button
                        type="submit"
                        className="p-4"
                    >
                        <Search />
                    </Button>
                </ButtonGroup>

                <SearchHistory history={history} onCityClick={handleHistoryClick} visibility={showX}/>
            </div>


        </form>
    );
}

export default SearchBar;