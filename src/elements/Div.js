import React from "react";

export default function Div ({children, className, onClick,onMouseEnter, onMouseLeave, style, contenteditable}) {

    return(
        <>
            <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} style={style} contenteditable={contenteditable}>
                {children}
            </div>
        </>
    ) 
}