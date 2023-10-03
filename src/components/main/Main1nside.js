import React, {useState} from "react";
import './Main1nside.css';
import Sidebar from './Sidebar/Sidebar';

export default function Main1nside ({children, style}) {

    const [animateContent, setAnimateContent] = useState(false);

    return (
        <>
            <main style={style} className={`main ${animateContent ? 'animateContent' : ''}`}>
                <Sidebar setAnimateContent={setAnimateContent} />
                {children}
            </main>
        </>
    )
}

