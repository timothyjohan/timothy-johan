export default function Cards({ onclick, title, img, desc }) {
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
            aria-label={`${title} service card, press Enter to view details`}
            className="w-full h-full min-h-[320px] rounded-2xl cursor-pointer surface-card surface-card-hover p-5 flex flex-col justify-between group select-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
        >
            <div className="overflow-hidden rounded-xl h-44 w-full relative bg-slate-950/50">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                    {title}
                </h3>
                <span className="text-xs font-medium text-gray-400 group-hover:text-sky-300 transition-colors flex items-center gap-1">
                    Details
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </div>
    );
}