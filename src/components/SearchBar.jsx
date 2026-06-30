import { Search } from "lucide-react";

function SearchBar({ value, onCityChange, onSearch }) {

    return ( 
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                onSearch();
            }}
            className=""
        >
            <div className="rounded-full bg-foreground/50 p-2 flex place-self-center md:place-self-start group">
                <Search className="inline-block mx-4" />
                <input 
                    type="text"
                    placeholder="Search City..."
                    aria-label="City"
                    value={value}
                    onChange={onCityChange}
                    className="outline-none w-full"
                />
            </div>
        </form>
    );
}

export default SearchBar;