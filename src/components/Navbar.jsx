import { useState, useEffect } from "react";

const NAV_LINKS = [
    { name: "About Me", href: "#about_me" },
    { name: "Services", href: "#services" },
    { name: "Featured Works", href: "#my_work" },
    { name: "Certifications", href: "#certifications" }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 site-header transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a 
                        href="#" 
                        className="flex items-center gap-3 group focus-visible:rounded-lg"
                        aria-label="Timothy Johan Portfolio Home"
                    >
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-700 group-hover:border-sky-400 transition-colors">
                            <img src="/ado.jpg" alt="Timothy Johan avatar" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-xl text-white group-hover:text-sky-400 transition-colors tracking-tight">
                            Timothy<span className="text-sky-400">.</span>
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-sky-400 transition-colors py-2 focus-visible:rounded"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="#contact" 
                            className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sky-300 hover:bg-slate-800 hover:border-sky-400 transition-all shadow-sm focus-visible:rounded-xl"
                        >
                            Contact Me
                        </a>
                    </div>

                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        type="button" 
                        className="md:hidden p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 border border-slate-800"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
                    >
                        {!isOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#0d1424] border-t border-slate-800 px-4 pt-4 pb-6 space-y-3 shadow-2xl" id="mobile-menu">
                    {NAV_LINKS.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href} 
                            onClick={() => setIsOpen(false)} 
                            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:bg-slate-800 hover:text-sky-400 transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        onClick={() => setIsOpen(false)} 
                        className="block w-full text-center px-4 py-3 rounded-lg text-base font-medium bg-sky-500/10 text-sky-300 border border-sky-500/30 hover:bg-sky-500/20 transition-all mt-2"
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </nav>
    );
}
