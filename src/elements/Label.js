import React from "react";

export default function Label ({children, className, htmlFor}) {
    
    return (
        <>
            <label className={className} htmlFor={htmlFor} >
                {children}
            </label>
        </>
    );
}