import React from "react";

export default function LI ({children, className, onClick}) {

    return(
        <>
            <li className={className} onClick={onClick}>
                {children}
            </li>
        </>
    ) 
}