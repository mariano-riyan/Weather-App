function Card({ name, value, unit }) {
    return ( 
        <div className="p-4 bg-foreground/10 backdrop-blur-xl rounded-xl border border-white/20 space-y-4">
            <h6 className="text-xs">{name}</h6>
            <span className="text-4xl font-bold">
                {value}
                <span className="text-xs">{unit}</span>
            </span>
        </div>
    );
}

export default Card;