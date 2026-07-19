import { useTheme } from "../context/ThemeContext";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme();
    return (
        <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="rounded-full"
        >
            {theme === "light"
                ?
                <Sun aria-label="Light Mode" />
                :
                <Moon aria-label="Dark Mode" />
            }
        </Button>
    );
}
 
export default ThemeToggle;