import React from "react";
import "../components/header/Header.css"

export default function Img ({className, alt, src, onClick}) {

    return(
        <>
            <img className={className} alt={alt} src={src} onClick={onClick}/>
        </>
    ) 
}