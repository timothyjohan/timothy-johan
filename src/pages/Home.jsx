import { Fade } from "react-awesome-reveal";

export default function Home(){
    return(
        <>  
            <div className="bg-[#222831] min-h-[60vh] items-center grid grid-cols-1 gap-y-0 xl:grid-cols-2 md:grid-cols-2 mb-40">
                <div className="mx-10">
                    <Fade cascade>
                        <img src="/timothy.webp" alt="" srcset="" className="max-w-48 mx-auto xl:max-w-96 md:max-w-80" />
                    </Fade>
                </div>
                <div className="text-center xl:text-justify md:text-justify text-3xl text-[#EEEEEE] -mt-44 grid grid-cols-1 xl:gap-y-3 xl:-mt-20 xl:text-6xl xl:mr-24 md:gap-y-3 md:-mt-20 md:text-6xl md:mr-16 mx-10">
                    <Fade cascade>
                        <p className="">Hello, I am</p> 
                        <p className="font-bold text-[#76ABAE]">Timothy Johan</p>
                        <p className="text-xl xl:text-3xl md:text-3xl">A Fullstack web developer creative UI/UX designer and a partial graphic designer</p>
                    </Fade>
                </div>
            </div>

            <div className="mx-10 xl:mx-44">
                <div className="text-justify text-3xl text-[#EEEEEE] grid xl:grid-cols-2 md:grid-cols-2">
                    <div className="mb-20 xl:order-1">
                        <h1 className="font-bold mb-8">About <span className="text-[#76ABAE]">Me</span></h1>
                        <p className="text-xl mb-8">
                            I am passionate about frontend web development and <span className="font-bold">UI/UX design</span>. I strive to create intuitive and engaging user interfaces by <span className="italic underline">putting myself in the user's shoes</span>  to understand their needs and desires. My goal is to design experiences that are not only <span className="font-bold"> visually appealing</span> but also <span className="font-bold">highly functional and user-friendly</span>.
                        </p>
                        <p className="text-xl mb-8">
                            In addition to my focus on frontend development, I am also a dedicated <span className="font-bold">Computer Science</span> student with a keen interest in <span className="font-bold">machine learning</span>. I am continually expanding my knowledge and skills in this field, exploring how machine learning can be <span className="font-bold">integrated into web applications</span> to enhance user experiences and provide smarter solutions.
                        </p>
                        <p className="text-xl">
                            I am excited about the endless possibilities in the intersection of web development and artificial intelligence, and I am committed to staying at the forefront of these evolving technologies.
                        </p>
                    </div>
                    <div className="xl:order-2 hide md:mt-20 lg:ml-20">
                        <img src="/blue-gear.webp" className="xl:w-80 w-60 ml-auto animate-spin" style={{animationDuration: '7s'}} />
                        <img src="/blue-gear.webp" className="xl:w-64 w-44 ml-auto mr-20 animate-spin" style={{animationDuration: '5s'}} />
                        <img src="/blue-gear.webp" className="xl:w-0 md:w-60 w-0 ml-auto animate-spin" style={{animationDuration: '6s'}} />
                    </div>
                    
                </div>

            </div>

            <div className="h-[100vh]">

            </div>
        </>
    )
}