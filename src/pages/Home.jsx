import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import ReactCardFlip from "react-card-flip";
import Cards from "../components/Cards";
import CardsBehind from "../components/CardsBehind";

const SOCIAL_LINKS = [
    { name: "GitHub", href: "https://github.com/timothyjohan", icon: "/github.png", hoverBorder: "hover:border-slate-500" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/timothyjohan/", icon: "/linkedin.webp", hoverBorder: "hover:border-sky-400" },
    { name: "LeetCode", href: "https://leetcode.com/u/timothyjohan11/", icon: "/leet-code.svg", hoverBorder: "hover:border-amber-400" }
];

const SKILL_PILLS = [
    "React / Vite",
    "Node.js / Express",
    "Agentic AI & Tool Calling",
    "Open-Source LLMs & Deployment",
    "Third-Party API Integration",
    "Model Tracing & Observability"
];

const STRENGTHS = [
    {
        title: "Fullstack Web",
        accent: "bg-sky-400",
        desc: "Modern SPAs and scalable backends using React, Vite, Node.js, Express, and MongoDB."
    },
    {
        title: "AI Engineering",
        accent: "bg-indigo-400",
        desc: "Agentic AI workflows, open-source model deployment, third-party API integration, and execution tracing."
    },
    {
        title: "UI/UX & Access",
        accent: "bg-emerald-400",
        desc: "Human-centered interfaces, accessible design systems, and responsive layouts."
    },
    {
        title: "Awards & Skills",
        accent: "bg-amber-400",
        desc: "3rd Place UC Hackfest 2024, Google Cloud Certified, NVIDIA DLI Certified."
    }
];

const SERVICES = [
    {
        title: "Web Design",
        img: "/web-design.webp",
        desc: "I design clean, modern web interfaces tailored to brand identities while ensuring structured typography, responsive layouts, and intuitive usability."
    },
    {
        title: "Backend Web",
        img: "/backend.png",
        desc: "Engineering reliable API architectures, robust authentication systems, and database integrations with MongoDB, SQL, and Node.js."
    },
    {
        title: "AI Engineering",
        img: "/work_4.png",
        desc: "Deploying open-source models, integrating third-party AI APIs, instrumenting telemetry tracing, and connecting custom inference endpoints into web applications."
    },
    {
        title: "Agentic AI Workflows",
        img: "/work_2.png",
        desc: "Architecting autonomous AI agents, tool-calling pipelines, structured multi-agent collaboration, and custom task execution loops."
    },
    {
        title: "Tutoring",
        img: "/cat-using-laptop.jpg",
        desc: "Providing structured programming tutoring, algorithms guidance, and web development fundamentals."
    },
    {
        title: "Graphic Design",
        img: "/graphic-design.webp",
        desc: "Creating clean digital assets, branding collateral, icons, and structured visual assets."
    },
    {
        title: "Video Production",
        img: "/video-editting.webp",
        desc: "Delivering video editing, title composition, pacing, color balance, and clear audio synchronization."
    }
];

const TOOLS = [
    {
        name: "Photoshop",
        type: "Design",
        img: "/photoshop.png",
        url: "https://www.adobe.com/products/photoshop.html",
        hoverColor: "group-hover:text-sky-400"
    },
    {
        name: "Premiere Pro",
        type: "Video",
        img: "/premiere-pro.png",
        url: "https://www.adobe.com/id_en/products/premiere.html",
        hoverColor: "group-hover:text-purple-400"
    },
    {
        name: "VS Code",
        type: "Code Editor",
        img: "/visual-studio.png",
        url: "https://code.visualstudio.com/",
        hoverColor: "group-hover:text-sky-400"
    },
    {
        name: "Android Studio",
        type: "Mobile Dev",
        img: "/android-studio.webp",
        url: "https://developer.android.com/studio",
        hoverColor: "group-hover:text-emerald-400"
    }
];

const PROJECTS = [
    {
        title: "Bunkasai ISTTS Event Portal",
        img: "/work_1.png",
        tags: ["React", "Event Portal", "Vercel"],
        desc: "A web portal facilitating competition registration, tenant management, and sponsorship proposal submissions for the Bunkasai ISTTS festival.",
        liveUrl: "https://bunkasai-istts.vercel.app/",
        githubUrl: null
    },
    {
        title: "LoL Strategy AI Guide",
        img: "/work_4.png",
        tags: ["OpenAI API", "GPT-4"],
        desc: "AI-assisted strategy guide utilizing GPT-4 to analyze champion matchups and tactical lane advice.",
        liveUrl: null,
        githubUrl: "https://github.com/timothyjohan/league-of-legends-lane-guide-backend"
    },
    {
        title: "Mate Diary",
        img: "/work_3.1.png",
        tags: ["Fullstack", "Genealogy Tree"],
        desc: "Platform for animal breeders to track breeding logs, health records, and dynamic lineage trees.",
        liveUrl: null,
        githubUrl: "https://github.com/timothyjohan/14_Cruixx_Mate-Diary"
    },
    {
        title: "Besties Messenger",
        img: "/work_2.png",
        tags: ["Node / Express", "MongoDB"],
        desc: "Functional chat messenger modeled after LINE, supporting real-time messaging and MongoDB data.",
        liveUrl: null,
        githubUrl: "https://github.com/timothyjohan/line_mockup_besties"
    }
];

export default function Home() {
    const [isFlipped, setIsFlipped] = useState(Array(7).fill(false));
    const [previewImage, setPreviewImage] = useState(null);

    const handleClick = (index) => {
        setIsFlipped((prev) => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

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
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5 flex justify-center order-1 md:order-2">
                        <Fade triggerOnce>
                            <div className="relative group">
                                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/30 to-indigo-500/20 blur opacity-40 group-hover:opacity-75 transition duration-500" />
                                <div className="relative surface-card p-3 sm:p-4 rounded-3xl flex flex-col items-center justify-center border-slate-700/60 shadow-2xl">
                                    <img
                                        src="/timothy.webp"
                                        alt="Timothy Johan"
                                        className="w-52 sm:w-64 md:w-72 lg:w-80 object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.01]"
                                    />
                                    <div className="mt-3 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <span className="text-xs font-medium text-gray-200">Open to Projects & Roles</span>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="md:col-span-7 text-center md:text-left space-y-6 order-2 md:order-1">
                        <Fade cascade triggerOnce>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                                Portfolio & Engineering
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                I am <span className="text-gradient">Timothy Johan</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl">
                                AI Engineer, Fullstack Web Developer, and UI/UX Designer building agentic AI systems, deploying open-source models, and integrating third-party APIs into high-performance web applications.
                            </p>

                            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start pt-1">
                                {SKILL_PILLS.map((pill) => (
                                    <span key={pill} className="tag-pill px-3.5 py-1.5 rounded-lg text-xs text-sky-300 font-medium">
                                        {pill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-3">
                                <a
                                    href="#my_work"
                                    className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2 hover:-translate-y-0.5 focus-visible:rounded-xl"
                                >
                                    <span>Explore Featured Works</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a
                                    href="#contact"
                                    className="px-6 py-3.5 rounded-xl surface-card surface-card-hover text-gray-200 hover:text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2 focus-visible:rounded-xl"
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

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Fade triggerOnce>
                    <div className="surface-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto text-center border-slate-800">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Profiles & Repositories</h2>
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                            {SOCIAL_LINKS.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 ${item.hoverBorder} transition-all group focus-visible:rounded-xl shadow-sm hover:-translate-y-0.5`}
                                >
                                    <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-semibold text-gray-200 group-hover:text-white">{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </Fade>
            </section>

            <section id="about_me" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <Fade cascade triggerOnce>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                                Engineering with <span className="text-gradient">Purpose & Craft</span>
                            </h2>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                I specialize in frontend web development, user experience design, and machine learning integration. I approach every build from the user perspective: making interfaces intuitive, accessible, and fast across devices while writing structured, maintainable code.
                            </p>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                With a background in Computer Science and hands-on engineering experience, I architect autonomous agentic AI workflows, deploy and maintain open-source models in production, integrate third-party APIs, and set up end-to-end tracing and telemetry pipelines.
                            </p>
                        </Fade>
                    </div>

                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Fade cascade triggerOnce>
                            {STRENGTHS.map((strength) => (
                                <div key={strength.title} className="surface-card p-5 rounded-2xl surface-card-hover space-y-2 border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${strength.accent}`} />
                                        <h3 className="text-sm sm:text-base font-bold text-white">{strength.title}</h3>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                        {strength.desc}
                                    </p>
                                </div>
                            ))}
                        </Fade>
                    </div>
                </div>
            </section>

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
                        {SERVICES.map((service, index) => (
                            <ReactCardFlip
                                key={service.title}
                                isFlipped={isFlipped[index]}
                                flipDirection="horizontal"
                                flipSpeedBack={0.3}
                                flipSpeedFront={0.3}
                            >
                                <Cards
                                    onclick={() => handleClick(index)}
                                    title={service.title}
                                    img={service.img}
                                />
                                <CardsBehind
                                    onclick={() => handleClick(index)}
                                    title={service.title}
                                    desc={service.desc}
                                />
                            </ReactCardFlip>
                        ))}
                    </Fade>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Fade triggerOnce>
                    <div className="surface-card rounded-3xl p-8 sm:p-12 text-center border-slate-800">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
                            Development & Creative Tools
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {TOOLS.map((tool) => (
                                <a
                                    key={tool.name}
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="surface-card p-6 rounded-2xl surface-card-hover flex flex-col items-center gap-3 group focus-visible:rounded-2xl"
                                    aria-label={tool.name}
                                >
                                    <img src={tool.img} alt={tool.name} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
                                    <span className={`text-sm font-semibold text-gray-200 ${tool.hoverColor} transition-colors`}>{tool.name}</span>
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-gray-400 border border-slate-800">{tool.type}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </Fade>
            </section>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <Fade cascade direction="up" triggerOnce>
                        {PROJECTS.map((project) => (
                            <div
                                key={project.title}
                                className="surface-card rounded-2xl overflow-hidden surface-card-hover flex flex-col justify-between group border-slate-800"
                            >
                                <div>
                                    <div className="relative overflow-hidden h-52 sm:h-60 bg-slate-950">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 space-y-3">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 font-medium border border-slate-800"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {project.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 pt-0 flex items-center gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 hover:border-sky-400 transition-all text-xs font-bold focus-visible:rounded"
                                        >
                                            <span>Visit Live Website</span>
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:rounded py-1"
                                        >
                                            <span>View Source Code</span>
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </section>

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
                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4 border-slate-800">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0 shadow-sm">
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

                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4 border-slate-800">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0 shadow-sm">
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

                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4 border-slate-800">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0 shadow-sm">
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

                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4 border-slate-800">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0 text-amber-400 shadow-sm">
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

                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4 border-slate-800">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0 shadow-sm">
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

                        <div className="surface-card rounded-2xl p-6 surface-card-hover flex flex-col justify-between space-y-4 border-slate-800">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 flex-shrink-0 shadow-sm">
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

            {previewImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setPreviewImage(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={previewImage.title}
                >
                    <div
                        className="relative surface-card p-4 sm:p-6 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border-slate-700"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
                            <h3 className="text-sm sm:text-base font-bold text-white truncate pr-4">
                                {previewImage.title}
                            </h3>
                            <button
                                onClick={() => setPreviewImage(null)}
                                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400"
                                aria-label="Close certificate preview modal"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto flex items-center justify-center p-2 bg-slate-950/70 rounded-xl">
                            <img
                                src={previewImage.src}
                                alt={previewImage.title}
                                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
