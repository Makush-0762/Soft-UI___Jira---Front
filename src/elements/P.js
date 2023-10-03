import React from "react";


export default function P ({className, children, style, onClick, title}) {
    
    return (
        <>
            <p className={className} style={style} onClick={onClick} title={title}>
                {children}
            </p>
        </>
    );
}