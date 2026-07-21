import { useState } from "react";

import { Search, X } from "lucide-react";

import { Field } from "@/components/ui/field";
import { useWeather } from "@/context/WeatherContext";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "../ui/input-group";
import SearchHistory from "./SearchHistory";

function SearchBar() {

    const { handleSearch, history, error } = useWeather();
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
            className="max-w-sm place-self-center md:min-w-sm relative gap-2"
        >
            <Field>
                <InputGroup className="h-9">
                    <InputGroupInput
                        placeholder={error ? "City not found" : "Search city..."}
                        autoComplete="off"
                        aria-label="City"
                        aria-invalid={error ? true : undefined}
                        value={inputValue}
                        style={{ textTransform: 'capitalize' }}
                        onChange={(e) => setInputValue(e.target.value)}
                        onFocus={() => setShowHistory('opacity-100')}
                        onBlur={() => setShowHistory('opacity-0')}
                        className="md:text-md tracking-wide"
                    />

                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>

                    <InputGroupAddon align="inline-end">
                        {inputValue && (
                            <button
                                type="button"
                                aria-label="Clear City"
                                className={`${showHistory} cursor-pointer mx-1 text-muted-foreground hover:text-foreground`}
                                onClick={() => {
                                    setInputValue('');
                                    setShowHistory('opacity-0')
                                }}
                            >
                                <X size={20}/>
                            </button>
                        )}
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