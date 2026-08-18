export default function Footer(){
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <footer id="contact" className="bg-[#080d1e] border-t border-slate-800/80 py-12 px-6 lg:px-12 text-gray-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                
                {/* Contact Section */}
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                        <span>Get In Touch</span>
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                        <a 
                            href="mailto:timothyjohan11@gmail.com" 
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl glass-card hover:border-cyan-500/50 hover:text-white transition-all group w-full sm:w-auto justify-center"
                        >
                            <img src="/email-logo.webp" alt="Email" className="w-5 h-5 rounded-full" />
                            <span>timothyjohan11@gmail.com</span>
                        </a>
                        <a 
                            href="https://wa.me/6281259488478" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl glass-card hover:border-emerald-500/50 hover:text-white transition-all group w-full sm:w-auto justify-center"
                        >
                            <img src="/whatsapp.webp" alt="WhatsApp" className="w-5 h-5 rounded-full" />
                            <span>+62 812 5948 8478</span>
                        </a>
                    </div>
                </div>

                {/* Back to Top & Copyright */}
                <div className="flex flex-col items-center md:items-end gap-3">
                    <button 
                        onClick={scrollToTop} 
                        className="px-4 py-2.5 rounded-full glass-card hover:border-cyan-400 hover:text-cyan-300 transition-all text-xs font-semibold flex items-center gap-2 group"
                        title="Back to Top"
                    >
                        <span>Back to top</span>
                        <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                    <p className="text-xs text-gray-500 mt-1">
                        &copy; {new Date().getFullYear()} Timothy Johan. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}