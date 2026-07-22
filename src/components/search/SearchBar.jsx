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

    const { handleSearch, history, error, clearHistory, removeHistory } = useWeather();
    const [inputValue, setInputValue] = useState('');
    const [showHistory, setShowHistory] = useState(false);

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
                        onFocus={() => setShowHistory(true)}
                        onBlur={() => setShowHistory(false)}
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
                                className="cursor-pointer mx-1 text-muted-foreground hover:text-foreground"
                                onClick={() => {
                                    setInputValue('');
                                    setShowHistory(false)
                                }}
                            >
                                <X size={20}/>
                            </button>
                        )}
                    </InputGroupAddon>

                </InputGroup>
            </Field>

            {showHistory && (
                <SearchHistory 
                    history={history} 
                    onCityClick={handleHistoryClick}
                    onClearHistory={clearHistory}
                    onRemoveHistory={removeHistory}
                />
            )}
        </form>
    );
}

export default SearchBar;