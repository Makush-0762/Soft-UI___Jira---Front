import React from "react";

export default function UL ({children, className}) {

    return(
        <>
            <ul className={className}>
                {children}
            </ul>
        </>
    ) 
}