import { History, X } from 'lucide-react';

const SearchHistory = ({ history, onCityClick, onClearHistory, onRemoveHistory }) => {

    if (!history || history.length === 0) return null;

    return ( 
        <div className="absolute top-full left-0 mt-1 z-10 w-full backdrop-blur-xl border-2 rounded-2xl">
            <button
                type="button"
                onClick={onClearHistory}
                onMouseDown={(e) => e.preventDefault()}
                className="justify-self-end m-2 text-xs flex place-items-center gap-2 opacity-60 hover:opacity-100 cursor-pointer"
            >
                Clear History
                <History size={12} />
            </button>
            {history.map(city => (
                <div
                    key={city}
                    className='flex justify-between place-items-center group'
                >
                    <button 
                        type="button" 
                        value={city}
                        aria-label={`Search ${city}`}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={onCityClick}
                        className="capitalize flex gap-2 py-1.5 hover:bg-accent w-full text-start px-4 place-items-center"
                    >
                        <History size={15} className='opacity-60' />
                        {city}
                    </button>

                    <button
                        variant='ghost'
                        type='button'
                        aria-label={`Remove ${city} from search history`}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => onRemoveHistory(city)}
                        className='lg:hidden md:group-hover:block absolute right-2 cursor-pointer'
                    >
                        <X size={16} className='opacity-60' />
                    </button>
                </div>
            ))}
        </div>
    );
}
 
export default SearchHistory;