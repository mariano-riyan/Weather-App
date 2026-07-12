const UnitToggle = ({ onToggle }) => {
    
    return (
        <div 
            className="p-1 rounded-full flex gap-4"
            onClick={ onToggle }
        >
            <div className="">
                °C
            </div>

            <div
                className="">
                °F
            </div>
        </div>
    );
}
 
export default UnitToggle;