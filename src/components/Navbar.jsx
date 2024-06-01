export default function Navbar(){
    return(
        <>
            <div className="h-20 xl:mx-20 md:mx-10 grid grid-cols-5 xl:grid-cols-2">
                <div className="my-auto">
                    {/* <img src="/ado.jpg" className="xl:w-14 md:w-14 w-0 rounded-full" /> */}
                </div>
                <div className="my-auto grid grid-cols-3 text-[#EEEEEE] font-bold col-span-4 xl:col-span-1 ml-auto mr-10 xl:mr-0">
                    <div ><a href="#about_me">About Me</a></div>
                    <div ><a href="#services">My Services</a></div>
                    <div ><a href="#my_work" className="ml-2 md:ml-4">My Works</a></div>
                    {/* <div>My Projects</div> */}
                </div>
            </div>
            
        </>
    )
}
