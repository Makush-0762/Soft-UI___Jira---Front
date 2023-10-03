import React from "react";

export default function H1 ({children, className}) {

    return(
        <>
            <h1 className={className}>
                {children}
            </h1>
        </>
    ) 
}