import { useState } from "react";

import { Search, X } from "lucide-react";

import SearchHistory from "./SearchHistory";
import { Field } from "./ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "./ui/input-group"
import { useWeather } from "../context/WeatherContext";

function SearchBar() {

    const { handleSearch, history } = useWeather();
    const [inputValue, setInputValue] = useState('');
    const [showHistory, setShowHistory] = useState('opacity-0');

    const handleHistoryClick = (e) => {
        handleSearch(e.target.value);
    }
    
    return ( 
        <form   
            onSubmit={(e) => {
                e.preventDefault();
                if (inputValue.trim()) {
                    handleSearch(inputValue);
                    setInputValue('');
                    document.activeElement?.blur();
                }             
            }}
            className="max-w-sm mx-auto h-auto"
        >
            <Field>
                <InputGroup className="h-9">
                    <InputGroupInput 
                        placeholder="Search city..."
                        autoComplete="off"
                        aria-label="City"
                        value={inputValue}
                        style={{ textTransform: 'capitalize' }}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                        onFocus={() => {setShowHistory('opacity-100 cursor-pointer')}}
                        onBlur={() => {setShowHistory('opacity-0 cursor-default')}}
                        className="md:text-md tracking-wide"
                    />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                        <button
                            type="button"
                            aria-label="Clear City"
                            className={`${showHistory} mx-1 text-muted-foreground hover:text-foreground`}
                            onClick={() => {
                                setInputValue('');
                                setShowHistory('opacity-0 cursor-default')
                            }}
                        >
                            <X size={20}/>
                        </button>
                    </InputGroupAddon>
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