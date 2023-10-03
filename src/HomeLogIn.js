import React from "react";
import Layout from "./layaut/Layout";
import Div from "./elements/Div";
import './layaut/HomeLogIn.css'
import H1 from "./elements/H1";
import A from "./elements/A";
import Form from "./elements/Form";
import Input from "./elements/Input";
import Img from "./elements/Img";
import HomeLogIn_Img from "./img/HomeLogIn_Img.webp"
import google from "./img/google.png"
import github from "./img/github.png"
import {Link} from 'react-router-dom';

export default function HomeLogIn () {
    
    
    return (
        <>
            <Layout>
                <Div className='bodyMainLogIn'>
                    <Div className='_container body_Home'>
                        <Div className='bodyTitle_name'>
                            <H1 className='titleLogin'>Tim-Lid також людина, і до кожно бігати і говорити, що йому робити, не буде. То ж для цього і тре ця помагалочка.<br/> Заходь, клієнт чекає)))</H1>
                                <Form className='InSideForm'>
                                    <Input className='inputLogIn' placeholder='Username' />
                                    <Input className='inputLogIn' placeholder='Password' />
                                </Form>
                                <Div className='register'>
                                    <Link to='/register'>Зареєструватись?</Link>
                                    <A href='#' className='LogIn'>Чекнути таск</A>
                                </Div>
                                <Div className='otherLogIn'>
                                    <A href='#'><Img src={google}/></A>
                                    <A href='#'><Img src={github}/></A>
                                </Div>
                        </Div>
                        <Div className='body_img_home'>
                            <Img src={HomeLogIn_Img} className='img_home'/>
                        </Div>
                    </Div>
                </Div>
            </Layout>
        </>
    );
}