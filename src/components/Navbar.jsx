import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#76ABAE]/50 group-hover:border-cyan-400 transition-colors">
                            <img src="/ado.jpg" alt="Timothy Johan" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                            Timothy<span className="text-[#76ABAE]">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
                        <a href="#about_me" className="hover:text-cyan-400 transition-colors py-2">About Me</a>
                        <a href="#services" className="hover:text-cyan-400 transition-colors py-2">My Services</a>
                        <a href="#my_work" className="hover:text-cyan-400 transition-colors py-2">My Works</a>
                        <a href="#contact" className="px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-sm">
                            Contact Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        type="button" 
                        className="md:hidden p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-slate-800/80 focus:outline-none border border-slate-700/50"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
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

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div className="md:hidden glass-nav border-t border-slate-800/80 px-4 pt-4 pb-6 space-y-3 shadow-2xl" id="mobile-menu">
                    <a 
                        href="#about_me" 
                        onClick={() => setIsOpen(false)} 
                        className="block px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-all"
                    >
                        About Me
                    </a>
                    <a 
                        href="#services" 
                        onClick={() => setIsOpen(false)} 
                        className="block px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-all"
                    >
                        My Services
                    </a>
                    <a 
                        href="#my_work" 
                        onClick={() => setIsOpen(false)} 
                        className="block px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-all"
                    >
                        My Works
                    </a>
                    <a 
                        href="#contact" 
                        onClick={() => setIsOpen(false)} 
                        className="block w-full text-center px-4 py-3 rounded-lg text-base font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all mt-2"
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </nav>
    )
}

