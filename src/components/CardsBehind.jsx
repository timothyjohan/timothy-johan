export default function CardsBehind(props){
    return(
        <div 
            onClick={props.onclick} 
            className="w-full h-full min-h-[300px] rounded-2xl cursor-pointer glass-card p-6 flex flex-col justify-between border-cyan-500/40 select-none bg-slate-900/90 shadow-xl transition-all duration-200"
        >
            <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3 pb-2 border-b border-slate-800">{props.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{props.desc}</p>
            </div>
        </div>
    )
}
