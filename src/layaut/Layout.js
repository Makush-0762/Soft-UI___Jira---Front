import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";

export default function Layout ({children}) {

    return(
        <>
            <Header/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </>
    ) 
}