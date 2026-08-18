export default function Cards(props){
    return(
        <div 
            onClick={props.onclick} 
            className="w-full h-full min-h-[300px] rounded-2xl cursor-pointer glass-card glass-card-hover p-5 flex flex-col justify-between group select-none transition-all duration-200"
        >
            <div className="overflow-hidden rounded-xl h-44 w-full relative">
                <img 
                    src={props.img} 
                    alt={props.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{props.title}</h3>
            </div>
        </div>
    )
}
