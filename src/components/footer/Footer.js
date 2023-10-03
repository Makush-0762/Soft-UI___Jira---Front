import React from "react";
import Div from "../../elements/Div";
// import Nav from "../../elements/Nav";
// import UL from "../../elements/UL";
// import LI from "../../elements/LI";
import Img from "../../elements/Img";
import './Footer.css';
import logoFooter from "../../img/Jira-logo.png"
// import A from "../../elements/A";
import P from "../../elements/P";
import Form from "../../elements/Form";

export default function Footer () {
    
    return (
        <>
            <footer className="footer">
                <Div className="_container footer_footer">
                    <Div>
                        <Form action="#">
                            <P>
                                <select className="turnintodropdown">
                                    <option>Ру</option>
                                    <option>ЮА</option>
                                    <option>EN</option>
                                </select>
                            </P>
                        </Form>
                    </Div>
                    <Div>
                        <P className='titleBlockFooter'>Якийсь тайтл</P>
                        <P className='SubtitleBlockFooter'>Якийсь текст</P>
                    </Div>
                    <Div>
                        <Img className='logoFooter' src={logoFooter} />
                    </Div>
                    <Div>
                        <P className='titleBlockFooter'>Якийсь тайтл</P>
                        <P className='SubtitleBlockFooter'>Якийсь текст</P>
                    </Div>
                    <Div>
                        <P className='titleBlockFooter'>Якийсь тайтл</P>
                        <P className='SubtitleBlockFooter'>Якийсь текст</P>
                    </Div>
                </Div>
            </footer>
        </>
    );
}