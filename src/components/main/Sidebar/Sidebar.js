import React, {useEffect, useState}  from "react";
import './Sidebar.css';
import Div from "../../../elements/Div"
import Img from "../../../elements/Img"
import Accordion from 'react-bootstrap/Accordion';
// import UL from "../../../elements/UL";
// import LI from "../../../elements/LI";
import A from "../../../elements/A";
import P from "../../../elements/P";
import projectIcon from "../../../img/10402.svg"
import cart from "../../../img/Cart.png"
import backlog from "../../../img/Backlog.png"
import board from "../../../img/Board.png"
import code from "../../../img/Code.png"
import arrow_left from "../../../img/arrow_left.png"
import arrow_right from "../../../img/arrow_right.png"
import stProject from "../../../img/strProject.png"
import addLanguage from "../../../img/AddLanguage.png"
import settings from "../../../img/setting.png"
import { Link } from "react-router-dom";

export default function Sidebar ({ setAnimateContent }) {

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemIndex) => {
        if (activeItem === itemIndex) {
            setActiveItem(null);
        } else {
            setActiveItem(itemIndex);
        }
    };

    const [svipe, setSvipe] = useState(false)

    function handlerSvipe() {
        return () => {
            setSvipe(prevState => !prevState);
            setAnimateContent(prevState => !prevState)
        }
    }

    const svipeMenuIMgCenterFP = `ImgProgect ${ svipe ? 'svipeMenuImgProjCenter' : ''}`;
    const svipeMenuIMgCenter = `ImgProgectItem ${ svipe ? 'svipeMenuImgCenter' : ''}`;
    const button_svipe = `button_svipe ${ svipe ? 'button_svipePos' : ''}`;
    const linkSidebarActive = `linkSidebar ${ svipe ? "linkSidebarActive" : ""}`
    return (
        <>
            <Div className={`sidebar ${svipe ? 'animateSidebar' : ''}`}>
                <Div className={button_svipe} onClick={handlerSvipe()}>
                    <P>
                        { svipe ? <Img src={arrow_right} alt='button_svipe' className="icon_svipe"/> : <Img src={arrow_left} alt='button_svipe' className="icon_svipe"/>}
                        
                    </P>
                </Div>
                
                    <Div className="bodySidebar">
                        <Div className = {`bodyProjectName ${ svipe ? 'bodyProjectNameNonPad linkSidebarActive' : ''}`} >
                            
                            <Img src={projectIcon} className = {`ImgProgect ${svipeMenuIMgCenterFP}`}/>
                            <Div  className={` ${svipe ? 'svipeDisplayNone' : ''}`}>
                                <P className='TitleProject'><strong>Jira</strong></P>
                                <P className='descriptionProject'>Проект по розробці ПЗ</P>
                            </Div>
                        </Div>
                        <Div className={` planesSidbar ${svipe ? 'padNon' : ''}`}>
                            <h3 className={` titleBlock ${svipe ? 'svipeDisplayNone' : ''}`}>Планування</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" ><Link to="/projects" className={linkSidebarActive}><Img src={cart} className = {`${svipeMenuIMgCenter}`}/><span className={` ${svipe ? 'svipeDisplayNone' : ''}`}>Проекти</span></Link></li>
                                <li className="list-group-item" ><Link to="/projects" className={linkSidebarActive}><Img src={backlog} className = {`${svipeMenuIMgCenter}`}/><span className={` ${svipe ? 'svipeDisplayNone' : ''}`}>Беклог</span></Link></li>
                                <li className="list-group-item" ><Link to="/projects" className={linkSidebarActive}><Img src={board} className = {`${svipeMenuIMgCenter}`}/><span className={` ${svipe ? 'svipeDisplayNone' : ''}`}>Дошка</span></Link></li>
                            </ul>
                        </Div>
                        <hr/>
                        <Div className={` planesSidbar secondPlanesSidbar ${svipe ? 'padNon' : ''}`}>
                            <h3 className={` titleBlock ${svipe ? 'svipeDisplayNone' : ''}`}>Розробка</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{borderBottom:'none'}}><A href='#' className={linkSidebarActive}><Img src={code} className = {`${svipeMenuIMgCenter}`}/><span className={` ${svipe ? 'svipeDisplayNone' : ''}`}>Код</span></A></li>
                            </ul>
                        </Div>
                        <hr/>
                        <Div className={` planesSidbar ${svipe ? 'padNon' : ''}`}>
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item" style={{borderBottom:'none'}}><A href='#' className={linkSidebarActive}><Img src={stProject} className = {`${svipeMenuIMgCenter}`}/><span className={` ${svipe ? 'svipeDisplayNone' : ''}`}>Сторінка проекту</span></A></li>
                                <li className="list-group-item" style={{borderBottom:'none'}}><A href='#' className={linkSidebarActive}><Img src={addLanguage} className = {`${svipeMenuIMgCenter}`}/><span className={` ${svipe ? 'svipeDisplayNone' : ''}`}>Додати ярлик</span></A></li>
                                <li className="list-group-item" style={{borderBottom:'none'}}><A href='#' className={linkSidebarActive}><Img src={settings} className = {`${svipeMenuIMgCenter}`}/><span className={` ${svipe ? 'svipeDisplayNone' : ''}`}>Налагодження пректу</span></A></li>
                            </ul>
                        </Div>
                    </Div>
                    <Div className={`'bodyBottomTitle' ${svipe ? 'svipeDisplayNone' : ''}`}>
                        <P className='bottomTitle' style={{textAlign:'center'}}>Цей прект керується командою</P>
                        <P className='bottomLink' style={{textAlign:'center'}}>Подробиці</P>
                    </Div>
            </Div>
        </>
    )
}

