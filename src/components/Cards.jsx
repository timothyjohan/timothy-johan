import { useState } from "react";

export default function Cards(props){

    return(
        <>
            <div onClick={props.onclick} tabIndex={0} onBlur={() => setIsClicked(false)}  className="max-w-xs rounded-xl shadow bg-[#222831] hover:scale-110 focus:opacity-0 focus:duration-300 transition duration-300 drop-shadow-md shadow-lg border border-zinc-800 md:h-[45vh] lg:h-[35vh] xl:h-[40vh]">
                <img class="rounded-t-lg" src={props.img} alt="" className="h-60 object-cover w-full rounded-t-xl" />

                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{props.title}</h5>
                </div>
            </div>
        </>
    )
}