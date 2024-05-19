import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Template(){
    return(
        <>
            <Navbar />
            <Outlet></Outlet>
        </>
    )
}