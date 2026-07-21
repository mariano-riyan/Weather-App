import SearchBar from "@/components/search/SearchBar";
import ToggleLayout from "../toggles";

const Header = ({ searchVisibility }) => {

    return (
        <div className="flex items-center justify-end gap-16 py-2 md:py-8">
            <div className={`${searchVisibility ? '' : 'hidden'}`}>
                <SearchBar />
            </div>

            <ToggleLayout />
        </div>
    );
}
 
export default Header;