import React from "react";

export default function A ({children, className, href}) {

    return(
        <>
          <a className={className} href={href}>
                {children}
            </a>
        </>
    ) 
}