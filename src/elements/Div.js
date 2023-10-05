import React from "react";

export default function Div ({children, className, onClick,onMouseEnter, onMouseLeave, style, contentEditable}) {

    return(
        <>
            <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} style={style} contentEditable={contentEditable}>
                {children}
            </div>
        </>
    ) 
}