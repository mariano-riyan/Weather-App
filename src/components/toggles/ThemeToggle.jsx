import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme();
    return (
        <Button
            size="md"
            className="w-10"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant="secondary"
        >
            {theme === "light"
                ?
                <Sun
                    aria-label="Light Mode"
                    size={20}
                />
                :
                <Moon
                    aria-label="Dark Mode" 
                    size={20}
                />
            }
        </Button>
    );
}
 
export default ThemeToggle;