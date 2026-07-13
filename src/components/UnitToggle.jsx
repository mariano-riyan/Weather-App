const UnitToggle = ({ onToggle, activeUnit }) => {
    return (
        <button
            className="p-1 rounded-full flex gap-4 cursor-pointer"
            onClick={onToggle}
            aria-label="Toggle temperature unit"
        >
            <div className={activeUnit === 'metric' ? 'font-bold' : ''}>
                °C
            </div>

            <div className={activeUnit === 'imperial' ? 'font-bold' : ''}>
                °F
            </div>
        </button>
    );
}

export default UnitToggle;