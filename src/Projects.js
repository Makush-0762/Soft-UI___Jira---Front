import React from 'react';
import './layaut/Projects.css';
import LayoutInside from "./layaut/LayoutInside";
import Div from "./elements/Div"
import P from "./elements/P"
import A from "./elements/A"
import Form from "./elements/Form"
import Input from "./elements/Input"
import Label from "./elements/Label"
import Img from "./elements/Img"
import {Link} from 'react-router-dom';
import magnifier from "./img/magnifier.png"
import profile from "./img/profile.png"
import arrow from "./img/arrow.png"
import projectIcon from "./img/10402.svg"
// import axios from "axios";


export default function Projects() {





    return (
        <>
        <LayoutInside>
            <Div className='mainProject'>
            <Div>
                <Div className='bodyTitle'>
                <P className='titleBacklog'>Беклог</P>
                </Div>
        
                <Div className='body_Search-Backlog'>
                <Div className='bodyForm'>
                    <Form className='inputBacklogr bodyForm-Item'>
                    <Label htmlFor='idSearchBacklog'>
                        <A href='#'><Img src={magnifier} className='magnifierBacklog'/></A>
                        <Input type='text' className='inputSearchBacklog' id='idSearch' placeholder='Пошук по проектам'/>
                    </Label>
                    </Form>
                    <Div className='bodyForm-Item'>
                    <P className='epic'>Усі проекти на Jira <Img src={arrow} className='iconEpic'/></P>
                    </Div>
                </Div>
                </Div>
                <Div className='body_Projects'>
                <table className="table">
                    <thead>
                    <tr style={{ borderBottom: 'transparent', verticalAlign: 'middle' }}>
                        <th scope="col" className="col1Header" style={{ fontSize: '20px' }}>★</th>
                        <th scope="col">Name &darr;</th>
                        <th scope="col">Key</th>
                        <th scope="col">Type</th>
                        <th scope="col">Lead</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{ borderBottom: 'transparent', verticalAlign: 'middle' }}>
                        <th scope="row" style={{ fontSize: '20px' }} className="col1">
                        <span className="star">★</span>
                        </th>
                        <td><Img src={projectIcon} className='img_projTable' /> <Link to='/projects/jira' className='link_proj'> Jira</Link></td>
                        <td>EWORK</td>
                        <td>Team-manager software</td>
                        <td className='lastColl'><Img src={profile} className='imgSearch' /> <Link to='/projects/jira' className='link_proj'>Кушка Роман Романович</Link></td>
                    </tr>
                    <tr style={{ borderBottom: 'transparent', verticalAlign: 'middle' }}>
                        <th scope="row" style={{ fontSize: '20px' }} className="col1">
                        <span className="star">★</span>
                        </th>
                        <td><Img src={projectIcon} className='img_projTable' /> <Link to='/projects/jira' className='link_proj'> Jira</Link></td>
                        <td>AV</td>
                        <td>Team-manager software</td>
                        <td className='lastColl'><Img src={profile} className='imgSearch' /> <Link to='/projects/jira' className='link_proj'>Кушка Роман Романович</Link></td>
                    </tr>
                    <tr style={{ borderBottom: 'transparent', verticalAlign: 'middle' }}>
                        <th scope="row" style={{ fontSize: '20px' }} className="col1">
                        <span className="star">★</span>
                        </th>
                        <td><Img src={projectIcon} className='img_projTable' /> <Link to='/projects/jira' className='link_proj'> Jira</Link></td>
                        <td>HSVU</td>
                        <td>Team-manager software</td>
                        <td className='lastColl'><Img src={profile} className='imgSearch' /> <Link to='/projects/jira' className='link_proj'>Кушка Роман Романович</Link></td>
                    </tr>
                    <tr style={{ borderBottom: 'transparent', verticalAlign: 'middle' }}>
                        <th scope="row" style={{ fontSize: '20px' }} className="col1">
                        <span className="star">★</span>
                        </th>
                        <td><Img src={projectIcon} className='img_projTable' /> <Link to='/projects/jira' className='link_proj'> Jira</Link></td>
                        <td>IU</td>
                        <td>Team-manager software</td>
                        <td className='lastColl'><Img src={profile} className='imgSearch' /> <Link to='/projects/jira' className='link_proj'>Кушка Роман Романович</Link></td>
                    </tr>
                    </tbody>
                </table>
                </Div>
            </Div>
            </Div>
        </LayoutInside>
        </>
    );
}