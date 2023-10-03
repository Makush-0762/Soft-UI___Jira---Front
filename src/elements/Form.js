import React from "react";

export default function Form ({children, className, method, action}) {

    return(
        <>
            <form className={className} method={method} action={action}>
                {children}
            </form>
        </>
    ) 
}