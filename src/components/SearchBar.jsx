import { useState } from "react";

import { Search, X } from "lucide-react";

import SearchHistory from "./SearchHistory";
import { Field } from "./ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "./ui/input-group"

function SearchBar({ value, onCityChange, onSearch, history, onClear }) {

    const [showHistory, setShowHistory] = useState('opacity-0');

    const handleHistoryClick = (e) => {
        onCityChange(e);
        onSearch(e.target.value);
    }
    
    return ( 
        <form   
            onSubmit={(e) => {
                e.preventDefault();
                onSearch();
                document.activeElement?.blur();
            }}
            className="max-w-sm mx-auto h-auto"
        >
            <Field>
                <InputGroup className="h-9">
                    <InputGroupInput 
                        placeholder="Search city..."
                        autoComplete="off"
                        aria-label="City"
                        value={value}
                        style={{ textTransform: 'capitalize' }}
                        onChange={onCityChange}
                        onFocus={() => {setShowHistory('opacity-100 cursor-pointer')}}
                        onBlur={() => {setShowHistory('opacity-0 cursor-default')}}
                        className="md:text-md tracking-wide"
                    />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    {value && 
                        <InputGroupAddon align="inline-end">
                            <button
                                type="button"
                                aria-label="Clear City"
                                className="mx-1 text-muted-foreground hover:text-foreground"
                                onClick={() => {
                                    onClear();
                                    setShowHistory('opacity-0 cursor-default')
                                }}
                            >
                                <X size={20}/>
                            </button>
                        </InputGroupAddon>
                    }
                </InputGroup>
            </Field>

            <SearchHistory 
                history={history} 
                onCityClick={handleHistoryClick} 
                visibility={showHistory}
            />
        </form>
    );
}

export default SearchBar;