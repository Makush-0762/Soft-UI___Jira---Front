import React from "react";

export default function Input ({type, className, name, id, placeholder, value, onClick, onChange}) {

    return(
        <>
            <input className={className} type={type} onChange={onChange} name={name} id={id} value={value} placeholder={placeholder} onClick={onClick}/>
        </>
    )

    
}