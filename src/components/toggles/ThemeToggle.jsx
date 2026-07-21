import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme();
    return (
        <Button
            size="base"
            className="w-10 cursor-pointer"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant="secondary"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
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