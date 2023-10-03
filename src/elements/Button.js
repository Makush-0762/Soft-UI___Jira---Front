import React from "react";

export default function Button ({children, className, onClick}) {

    return(
        <>
            <div className={className} onClick={onClick}>
                {children}
            </div>
        </>
    ) 
} 