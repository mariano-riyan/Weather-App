import { useTheme } from "../context/ThemeContext";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme();
    return (
        <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === "light"
                ?
                <Sun />
                :
                <Moon />
            }
        </Button>
    );
}
 
export default ThemeToggle;