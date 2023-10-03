import React from "react";
import Layout from "./layaut/Layout";
import Div from "./elements/Div";
import './layaut/HomeRegicter.css'
import H1 from "./elements/H1";
import Form from "./elements/Form";
import Input from "./elements/Input";
import Img from "./elements/Img";
import HomeLogIn_Img from "./img/HomeLogIn_Img.webp"
import google from "./img/google.png"
import github from "./img/github.png"
import {Link} from 'react-router-dom';

export default function HomeRegicter () {
    
    
    return (
        <>
            <Layout>
                <Div className='bodyMainLogIn'>
                    <Div className='_container body_Home'>
                        <Div className='bodyTitle_name'>
                                <Form className='fotmInput'>
                                    <Input className='inputLogIn' placeholder='Email' />
                                    <Input className='inputLogIn' placeholder='Password' />
                                    <Input className='inputLogIn' placeholder='Onse more password' />
                                </Form>
                                <Div className='register'>
                                    <Link to='/' className='Registration'>Реєстрація</Link>
                                </Div>
                                <Div className='otherLogIn'>
                                    <Link to='/'><Img src={google}/></Link>
                                    <Link to='/'><Img src={github}/></Link>
                                </Div>
                        </Div>
                        <Div className='body_img_home'>
                            <H1 className='titleRegister'>Біжи працюй!)))</H1>
                        </Div>
                    </Div>
                </Div>
            </Layout>
        </>
    );
}