import { Fade } from "react-awesome-reveal";

export default function Home(){
    return(
        <>  
            <div className="bg-[#222831] min-h-[60vh] items-center grid grid-cols-1 gap-y-0 xl:grid-cols-2 md:grid-cols-2">
                <div className="">
                    <Fade cascade>
                        <img src="/timothy.webp" alt="" srcset="" className="max-w-48 mx-auto xl:max-w-96 md:max-w-80" />
                    </Fade>
                </div>
                <div className="text-center xl:text-justify md:text-justify text-3xl text-[#EEEEEE] -mt-44 grid grid-cols-1 xl:gap-y-3 xl:-mt-20 xl:text-6xl xl:mr-24 md:gap-y-3 md:-mt-20 md:text-6xl md:mr-16">
                    <Fade cascade>
                        <p className="">Hello, I am</p> 
                        <p className="font-bold text-[#76ABAE]">Timothy Johan</p>
                        <p className="text-xl xl:text-3xl md:text-3xl">A Fullstack web developer creative UI/UX designer and a partial graphic designer</p>
                    </Fade>
                </div>
            </div>

            <div className="h-[100vh]">

            </div>
        </>
    )
}