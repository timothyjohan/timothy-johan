export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="bg-[#070b14] border-t border-slate-800/90 py-12 px-6 lg:px-12 text-gray-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Direct Contact Links */}
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        Get In Touch
                    </h2>
                    <p className="text-sm text-gray-400 max-w-md">
                        Have a project, technical question, or collaboration in mind? Reach out directly.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm pt-1">
                        <a 
                            href="mailto:timothyjohan11@gmail.com" 
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl surface-card surface-card-hover text-gray-200 hover:text-white transition-all w-full sm:w-auto justify-center focus-visible:rounded-xl"
                            aria-label="Send email to timothyjohan11@gmail.com"
                        >
                            <img src="/email-logo.webp" alt="Email" className="w-5 h-5 rounded-full" />
                            <span className="font-medium">timothyjohan11@gmail.com</span>
                        </a>
                        <a 
                            href="https://wa.me/6281259488478" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl surface-card surface-card-hover text-gray-200 hover:text-white transition-all w-full sm:w-auto justify-center focus-visible:rounded-xl"
                            aria-label="Chat on WhatsApp +62 812 5948 8478"
                        >
                            <img src="/whatsapp.webp" alt="WhatsApp" className="w-5 h-5 rounded-full" />
                            <span className="font-medium">+62 812 5948 8478</span>
                        </a>
                    </div>
                </div>

                {/* Back to Top & Legal */}
                <div className="flex flex-col items-center md:items-end gap-3">
                    <button 
                        onClick={scrollToTop} 
                        className="px-4 py-2.5 rounded-xl surface-card surface-card-hover text-gray-300 hover:text-sky-300 transition-all text-xs font-semibold flex items-center gap-2 group focus-visible:rounded-xl"
                        aria-label="Back to top of page"
                    >
                        <span>Back to top</span>
                        <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                    <p className="text-xs text-gray-500 mt-2">
                        &copy; {new Date().getFullYear()} Timothy Johan. Crafted with intent.
                    </p>
                </div>
            </div>
        </footer>
    );
}