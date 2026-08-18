import { Fade } from "react-awesome-reveal";
import Cards from "../components/Cards";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import CardsBehind from "../components/CardsBehind";

export default function Home() {
    const [isFlipped, setIsFlipped] = useState(Array(7).fill(false));

    const handleClick = (index) => {
        const newFlips = Array(7).fill(false);
        newFlips[index] = !isFlipped[index];
        setIsFlipped(newFlips);
    };

    const resetOthers = (index) => {
        const newFlips = Array(7).fill(false);
        newFlips[index] = true;
        setIsFlipped(newFlips);
    };

    return (
        <main className="pt-24 pb-20 overflow-x-hidden">
            {/* Hero Banner */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
                {/* Background glow blob */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    {/* Hero Image / Avatar Frame */}
                    <div className="md:col-span-5 flex justify-center order-1 md:order-2">
                        <Fade triggerOnce>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                                <div className="relative glass-card p-4 sm:p-6 rounded-3xl flex items-center justify-center">
                                    <img
                                        src="/timothy.webp"
                                        alt="Timothy Johan"
                                        className="w-44 sm:w-64 md:w-72 lg:w-80 object-cover rounded-2xl shadow-2xl transition duration-500 group-hover:scale-[1.02]"
                                    />
                                    {/* Availability Badge */}
                                    <div className="absolute -bottom-3 glass-card px-4 py-1.5 rounded-full border border-cyan-500/30 flex items-center gap-2 shadow-lg">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                                        <span className="text-xs font-semibold text-gray-200">Open to Projects</span>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Hero Text Content */}
                    <div className="md:col-span-7 text-center md:text-left space-y-6 order-2 md:order-1">
                        <Fade cascade triggerOnce>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium">
                                <span>👋 Hello & Welcome</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                I'm <span className="text-gradient">Timothy Johan</span>
                            </h1>

                            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl">
                                AI Engineer & Fullstack Web Developer, Creative UI/UX Designer.
                            </p>

                            {/* Key Skill Badges */}
                            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start pt-2">
                                <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-cyan-300 font-medium">React / Vite</span>
                                <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-cyan-300 font-medium">Tailwind CSS</span>
                                <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-cyan-300 font-medium">Node.js / Express</span>
                                <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-cyan-300 font-medium">Machine Learning</span>
                            </div>

                            {/* Hero Action Buttons */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                                <a
                                    href="#my_work"
                                    className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 hover:translate-y-[-2px]"
                                >
                                    <span>View My Works</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a
                                    href="#contact"
                                    className="px-6 py-3 rounded-full glass-card hover:border-cyan-400 text-gray-200 font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
                                >
                                    <span>Get In Touch</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            {/* Social Links / Find Me */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Fade triggerOnce>
                    <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto text-center border-slate-800">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Find Me On Platform</h2>
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
                            <a
                                href="https://github.com/timothyjohan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-cyan-400/50 transition-all group"
                            >
                                <img src="/github.png" alt="GitHub" className="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200 group-hover:text-white">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/timothyjohan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-cyan-400/50 transition-all group"
                            >
                                <img src="/linkedin.webp" alt="LinkedIn" className="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200 group-hover:text-white">LinkedIn</span>
                            </a>
                            <a
                                href="https://leetcode.com/u/timothyjohan11/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-cyan-400/50 transition-all group"
                            >
                                <img src="/leet-code.svg" alt="LeetCode" className="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200 group-hover:text-white">LeetCode</span>
                            </a>
                        </div>
                    </div>
                </Fade>
            </section>

            {/* About Me Section */}
            <section id="about_me" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Text Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <Fade cascade triggerOnce>
                            <div className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                                Personal Story
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                                About <span className="text-gradient">Me</span>
                            </h2>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                I am passionate about frontend web development and <strong className="text-white font-semibold">UI/UX design</strong>. I strive to create intuitive and engaging user interfaces by <span className="text-cyan-300 italic">putting myself in the user's shoes</span> to understand their needs and desires. My goal is to design experiences that are not only <strong className="text-white font-semibold">visually appealing</strong> but also <strong className="text-white font-semibold">highly functional and user-friendly</strong>.
                            </p>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                In addition to frontend development, I am a dedicated <strong className="text-white font-semibold">Computer Science student</strong> with a strong interest in <strong className="text-white font-semibold">machine learning</strong>. I am continually expanding my skills to explore how AI and machine learning can be <strong className="text-cyan-300 font-semibold">integrated into web applications</strong> to build smarter solutions.
                            </p>

                            {/* Tech Stack Pills */}
                            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-2.5">
                                <span className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-gray-300 font-medium">✨ Problem Solver</span>
                                <span className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-gray-300 font-medium">🎨 UI/UX Focus</span>
                                <span className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-gray-300 font-medium">💻 Clean Code</span>
                                <span className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-gray-300 font-medium">🚀 Fast Learner</span>
                            </div>
                        </Fade>
                    </div>

                    {/* Decorative Column (Big Interlocking Spinning Gears with Spacious Gaps) */}
                    <div className="md:col-span-5 lg:col-span-5 hidden md:flex flex-col justify-center items-end relative overflow-visible pl-6 lg:pl-10">
                        <Fade triggerOnce className="w-full">
                            <div className="flex flex-col items-end w-full max-w-sm sm:max-w-md lg:max-w-lg ml-auto">
                                {/* Gear 1: Primary Large Gear */}
                                <img
                                    src="/blue-gear.webp"
                                    alt="Spinning Gear 1"
                                    className="w-48 md:w-56 lg:w-64 xl:w-72 ml-auto gear-spin-cw drop-shadow-[0_0_25px_rgba(6,182,212,0.35)] opacity-95"
                                />
                                {/* Gear 2: Secondary Interlocking Gear (Spacious Gap) */}
                                <img
                                    src="/blue-gear.webp"
                                    alt="Spinning Gear 2"
                                    className="w-36 md:w-44 lg:w-52 xl:w-60 ml-auto mr-16 md:mr-24 lg:mr-32 -mt-6 md:-mt-8 lg:-mt-10 gear-spin-ccw drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] opacity-90"
                                />
                                {/* Gear 3: Accent Interlocking Gear (Spacious Gap) */}
                                <img
                                    src="/blue-gear.webp"
                                    alt="Spinning Gear 3"
                                    className="w-32 md:w-36 lg:w-44 xl:w-52 ml-auto -mt-4 md:-mt-6 lg:-mt-8 gear-spin-slow drop-shadow-[0_0_15px_rgba(129,140,248,0.25)] opacity-85"
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            {/* Services Section ("What can I do for you?") */}
            <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center space-y-4 mb-12 sm:mb-16">
                    <Fade triggerOnce>
                        <div className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                            Services & Capabilities
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            What Can I Do <span className="text-gradient">For You?</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                            Click or tap any card below to reveal more details about what I can craft for your project.
                        </p>
                    </Fade>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <Fade cascade direction="up" triggerOnce>
                        <ReactCardFlip isFlipped={isFlipped[0]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => { handleClick(0); resetOthers(0); }} title="Web Design" img="/web-design.webp" />
                            <CardsBehind onclick={() => handleClick(0)} title="Web Design" desc="I help design sleek, modern web interfaces tailored to your brand while iterating closely with you to ensure user satisfaction." img="/web-design.webp" />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[1]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => { handleClick(1); resetOthers(1); }} title="Backend Web" img="/backend.png" />
                            <CardsBehind onclick={() => handleClick(1)} title="Backend Web" desc="Need a reliable API architecture and database integration? I engineer clean backend logic, authentication, and data management." img="/backend.png" />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[2]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => { handleClick(2); resetOthers(2); }} title="AI Engineering" img="/work_4.png" />
                            <CardsBehind onclick={() => handleClick(2)} title="AI Engineering" desc="Integrating LLMs, machine learning models, OpenAI APIs, and intelligent data pipelines into web applications for smart user experiences." img="/work_4.png" />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[3]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => { handleClick(3); resetOthers(3); }} title="Agentic AI Implementation" img="/work_2.png" />
                            <CardsBehind onclick={() => handleClick(3)} title="Agentic AI" desc="Building autonomous AI agents, tool-calling workflows, RAG pipelines, and multi-agent systems to automate complex real-world tasks." img="/work_2.png" />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[4]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => { handleClick(4); resetOthers(4); }} title="Tutoring & Mentorship" img="/cat-using-laptop.jpg" />
                            <CardsBehind onclick={() => handleClick(4)} title="Tutoring" desc="Stuck on a tricky programming concept? I offer patient code tutoring and break down complex web topics into easy-to-understand lessons." img="/cat-using-laptop.jpg" />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[5]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => { handleClick(5); resetOthers(5); }} title="Graphic Design" img="/graphic-design.webp" />
                            <CardsBehind onclick={() => handleClick(5)} title="Graphic Design" desc="Transforming abstract ideas and rough sketches into vibrant, polished digital artwork, banners, and marketing assets." img="/graphic-design.webp" />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[6]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => { handleClick(6); resetOthers(6); }} title="Video Editing" img="/video-editting.webp" />
                            <CardsBehind onclick={() => handleClick(6)} title="Video Editing" desc="Providing clean basic video editing, including captions, transitions, color touchups, and audio synchronization." img="/video-editting.webp" />
                        </ReactCardFlip>
                    </Fade>
                </div>
            </section>

            {/* Useful Apps & Tech Stack */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Fade triggerOnce>
                    <div className="glass-card rounded-3xl p-8 sm:p-12 text-center border-slate-800">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
                            Essential <span className="text-gradient">Tools & Apps</span> I Use
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <a
                                href="https://www.adobe.com/products/photoshop.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col items-center gap-3 group"
                            >
                                <img src="/photoshop.png" alt="Adobe Photoshop" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200">Photoshop</span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400">Design</span>
                            </a>
                            <a
                                href="https://www.adobe.com/id_en/products/premiere.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col items-center gap-3 group"
                            >
                                <img src="/premiere-pro.png" alt="Adobe Premiere Pro" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200">Premiere Pro</span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400">Video</span>
                            </a>
                            <a
                                href="https://code.visualstudio.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col items-center gap-3 group"
                            >
                                <img src="/visual-studio.png" alt="VS Code" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200">VS Code</span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400">Code Editor</span>
                            </a>
                            <a
                                href="https://developer.android.com/studio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col items-center gap-3 group"
                            >
                                <img src="/android-studio.webp" alt="Android Studio" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200">Android Studio</span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400">Mobile Dev</span>
                            </a>
                        </div>
                    </div>
                </Fade>
            </section>

            {/* My Works Section */}
            <section id="my_work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center space-y-4 mb-12 sm:mb-16">
                    <Fade triggerOnce>
                        <div className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                            Portfolio Showcase
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Featured <span className="text-gradient">Works</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                            A showcase of my recent fullstack web apps, UI/UX builds, and AI integrations.
                        </p>
                    </Fade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {/* Work Item 1 */}
                    <Fade direction="up" triggerOnce>
                        <div className="glass-card rounded-2xl overflow-hidden glass-card-hover flex flex-col justify-between group">
                            <div>
                                <div className="relative overflow-hidden h-56 sm:h-64">
                                    <img
                                        src="/work_1.png"
                                        alt="Bunkasai ISTTS Website"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-medium">React</span>
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">Event Management</span>
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">Vercel</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        Bunkasai ISTTS Website
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        A comprehensive event portal facilitating competition registration, tenant management, and sponsorship proposal submissions for Bunkasai ISTTS.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0">
                                <a
                                    href="https://bunkasai-istts.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    <span>Visit Live Website</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Fade>

                    {/* Work Item 2 */}
                    <Fade direction="up" triggerOnce>
                        <div className="glass-card rounded-2xl overflow-hidden glass-card-hover flex flex-col justify-between group">
                            <div>
                                <div className="relative overflow-hidden h-56 sm:h-64">
                                    <img
                                        src="/work_2.png"
                                        alt="Besties Chat Messenger"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-medium">MongoDB</span>
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">Express / Node</span>
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-medium">UI Mockup</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        Besties Chat Messenger
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        A functional chat messenger app modeled after LINE, supporting real-time messaging structures and MongoDB storage.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0">
                                <a
                                    href="https://github.com/timothyjohan/line_mockup_besties"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    <span>View Source Code</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Fade>

                    {/* Work Item 3 */}
                    <Fade direction="up" triggerOnce>
                        <div className="glass-card rounded-2xl overflow-hidden glass-card-hover flex flex-col justify-between group">
                            <div>
                                <div className="relative overflow-hidden h-56 sm:h-64">
                                    <img
                                        src="/work_3.1.png"
                                        alt="Mate Diary"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-medium">Fullstack</span>
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">Animal Breeding</span>
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">Genealogy</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        Mate Diary
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        A specialized web platform designed for animal breeders to track breeding schedules, review history logs, and generate interactive family lineage trees.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0">
                                <a
                                    href="https://github.com/timothyjohan/14_Cruixx_Mate-Diary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    <span>View Source Code</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Fade>

                    {/* Work Item 4 */}
                    <Fade direction="up" triggerOnce>
                        <div className="glass-card rounded-2xl overflow-hidden glass-card-hover flex flex-col justify-between group">
                            <div>
                                <div className="relative overflow-hidden h-56 sm:h-64">
                                    <img
                                        src="/work_4.png"
                                        alt="League of Legends Lane Guide"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-medium">OpenAI API</span>
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">GPT-4</span>
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-medium">Gaming AI</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        LoL Strategy AI Guide
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        An AI-assisted strategy guide web app for League of Legends players, utilizing GPT-4 to analyze champion matchups and offer real-time tactical advice.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0">
                                <a
                                    href="https://github.com/timothyjohan/league-of-legends-lane-guide-backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    <span>View Source Code</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </main>
    )
}
