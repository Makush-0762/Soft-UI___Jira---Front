import React from "react";
import HeaderInside from "../components/header/HeaderInside";
import Main1nside from "../components/main/Main1nside";
// import Sidebar from "../components/main/Sidebar/Sidebar";


export default function LayoutInside ({children}){

    return(
        <>
            <HeaderInside/>
                <Main1nside>
                    {children}
                </Main1nside>
        </>
    )
}