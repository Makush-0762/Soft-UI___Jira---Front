import React from "react";

export default function Input ({type, className, name, id, placeholder, value, onClick}) {

    return(
        <>
            <input className={className} type={type} name={name} id={id} value={value} placeholder={placeholder} onClick={onClick}/>
        </>
    )

    
}