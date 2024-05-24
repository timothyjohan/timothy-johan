import { Fade } from "react-awesome-reveal";
import Cards from "../components/Cards";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import CardsBehind from "../components/CardsBehind";

export default function Home(){
    const [isFlipped, setIsFlipped] = useState(Array(5).fill(false));

    const handleClick = (index) => {
        const newFlips = Array(5).fill(false);
        newFlips[index] = !isFlipped[index];
        setIsFlipped(newFlips);
    };

    const resetOthers = (index) => {
        const newFlips = Array(5).fill(false);
        newFlips[index] = true;
        setIsFlipped(newFlips);
    };

    return(
          <>  
            {/* Banner */}
            <div className="bg-[#222831] min-h-[60vh] items-center grid grid-cols-1 gap-y-0 xl:grid-cols-2 md:grid-cols-2 mb-20">
                <div className="mx-10">
                    <Fade cascade triggerOnce>
                        <img src="/timothy.webp" alt="" srcset="" className="max-w-48 mx-auto xl:max-w-96 md:max-w-80 mb-10 md:mb-0" />
                    </Fade>
                </div>
                <div className="text-center xl:text-justify md:text-justify text-3xl text-[#EEEEEE] -mt-44 grid grid-cols-1 xl:gap-y-3 xl:-mt-20 xl:text-6xl xl:mr-24 md:gap-y-3 md:-mt-20 md:text-6xl md:mr-16 mx-10">
                    <Fade cascade triggerOnce>
                        <p className="">Hello, I am</p> 
                        <p className="font-bold text-[#76ABAE]">Timothy Johan</p>
                        <p className="text-xl xl:text-3xl md:text-3xl">A Fullstack web developer, creative UI/UX designer and a partial graphic designer</p>
                    </Fade>
                </div>
            </div>

            {/* Find me */}
            <div className="mb-40 mx-10">
                <Fade triggerOnce>
                    <h1 className="text-center text-3xl font-bold mb-8 ">Find me on</h1>
                </Fade>
                    <div className="grid grid-cols-3 md:w-fit mx-auto">
                        <Fade cascade direction="right" triggerOnce>
                            <a href="https://github.com/timothyjohan" target="_blank" className="flex justify-center items-center md:mx-12">
                                <img src="/github.png" className="w-14" />
                            </a>
                            <a href="https://www.linkedin.com/in/timothyjohan/" target="_blank" className="flex justify-center items-center md:mx-12">
                                <img src="/linkedin.webp" className="w-14" />
                            </a>
                            <a href="https://leetcode.com/u/timothyjohan11/" target="_blank" className="flex justify-center items-center md:mx-12">
                                <img src="/leet-code.svg" className="w-14 h-14" />
                            </a>
                        </Fade>
                    </div>

            </div>

            {/* About me */}
            <div id="about_me" className="h-8"></div>
            <div className="mx-10 xl:mx-44" >
                <div className="text-justify text-5xl text-[#EEEEEE] grid xl:grid-cols-2 md:grid-cols-2">
                    <div className="mb-20 xl:order-1">
                        <Fade cascade triggerOnce>

                            <h1 className="font-bold mb-8">About <span className="text-[#76ABAE]">Me</span></h1>
                            <p className="text-xl mb-8">
                                I am passionate about frontend web development and <span className="font-bold">UI/UX design</span>. I strive to create intuitive and engaging user interfaces by <span className="italic">putting myself in the user's shoes</span>  to understand their needs and desires. My goal is to design experiences that are not only <span className="font-bold"> visually appealing</span> but also <span className="font-bold">highly functional and user-friendly</span>.
                            </p>
                            <p className="text-xl mb-8">
                                In addition to my focus on frontend development, I am also a dedicated <span className="font-bold">Computer Science</span> student with a keen interest in <span className="font-bold">machine learning</span>. I am continually expanding my knowledge and skills in this field, exploring how machine learning can be <span className="font-bold">integrated into web applications</span> to enhance user experiences and provide smarter solutions.
                            </p>
                            <p className="text-xl">
                                I am excited about the endless possibilities in the intersection of web development and artificial intelligence, and I am committed to staying at the forefront of these evolving technologies.
                            </p>
                        </Fade>
                    </div>
                    <div className="xl:order-2 md:mt-14 lg:ml-20 hidden md:block    ">
                        <Fade triggerOnce>
                            <img src="/blue-gear.webp" className="xl:w-80 w-60 ml-auto animate-spin" style={{animationDuration: '7s'}} />
                            <img src="/blue-gear.webp" className="xl:w-64 w-44 ml-auto mr-20 animate-spin" style={{animationDuration: '5s'}} />
                            <img src="/blue-gear.webp" className="xl:hidden md:block md:w-60 ml-auto animate-spin" style={{animationDuration: '6s'}} />

                        </Fade>
                    </div>
                    
                </div>

            </div>
            <div id="services" className="mb-5">

            </div>

            {/* What can I do? */}

            <div className="mt-24 lg:mt-40 mx-10 xl:mx-44">
                <h1 className="text-center font-bold text-3xl">What can I do for you?</h1>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-x-14 gap-y-14">
                    <Fade cascade direction="right" triggerOnce>
                        <ReactCardFlip isFlipped={isFlipped[0]} flipDirection="horizontal">
                            <Cards onclick={() => { handleClick(0); resetOthers(0); }} title="Web Design"  img="/web-design.webp"/>
                            <CardsBehind onclick={handleClick} title="Web Design" desc="I can help you design your web to your likings while still discussing with you about it"  img="/web-design.webp"/>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[1]} flipDirection="horizontal">
                            <Cards onclick={() => { handleClick(1); resetOthers(1); }} title="Backend Web Programming"  img="/backend.png"/>
                            <CardsBehind onclick={handleClick} title="Backend Web Programming" desc="Not feeling appreciated for what you did because it has no visual impact? don't worry I'll take it from here" img="/backend.png"/>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[2]} flipDirection="horizontal">
                            <Cards onclick={() => { handleClick(2); resetOthers(2); }} title="Tutoring"  img="/cat-using-laptop.jpg"/>
                            <CardsBehind onclick={handleClick} title="Tutoring" desc="You don't know what you're doing? don't worry I can help you understand it even though I'll have to learn it first. I assure you that you won't leave with nothing!" img="/cat-using-laptop.jpg"/>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[3]} flipDirection="horizontal">
                            <Cards onclick={() => { handleClick(3); resetOthers(3); }} title="Graphic Design"  img="/graphic-design.webp"/>
                            <CardsBehind onclick={handleClick} title="Graphic Design" desc="When you have an idea but your sketch is not like what you thought of, I'm here for you" img="/graphic-design.webp"/>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={isFlipped[4]} flipDirection="horizontal">
                            <Cards onclick={() => { handleClick(4); resetOthers(4); }} title="Video Editting" img="/video-editting.webp"/>
                            <CardsBehind onclick={handleClick} title="Video Editting" desc="I can do basic video editting that includes captioning and transitions" img="/video-editting.webp"/>
                        </ReactCardFlip>


                    </Fade>
                    
                    
                </div>
            </div>

            
            {/* Apps that helped me */}
            <div className="mt-24 lg:mt-40 mx-10 xl:mx-44">
                <h1 className="text-3xl text-center font-bold mb-10">
                    Useful <span className="text-[#76ABAE]">Apps</span> that helped me

                </h1>
                <div className="grid grid-cols-3 md:w-fit mx-auto gap-y-5 md: grid-cols-4">
                    <Fade cascade direction="right" triggerOnce>
                        <a href="https://www.adobe.com/products/photoshop.html" target="_blank" className="flex justify-center items-center md:mx-12">
                            <img src="/photoshop.png" className="w-14 rounded-full" />
                        </a>
                        <a href="https://www.adobe.com/id_en/products/premiere.html" target="_blank" className="flex justify-center items-center md:mx-12">
                            <img src="/premiere-pro.png" className="w-14 rounded-full" />
                        </a>
                        <a href="https://code.visualstudio.com/" target="_blank" className="flex justify-center items-center md:mx-12">
                            <img src="/visual-studio.png" className="w-14 h-14 rounded-full" />
                        </a>
                        <a href="https://developer.android.com/studio" target="_blank" className="flex justify-center items-center md:mx-12">
                            <img src="/android-studio.webp" className="w-14 h-14 rounded-full" />
                        </a>
                    </Fade>
                </div>
            </div>
            <div className="h-[30vh]">

            </div>
        </>
    )
}