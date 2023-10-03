import React from "react";
import Div from "../../elements/Div";
import Nav from "../../elements/Nav";
import UL from "../../elements/UL";
import LI from "../../elements/LI";
import Img from "../../elements/Img";
import './Header.css';
import logo from "../../img/Jira-logo.png"
import A from "../../elements/A";
import {Link} from 'react-router-dom';

export default function Header () {
    
    
    return (
        <>
            <header className="_container header">
                <Div>
                    <Nav className='header_nav'>
                        <Div className={'blockLogo'}>
                            <Div >
                                <Link to='/'><Img src={logo} className='logo'/></Link>
                            </Div>
                            <UL className={'listHeader'}>
                                <LI className='list_Item'><Link className='list_Link' to='/'>Головна</Link></LI>
                                <LI className='list_Item'><Link className='list_Link' to='/'>Гайд</Link></LI>
                                <LI className='list_Item'><Link className='list_Link' to='/'>Про нас</Link></LI>
                            </UL>
                        </Div>
                        <Div>
                            <Div className='header_button_body'>
                                <Link className='heder_button' to='/projects/jira'>Перейти до своїх дошок</Link>
                            </Div>
                        </Div>
                    </Nav>
                </Div>
            </header>
        </>
    );
}