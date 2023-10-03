import React from "react";

export default function Nav ({children, className}) {

    return(
        <>
            <nav className={className}>
                {children}
            </nav>
        </>
    ) 
}