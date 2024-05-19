export default function Navbar(){
    return(
        <>
            <div className="h-20 xl:mx-20 grid grid-cols-5 xl:grid-cols-2">
                <div className="my-auto">
                    <img src="/ado.jpg" className="xl:w-14 w-0 hide rounded-full" />
                </div>
                <div className="my-auto grid grid-cols-3 text-[#EEEEEE] font-bold col-span-4 xl:col-span-1">
                    <div><a href="#about_me">About Me</a></div>
                    <div>Experience</div>
                    <div>My Projects</div>
                </div>
            </div>
        </>
    )
}