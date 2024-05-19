export default function Footer(){
    return(
        <>
            <div className="h-44 bg-[#222831] p-10 grid grid-cols-5">
                <div className="col-span-4">
                    <h1>Contact me :</h1>
                    <div className="flex mt-4">
                        <img src="/email-logo.webp" className="w-6 mr-2 rounded-full"/>
                        <p>timothyjohan11@gmail.com</p>
                    </div>
                    <div className="flex mt-4">
                        <img src="/whatsapp.webp" className="w-6 h-6 mr-2 rounded-full"/>
                        <p>+62 81259488478</p>
                    </div>
                </div>
                <div className="ml-auto hidden lg:block">
                    <p>	&copy; Timothy Johan</p>
                </div>
            </div>
        </>
    )
}