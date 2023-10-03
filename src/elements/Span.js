import React from "react";

export default function Span ({children, className, style}) {
    
    return (
        <>
            <span className={className} style={style}>
                {children}
            </span>
        </>
    );
}