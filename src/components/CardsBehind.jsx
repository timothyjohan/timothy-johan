export default function CardsBehind({ onclick, title, desc }) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onclick?.();
        }
    };

    return (
        <div
            onClick={onclick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`${title} details, press Enter to flip back`}
            className="w-full h-full min-h-[320px] rounded-2xl cursor-pointer surface-card p-6 flex flex-col justify-between select-none border-sky-500/40 bg-slate-900 shadow-xl focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
        >
            <div>
                <h3 className="text-lg font-bold text-sky-400 mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                    <span>{title}</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800 text-xs text-gray-400">
                <span className="text-sky-400 font-medium">Click to return</span>
                <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a5 5 0 015 5v2m0 0l-4-4m4 4l4-4" />
                </svg>
            </div>
        </div>
    );
}