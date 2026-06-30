function Card({ name, value, unit }) {

    return ( 
        <div className="p-4 md:p-6 xl:p-8 bg-foreground/10 backdrop-blur-xl rounded-xl border border-white/20 md:min-w-50">
            <h6 className="text-xs">{name}</h6>
            <span className="text-4xl font-bold">
                {value}
                <span className="text-xs">{unit}</span>
            </span>
        </div>
    );
}

export default Card;