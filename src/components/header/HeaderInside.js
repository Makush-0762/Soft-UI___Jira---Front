import React, {useEffect, useState} from "react";
import Div from "../../elements/Div";
import Nav from "../../elements/Nav";
import UL from "../../elements/UL";
import LI from "../../elements/LI";
import Img from "../../elements/Img";
import './HeaderInside.css';
import logo from "../../img/Jira-logo.png"
import magnifier from "../../img/magnifier.png"
import menu from "../../img/menu.png"
import A from "../../elements/A";
import Span from "../../elements/Span";
import Input from "../../elements/Input";
import Form from "../../elements/Form";
import Label from "../../elements/Label";
import message from "../../img/Mess.png";
import question from "../../img/question.png";
import settings from "../../img/setting.png";
import profile from "../../img/profile.png";
import arrow from "../../img/arrow.png";
import bobr from "../../img/bobr.jpg";
import add from "../../img/add.png";
import addPerson from "../../img/AddPerson.png";
import projectIcon from "../../img/10402.svg";
import filter from "../../img/filter.svg";
import dashboards from "../../img/dashboards.svg";
import circle from "../../img/Circle.webp";
import figma from "../../img/figma.webp";
import slack from "../../img/slack.png";

import {Link, useLocation  } from 'react-router-dom';
import { Col } from "react-bootstrap-v5";
import P from "../../elements/P";

export default function HeaderInside () {

    const location = useLocation();
    
    const [activItem, setActivItem] = useState(-1);
    const [tab, setTab] = useState(-1);

    const [assignedToMe, setAssignedToMe] = useState(false);
    const [hasData, setHasData] = useState(false);
    const [assignedToMeData, setAssignedToMeData] = useState([]);

    const [showDoca, setShowDoca] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //     // const data = ['<p>some data</p>', '<p>Onse more data </p>'];
    //     const data = null; // дані з бази даних
    //     setAssignedToMe(data);
    //     }, 1000);
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            // const data = ['<p>some data</p>', '<p>Onse more data </p>'];
            const data = null; // дані з бази даних
            setAssignedToMeData(data || []);
            setHasData(data !== null && data.length > 0);
        }, 1000);
    }, []);

    // function activeTab (index) {
    //     return () => {
    //             setTab(index); // Обнулити активний таб при зміні табу
    //         }
    //     }

    const activeTab = (index) => {
        setTab(index);
    };

        function HundlerActiveItem(index) {
            return () => {
                if (activItem === index) {
                    setActivItem(-1);
                } else {
                    setActivItem(index);
                    setTab(index);
                }
            };
        }

    
    return (
        <>
            <header className="headerInside">
                <Div className='logoBlock'>
                    <Div className='menu_icon item_menuIcon'>
                        <A href='#' className='menu_icon'><Img src={menu} className='menuImg'/></A>
                    </Div>
                    <Div className='item_menuIcon'>
                        <Link to='/'><Img src={logo} className='logo logo_Inside'/></Link>
                    </Div>
                </Div>
                <Div className='bodyList'> 
                    <Nav className='navBobyList'>
                        <Div className={location.pathname === '/projects/jira' ? 'bodyLink bodyLinkactive' : 'bodyLink'}>
                            <Div className={activItem === 1 ? 'body_link_Meny active' : 'body_link_Meny'} >
                                <Link to='/projects/jira' className="link_menu">
                                    Ваша робота 
                                </Link>
                                <Img src={arrow} alt='arrow' className='arrow' onClick={HundlerActiveItem(1)}/>
                                <Div className={`modalMenuItem ${activItem === 1 ? 'mMactive' : ''} ${!hasData ? 'noData' : ''}`}>
                                    <Div className="wrapper_modalMenu">
                                        <Div className="top_section">
                                            <Div className='tabs_body'>
                                                <Div className={tab === 1 ? 'tab_item active_tab' : 'tab_item'} onClick={() => activeTab(1)} ><P style={{margin:'0'}}>Призначено мені</P></Div>
                                                <Div className={tab === 2 ? 'tab_item active_tab' : 'tab_item'} onClick={() => activeTab(2)} ><P style={{margin:'0'}}>Недавні</P></Div>
                                                <Div className={tab === 3 ? 'tab_item active_tab' : 'tab_item'} onClick={() => activeTab(3)} ><P style={{margin:'0'}}>Дошки</P></Div>
                                            </Div>
                                        </Div>
                                        {assignedToMe ? (
                                            assignedToMe.map(myTask => (
                                                <Div className={tab === 1 ? 'content_section block_tab_active' : 'content_section'}>
                                                    <P>Дані із бази даних: на дизайн не дивіться, потім зверстаю</P>
                                                    <P>{myTask[0]}</P>
                                                </Div>
                                                ))
                                            ) : (
                                            <Div className={tab === 1 ? 'content_section withoutData block_tab_active' : 'content_section'}>
                                                <P>Призначених ще немає</P>
                                            </Div>
                                        )}

                                        {assignedToMe ? (
                                            assignedToMe.map(myTask => (
                                                <Div className={tab === 2 ? 'content_section block_tab_active' : 'content_section'}>
                                                    <P>Дані із бази даних: на дизайн не дивіться, потім зверстаю</P>
                                                    <P>{myTask.name}</P>
                                                </Div>
                                                ))
                                            ) : (
                                            <Div className={tab === 2 ? 'content_section withoutData block_tab_active' : 'content_section'}>
                                                <P>Виконаних ще немає</P>
                                            </Div>
                                        )}

                                        {assignedToMe ? (
                                            assignedToMe.map(myTask => (
                                                <Div className={tab === 3 ? 'content_section block_tab_active' : 'content_section'}>
                                                    <P>Дані із бази даних: на дизайн не дивіться, потім зверстаю</P>
                                                    <P>{myTask.name}</P>
                                                </Div>
                                                ))
                                            ) : (
                                            <Div className={tab === 3 ? 'content_section withoutData block_tab_active' : 'content_section'}>
                                                <P>Я вже заїбався із цими табами</P>
                                            </Div>
                                        )}

                                        <Div className="bottom_section">
                                            <Link to="/projects/" className="link_YourWork">Переглянути вашу роботу</Link>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div className={location.pathname === '/projects/' ? 'bodyLink bodyLinkactive' : 'bodyLink'}>
                            <Div className={activItem === 2 ? 'body_link_Meny active' : 'body_link_Meny'} >
                                <Link to='/projects/' className="link_menu">
                                    Пректи
                                </Link>
                                <Img src={arrow} alt='arrow' className='arrow' onClick={HundlerActiveItem(2)}/>
                                <Div className={`modalMenuItem ${activItem === 2 ? 'mMactive' : ''} ${!hasData ? 'noData' : ''}`}>
                                    <Div className="wrapper_modalMenu">
                                        <h3 className="title_projectModal">
                                            НЕДАВНІ
                                        </h3>
                                        <Link to="/projects/jira" className="link_projectItem">
                                            <Div className="body_projectItem">
                                                <Div className="body_img_projectItem">
                                                    <Img src={projectIcon} alt='#' className='ImgProgect'/>
                                                </Div>
                                                <Div className="title_subtitle_project">
                                                    <P className="title_project">Якийсь тайтл проекту</P>
                                                    <P className="subtitle_project">Якийсь сбтайтл проекту</P>
                                                </Div>
                                            </Div>
                                        </Link>

                                        <Div className="bottom_section">
                                            <Link to="/projects/" className="link_YourWork">Показати всі проекти</Link>
                                            <Link to="/projects/" className="link_YourWork">Створити проект</Link>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div className={location.pathname === '/' ? 'bodyLink bodyLinkactive' : 'bodyLink'}>
                            <Div className={activItem === 3 ? 'body_link_Meny active' : 'body_link_Meny'} >
                                <Link to='/' className="link_menu">
                                    Фільтри 
                                </Link>
                                <Img src={arrow} alt='arrow' className='arrow' onClick={HundlerActiveItem(3)}/>
                                <Div className={`modalMenuItem ${activItem === 3 ? 'mMactive' : ''} ${!hasData ? 'noData' : ''}`}>
                                    <Div className="wrapper_modalMenu">

                                            <Div className="body_img_filter">
                                                <Img src={filter} alt="filter"></Img>
                                                <P>Виконуйте пошук задач по проектам і берігайте із як фільтри (Це заглушка не тикай)</P>
                                                <P><Link to="/tu_ne_tukay" className="link_filter">Детальныше</Link></P>
                                            </Div>

                                        <Div className="bottom_section">
                                            <Link to="/projects/" className="link_YourWork">Перегляд всіх фільтрів</Link>
                                            <Link to="/projects/" className="link_YourWork">Перегляд всіх задач</Link>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div className={location.pathname === '/projects/jira' ? 'bodyLink bodyLinkactive' : 'bodyLink'}>
                            <Div className={activItem === 4 ? 'body_link_Meny active' : 'body_link_Meny'} >
                                <Link to='/projects/jira' className="link_menu">
                                    Дашбоарди 
                                </Link>
                                <Img src={arrow} alt='arrow' className='arrow' onClick={HundlerActiveItem(4)}/>
                                <Div className={`modalMenuItem ${activItem === 4 ? 'mMactive' : ''} ${!hasData ? 'noData' : ''}`}>
                                    <Div className="wrapper_modalMenu">

                                            <Div className="body_img_filter">
                                                <Img src={dashboards} alt="filter"></Img>
                                                <P>Створіть дашборд, щоб відслідковувати статус проектів (Це заглушка не тикай)</P>
                                                <P><Link to="/tu_ne_tukay" className="link_filter">Детальныше</Link></P>
                                            </Div>

                                        <Div className="bottom_section">
                                            <Link to="/projects/" className="link_YourWork">Показати всі дашборди</Link>
                                            <Link to="/projects/" className="link_YourWork">Створити дашборд</Link>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div className={location.pathname === '/projects/jira' ? 'bodyLink bodyLinkactive' : 'bodyLink'}>
                            <Div className={activItem === 5 ? 'body_link_Meny active' : 'body_link_Meny'} >
                                <Link to='/projects/jira' className="link_menu">
                                    Команди 
                                </Link>
                                <Img src={arrow} alt='arrow' className='arrow' onClick={HundlerActiveItem(5)}/>
                                <Div className={`modalMenuItem ${activItem === 5 ? 'mMactive' : ''} ${!hasData ? 'noData' : ''}`}>
                                    <Div className="wrapper_modalMenu">
                                        <h3 className="title_projectModal">
                                            ВАШІ КОЛЕГИ
                                        </h3>
                                        <Link to="/projects/jira" className="link_projectItem">
                                            <Div className="body_projectItem">
                                                <Div className="body_img_colegaItem">
                                                    <Img src={bobr} alt='#' className='icon_colega'/>
                                                </Div>
                                                <Div className="title_subtitle_colega">
                                                    <P className="title_project">Бобер Бобровський</P>
                                                </Div>
                                            </Div>
                                        </Link>
                                        <Div className="bottom_section">
                                            <Link to="/projects/" className="link_YourWork addUser">
                                                <Div className="body_add">
                                                    <Div className="body_add">
                                                        <Img src={add} alt='#' className='icon_add'/>
                                                    </Div>
                                                    <Div className="title_subtitle_colega">
                                                        <P className="title_project">Запросити користувача до Jira</P>
                                                    </Div>
                                                </Div>
                                            </Link>
                                            <Link to="/projects/" className="link_YourWork addUser">
                                                <Div className="body_add">
                                                    <Div className="body_add">
                                                        <Img src={addPerson} alt='#' className='icon_create'/>
                                                    </Div>
                                                    <Div className="title_subtitle_colega">
                                                        <P className="title_project">Створити команду</P>
                                                    </Div>
                                                </Div>
                                            </Link>
                                        </Div>
                                        <Div className="bottom_section">
                                            <Link to="/projects/" className="link_YourWork">Знайти людей і команди</Link>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div className={location.pathname === '/projects/jira' ? 'bodyLink bodyLinkactive' : 'bodyLink'}>
                            <Div className={activItem === 6 ? 'body_link_Meny active' : 'body_link_Meny'} >
                                <Link to='/projects/jira' className="link_menu">
                                    Програми 
                                </Link>
                                <Img src={arrow} alt='arrow' className='arrow' onClick={HundlerActiveItem(6)}/>
                                <Div className={`modalMenuItem ${activItem === 6 ? 'mMactive' : ''} ${!hasData ? 'noData' : ''}`}>
                                    <Div className="wrapper_modalMenu">
                                        <h3 className="title_projectModal">
                                            РЕКОМЕНДУЄТЬСЯ ДЛЯ ВАШОЇ КОМАНДИ
                                        </h3>
                                        <P style={{padding:'0px 20px', margin:'0', marginBottom:'10px'}}>
                                            Скористайтеся програмами Marketplace, щоб інтегрувати інструменти з Jira та прискорити постачання результатів.
                                        </P>
                                        <Link to="https://slack.com/" className="link_projectItem">
                                            <Div className="body_projectItem">
                                                <Div className="body_img_colegaItem">
                                                    <Img src={slack} alt='#' className='icon_colega'/>
                                                </Div>
                                                <Div className="title_subtitle_colega">
                                                    <P className="title_project">Slack</P>
                                                </Div>
                                            </Div>
                                        </Link>
                                        <Link to="https://www.figma.com/" className="link_projectItem">
                                            <Div className="body_projectItem">
                                                <Div className="body_img_colegaItem">
                                                    <Img src={figma} alt='#' className='icon_colega'/>
                                                </Div>
                                                <Div className="title_subtitle_colega">
                                                    <P className="title_project">Figma (Проектування)</P>
                                                </Div>
                                            </Div>
                                        </Link>
                                        <Link to="https://circleci.com/" className="link_projectItem">
                                            <Div className="body_projectItem">
                                                <Div className="body_img_colegaItem">
                                                    <Img src={circle} alt='#' className='icon_colega'/>
                                                </Div>
                                                <Div className="title_subtitle_colega">
                                                    <P className="title_project">Circle CI (CI/CD)</P>
                                                </Div>
                                            </Div>
                                        </Link>
                                        <Div className="bottom_section">
                                            <Link to="/projects/" className="link_YourWork">Переглянути інші програми</Link>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Nav>
                </Div>
                <Div className='body_field_Search'>
                    <Div className='field_Search'>
                        <Form className='inputHeader'>
                            <Label htmlFor='idSearch'>
                                <Img src={magnifier} className='magnifier'/>
                                <Input type='text' className='inputSearch' id='idSearch'  placeholder={'Search'}/>
                            </Label>
                        </Form>
                        <Div className='iconSearch'>
                            <Div className='body_img'><Img src={message} className='icon_search'/></Div>
                            <Div className='body_img docca' onClick={()=> {setShowDoca(!showDoca)}}><Img src={question} className='icon_search'/>
                                <Div className= {` apidoca ${showDoca ? "apidocaActive" : ""}`}><a target="_blank" href="http://127.0.0.1:8000/apidoca">API_doca</a></Div>
                            </Div>
                            <Div className='body_img'><Img src={settings} className='icon_search'/></Div>
                            <Div className='body_img'><Img src={profile} className='icon_search'/></Div>
                        </Div>
                    </Div>
                </Div>
            </header>
        </>
    );
    
}

