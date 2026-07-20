import { ButtonGroup } from "@/components/ui/button-group";
import ThemeToggle from "./ThemeToggle";
import UnitToggle from "./UnitToggle";

const ToggleLayout = () => {
    return (
        <ButtonGroup>
            <ThemeToggle />
            <UnitToggle />
        </ButtonGroup>
    );
}
 
export default ToggleLayout;