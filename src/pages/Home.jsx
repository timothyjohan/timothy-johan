import { Fade } from "react-awesome-reveal";
import Cards from "../components/Cards";
import ReactCardFlip from "react-card-flip";
import { useState, useEffect } from "react";
import CardsBehind from "../components/CardsBehind";


export default function Home() {
    const [isFlipped, setIsFlipped] = useState(Array(7).fill(false));
    const [previewImage, setPreviewImage] = useState(null);

    const handleClick = (index) => {
        const newFlips = [...isFlipped];
        newFlips[index] = !newFlips[index];
        setIsFlipped(newFlips);
    };

    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && previewImage) {
                setPreviewImage(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [previewImage]);

    return (
        <main className="pt-24 pb-20 overflow-x-hidden">
            {/* Hero Banner */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    {/* Hero Image / Avatar Frame */}
                    <div className="md:col-span-5 flex justify-center order-1 md:order-2">
                        <Fade triggerOnce>
                            <div className="relative">
                                <div className="surface-card p-3 sm:p-4 rounded-3xl flex flex-col items-center justify-center shadow-xl">
                                    <img
                                        src="/timothy.webp"
                                        alt="Timothy Johan"
                                        className="w-48 sm:w-64 md:w-72 lg:w-80 object-cover rounded-2xl shadow-lg"
                                    />
                                    {/* Availability Status */}
                                    <div className="mt-3 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                        <span className="text-xs font-medium text-gray-300">Available for projects</span>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Hero Text Content */}
                    <div className="md:col-span-7 text-center md:text-left space-y-6 order-2 md:order-1">
                        <Fade cascade triggerOnce>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg surface-card text-sky-400 text-xs font-semibold uppercase tracking-wider">
                                Portfolio & Works
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                I am <span className="text-gradient">Timothy Johan</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl">
                                AI Engineer, Fullstack Web Developer, and UI/UX Designer crafting performant applications with intentional user experiences.
                            </p>

                            {/* Core Skill Pills */}
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-1">
                                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-sky-300 font-medium">React / Vite</span>
                                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-sky-300 font-medium">Tailwind CSS</span>
                                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-sky-300 font-medium">Node.js / Express</span>
                                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-sky-300 font-medium">Machine Learning & LLMs</span>
                            </div>

                            {/* Hero Action Buttons */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                                <a
                                    href="#my_work"
                                    className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-md flex items-center gap-2 focus-visible:rounded-xl"
                                >
                                    <span>View Featured Works</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a
                                    href="#contact"
                                    className="px-6 py-3 rounded-xl surface-card surface-card-hover text-gray-200 hover:text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2 focus-visible:rounded-xl"
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
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Fade triggerOnce>
                    <div className="surface-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto text-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Profiles & Code Repositories</h2>
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                            <a
                                href="https://github.com/timothyjohan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-400/50 transition-all group focus-visible:rounded-xl"
                            >
                                <img src="/github.png" alt="GitHub icon" className="w-6 h-6 object-contain" />
                                <span className="text-sm font-semibold text-gray-200 group-hover:text-white">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/timothyjohan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-400/50 transition-all group focus-visible:rounded-xl"
                            >
                                <img src="/linkedin.webp" alt="LinkedIn icon" className="w-6 h-6 object-contain" />
                                <span className="text-sm font-semibold text-gray-200 group-hover:text-white">LinkedIn</span>
                            </a>
                            <a
                                href="https://leetcode.com/u/timothyjohan11/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-400/50 transition-all group focus-visible:rounded-xl"
                            >
                                <img src="/leet-code.svg" alt="LeetCode icon" className="w-6 h-6 object-contain" />
                                <span className="text-sm font-semibold text-gray-200 group-hover:text-white">LeetCode</span>
                            </a>
                        </div>
                    </div>
                </Fade>
            </section>

            {/* About Me Section */}
            <section id="about_me" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Text Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <Fade cascade triggerOnce>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                                About <span className="text-gradient">My Background</span>
                            </h2>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                I am an engineer focused on frontend web development, UI/UX architecture, and machine learning integration. I approach every build from the user perspective: making interfaces intuitive, accessible, and responsive across devices while writing maintainable, structured code.
                            </p>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                As a Computer Science student with practical experience in fullstack software engineering, I explore practical AI integration: connecting LLMs, agentic workflows, and predictive models to modern web platforms to create genuinely useful tools.
                            </p>
                        </Fade>
                    </div>

                    {/* Engineering Strengths Highlights Grid */}
                    <div className="lg:col-span-5 space-y-4">
                        <Fade cascade triggerOnce>
                            <div className="surface-card p-5 rounded-2xl space-y-2">
                                <h3 className="text-base font-bold text-sky-400">Fullstack Architecture</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Developing scalable web applications using React, Vite, Node.js, Express, and structured databases.
                                </p>
                            </div>

                            <div className="surface-card p-5 rounded-2xl space-y-2">
                                <h3 className="text-base font-bold text-sky-400">AI & Intelligent Systems</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Implementing agentic tool-use pipelines, prompt engineering, and machine learning models for real-world tasks.
                                </p>
                            </div>

                            <div className="surface-card p-5 rounded-2xl space-y-2">
                                <h3 className="text-base font-bold text-sky-400">User Interface & Accessibility</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Designing clean, accessible, and high-performance design systems prioritizing contrast and keyboard navigation.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center space-y-3 mb-12 sm:mb-16">
                    <Fade triggerOnce>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Services & Capabilities
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                            Click or press Enter on any card to explore specific technical capabilities.
                        </p>
                    </Fade>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <Fade cascade direction="up" triggerOnce>
                        <ReactCardFlip isFlipped={isFlipped[0]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => handleClick(0)} title="Web Design" img="/web-design.webp" />
                            <CardsBehind onclick={() => handleClick(0)} title="Web Design" desc="I design clean, modern web interfaces tailored to brand identities while ensuring structured typography, responsive layouts, and intuitive usability." />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[1]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => handleClick(1)} title="Backend Web" img="/backend.png" />
                            <CardsBehind onclick={() => handleClick(1)} title="Backend Web" desc="Engineering reliable API architectures, robust authentication systems, and database integrations with MongoDB, SQL, and Node.js." />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[2]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => handleClick(2)} title="AI Engineering" img="/work_4.png" />
                            <CardsBehind onclick={() => handleClick(2)} title="AI Engineering" desc="Integrating LLMs, neural networks, OpenAI APIs, and custom model endpoints into responsive web applications." />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[3]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => handleClick(3)} title="Agentic AI Workflows" img="/work_2.png" />
                            <CardsBehind onclick={() => handleClick(3)} title="Agentic AI Workflows" desc="Building autonomous AI agents, tool-calling pipelines, RAG systems, and structured multi-agent workflows." />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[4]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => handleClick(4)} title="Technical Mentorship" img="/backend.png" />
                            <CardsBehind onclick={() => handleClick(4)} title="Technical Mentorship" desc="Providing structured programming tutoring, algorithms guidance, and web development fundamentals." />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[5]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => handleClick(5)} title="Graphic Design" img="/graphic-design.webp" />
                            <CardsBehind onclick={() => handleClick(5)} title="Graphic Design" desc="Creating clean digital assets, branding collateral, icons, and structured visual assets." />
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[6]} flipDirection="horizontal" flipSpeedBack={0.3} flipSpeedFront={0.3}>
                            <Cards onclick={() => handleClick(6)} title="Video Production" img="/video-editting.webp" />
                            <CardsBehind onclick={() => handleClick(6)} title="Video Production" desc="Delivering video editing, title composition, pacing, color balance, and clear audio synchronization." />
                        </ReactCardFlip>
                    </Fade>
                </div>
            </section>

            {/* Useful Apps & Tech Stack */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Fade triggerOnce>
                    <div className="surface-card rounded-3xl p-8 sm:p-12 text-center">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
                            Development & Creative Tools
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <a
                                href="https://www.adobe.com/products/photoshop.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="surface-card p-6 rounded-2xl surface-card-hover flex flex-col items-center gap-3 group focus-visible:rounded-2xl"
                                aria-label="Adobe Photoshop"
                            >
                                <img src="/photoshop.png" alt="Adobe Photoshop" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200">Photoshop</span>
                                <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-gray-400 border border-slate-800">Design</span>
                            </a>
                            <a
                                href="https://www.adobe.com/id_en/products/premiere.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="surface-card p-6 rounded-2xl surface-card-hover flex flex-col items-center gap-3 group focus-visible:rounded-2xl"
                                aria-label="Adobe Premiere Pro"
                            >
                                <img src="/premiere-pro.png" alt="Adobe Premiere Pro" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200">Premiere Pro</span>
                                <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-gray-400 border border-slate-800">Video</span>
                            </a>
                            <a
                                href="https://code.visualstudio.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="surface-card p-6 rounded-2xl surface-card-hover flex flex-col items-center gap-3 group focus-visible:rounded-2xl"
                                aria-label="Visual Studio Code"
                            >
                                <img src="/visual-studio.png" alt="VS Code" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200">VS Code</span>
                                <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-gray-400 border border-slate-800">Code Editor</span>
                            </a>
                            <a
                                href="https://developer.android.com/studio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="surface-card p-6 rounded-2xl surface-card-hover flex flex-col items-center gap-3 group focus-visible:rounded-2xl"
                                aria-label="Android Studio"
                            >
                                <img src="/android-studio.webp" alt="Android Studio" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
                                <span className="text-sm font-semibold text-gray-200">Android Studio</span>
                                <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-gray-400 border border-slate-800">Mobile Dev</span>
                            </a>
                        </div>
                    </div>
                </Fade>
            </section>

            {/* Featured Works Section */}
            <section id="my_work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center space-y-3 mb-12 sm:mb-16">
                    <Fade triggerOnce>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Featured Projects
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                            Production web applications, fullstack platforms, and AI engineering implementations.
                        </p>
                    </Fade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {/* Work Item 1 */}
                    <Fade direction="up" triggerOnce>
                        <div className="surface-card rounded-2xl overflow-hidden surface-card-hover flex flex-col justify-between group">
                            <div>
                                <div className="relative overflow-hidden h-56 sm:h-64 bg-slate-950">
                                    <img
                                        src="/work_1.png"
                                        alt="Bunkasai ISTTS Website Screenshot"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">React</span>
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">Event Portal</span>
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">Vercel</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
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
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded"
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
                        <div className="surface-card rounded-2xl overflow-hidden surface-card-hover flex flex-col justify-between group">
                            <div>
                                <div className="relative overflow-hidden h-56 sm:h-64 bg-slate-950">
                                    <img
                                        src="/work_2.png"
                                        alt="Besties Chat Messenger Screenshot"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">MongoDB</span>
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">Express / Node</span>
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">UI Mockup</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                                        Besties Chat Messenger
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        A functional chat messenger app modeled after LINE, supporting real-time messaging structures, session handling, and MongoDB storage.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0">
                                <a
                                    href="https://github.com/timothyjohan/line_mockup_besties"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded"
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
                        <div className="surface-card rounded-2xl overflow-hidden surface-card-hover flex flex-col justify-between group">
                            <div>
                                <div className="relative overflow-hidden h-56 sm:h-64 bg-slate-950">
                                    <img
                                        src="/work_3.1.png"
                                        alt="Mate Diary Screenshot"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">Fullstack</span>
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">Breeding Schedules</span>
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">Genealogy Tree</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
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
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded"
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
                        <div className="surface-card rounded-2xl overflow-hidden surface-card-hover flex flex-col justify-between group">
                            <div>
                                <div className="relative overflow-hidden h-56 sm:h-64 bg-slate-950">
                                    <img
                                        src="/work_4.png"
                                        alt="League of Legends Strategy AI Guide Screenshot"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">OpenAI API</span>
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">GPT-4</span>
                                        <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800">Matchup Analysis</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
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
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded"
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

            {/* Certifications & Honors Section */}
            <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center space-y-3 mb-12 sm:mb-16">
                    <Fade triggerOnce>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Certifications & Honors
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                            Verified technical credentials, machine learning certifications, and competitive hackathon awards.
                        </p>
                    </Fade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <Fade cascade direction="up" triggerOnce>
                        {/* 1. Google Cloud */}
                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0">
                                        <svg className="w-7 h-7" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                                            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                                        Issued Sep 2024
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white leading-snug">
                                        Google Cloud Computing Foundations: Cloud Computing Fundamentals
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-300 mt-1">Google</p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Credential ID: <span className="text-gray-300 font-mono">11653265</span>
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Cloud Computing</span>
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Google Cloud</span>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-slate-800">
                                <a
                                    href="https://www.skills.google/public_profiles/f4a87e1c-e714-4e8d-ad1f-5a939057fe1c/badges/11653265?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded"
                                >
                                    <span>Show credential</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* 2. NVIDIA Deep Learning */}
                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0">
                                        <img src="/nvidia_logo_icon.webp" alt="NVIDIA logo" className="w-8 h-8 object-contain" />
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                                        Issued Sep 2024
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white leading-snug">
                                        Fundamentals of Deep Learning
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-300 mt-1">NVIDIA</p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Credential ID: <span className="text-gray-300 font-mono">1tO0Ys3ITkGJkXM3sgBKrQ</span>
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Deep Learning</span>
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Neural Networks</span>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-slate-800">
                                <a
                                    href="https://learn.nvidia.com/certificates?id=imQFI2jfQ8i_4RVTegEbyQ#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded"
                                >
                                    <span>Show credential</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* 3. Red Hat RH124 */}
                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0">
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#EE0000">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                                        Issued Jun 2024
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white leading-snug">
                                        Red Hat System Administration I (RH124)
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-300 mt-1">Red Hat</p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Operating Systems</span>
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Red Hat Linux</span>
                                </div>

                                {/* Certificate Preview Thumbnail */}
                                <button
                                    type="button"
                                    onClick={() => setPreviewImage({ src: "/redhat_timothy.png", title: "Red Hat System Administration I (RH124) Certificate" })}
                                    className="w-full mt-2 p-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-400/50 transition-all flex items-center gap-3 text-left group"
                                >
                                    <img src="/redhat_timothy.png" alt="Red Hat Certificate thumbnail" className="w-12 h-9 object-cover rounded border border-slate-700" />
                                    <div>
                                        <p className="text-xs font-semibold text-gray-200 group-hover:text-sky-300 transition-colors">Timothy's Certificate (RH124-9.0).pdf</p>
                                        <p className="text-[11px] text-gray-400">Complete Red Hat RH124 Course</p>
                                    </div>
                                </button>
                            </div>

                            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                                <a
                                    href="https://www.credly.com/badges/c93d9420-c25d-46e1-a75d-eb43314005a6?source=linked_in_profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded"
                                >
                                    <span>Show credential</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* 4. UC Hackfest */}
                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0 text-amber-400">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l2.4 4.86 5.36.78-3.88 3.78.92 5.34-4.8-2.52-4.8 2.52.92-5.34-3.88-3.78 5.36-.78L12 2z"/>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                                        Issued Apr 2024
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white leading-snug">
                                        3rd Place in UC's Hackfest 2024
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-300 mt-1">Universitas Ciputra Surabaya</p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Backend Development</span>
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Web Design</span>
                                </div>

                                {/* Hackathon Certificate Preview Thumbnail */}
                                <button
                                    type="button"
                                    onClick={() => setPreviewImage({ src: "/UC_Hackathon.jpg", title: "3rd Place in UC's Hackfest 2024 Certificate" })}
                                    className="w-full mt-2 p-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-400/50 transition-all flex items-center gap-3 text-left group"
                                >
                                    <img src="/UC_Hackathon.jpg" alt="UC Hackfest Certificate thumbnail" className="w-12 h-9 object-cover rounded border border-slate-700" />
                                    <div>
                                        <p className="text-xs font-semibold text-gray-200 group-hover:text-sky-300 transition-colors">Timothy Johan.pdf</p>
                                        <p className="text-[11px] text-gray-400">3rd Place Award Certificate</p>
                                    </div>
                                </button>
                            </div>

                            <div className="pt-3 border-t border-slate-800">
                                <button
                                    type="button"
                                    onClick={() => setPreviewImage({ src: "/UC_Hackathon.jpg", title: "3rd Place in UC's Hackfest 2024 Certificate" })}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded"
                                >
                                    <span>View certificate</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* 5. Kaggle Intro to Machine Learning */}
                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0">
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#20BEFF">
                                            <path d="M18.825 23.859c-.022.092-.117.141-.283.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.181c0 .195-.084.282-.252.282H5.163c-.168 0-.252-.087-.252-.282V.283c0-.188.084-.283.252-.283h2.87c.168 0 .252.095.252.283v14.475l6.34-6.339c.141-.141.29-.212.449-.212h3.29c.168 0 .252.071.252.212 0 .092-.045.174-.135.248l-6.852 6.702 7.378 8.21c.092.092.12.185.088.283z"/>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                                        Issued May 2024
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white leading-snug">
                                        Intro to Machine Learning
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-300 mt-1">Kaggle</p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Machine Learning</span>
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Python</span>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-slate-800">
                                <a
                                    href="https://www.kaggle.com/learn/certification/lthreen/intro-to-machine-learning"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded"
                                >
                                    <span>Show credential</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* 6. Kaggle Python */}
                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0">
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#20BEFF">
                                            <path d="M18.825 23.859c-.022.092-.117.141-.283.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.181c0 .195-.084.282-.252.282H5.163c-.168 0-.252-.087-.252-.282V.283c0-.188.084-.283.252-.283h2.87c.168 0 .252.095.252.283v14.475l6.34-6.339c.141-.141.29-.212.449-.212h3.29c.168 0 .252.071.252.212 0 .092-.045.174-.135.248l-6.852 6.702 7.378 8.21c.092.092.12.185.088.283z"/>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                                        Issued Mar 2024
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white leading-snug">
                                        Introduction to Programming Using Python
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-300 mt-1">Kaggle</p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Python</span>
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-800">Programming Language</span>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-slate-800">
                                <a
                                    href="https://www.kaggle.com/learn/certification/lthreen/python"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded"
                                >
                                    <span>Show credential</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>

            {/* Certificate Image Preview Modal */}
            {previewImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setPreviewImage(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={previewImage.title}
                >
                    <div
                        className="relative surface-card p-4 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
                            <h3 className="text-sm sm:text-base font-bold text-white truncate pr-4">
                                {previewImage.title}
                            </h3>
                            <button
                                onClick={() => setPreviewImage(null)}
                                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:rounded"
                                aria-label="Close certificate preview modal"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto flex items-center justify-center p-2 bg-slate-950/50 rounded-xl">
                            <img
                                src={previewImage.src}
                                alt={previewImage.title}
                                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
