import React, {useEffect, useState, useRef} from "react";
import { Editor } from '@tinymce/tinymce-react';
import "./layaut/ModalComment.css"
import LayoutInside from "./layaut/LayoutInside";
import Div from './elements/Div';
import P from './elements/P';
// import A from './elements/A';
import Img from './elements/Img';
import Input from './elements/Input';
import Label from './elements/Label';
import Span from './elements/Span';
import ButtonGroup from './elements/ButtonGroup';
import Button from './elements/Button';
import Form from './elements/Form';
import lock from "./img/lock.png"
import aye from "./img/eye.png"
import like from "./img/like.png"
import share from "./img/share.png"
import skrepka from "./img/skrepka.png"
import stuctyre from "./img/structure.png"
import cepka from "./img/cepka.png"
// import arrow from "./img/arrow.png"
import arrowB from "./img/arrowB.png"
import elips from "./img/ellipsis.png"
import dataPage from "./img/dataPage.png"
import earth from "./img/earth.png"
import filter from "./img/filter.png"
// import flash from "./img/flash.png"
import profile from "./img/profile.png"
import smile from "./img/smile.png"
// import Accordion from 'react-bootstrap/Accordion';
import pencil from "./img/pencil.svg"
import settings from "./img/setting.png"
import edit_task from "./img/edit-task.png"
import send_update_task from "./img/send_update_task.png"
import axios from "axios";
// import Select from 'react-select'



export default function ModalComment ({idTask, titleTask, comments, assigneds, creator, taskIdOnClick}){

    const baseUrl = "http://127.0.0.1:8000/storage/avatars/"; // Аватарки

    const [show, setShow] = useState(false);

    const [dropMenu, setDropMenu] = useState(false);

    const [showParagpaph, setShowParagpaph] = useState(true);

    const [isEditorVisible, setEditorVisible] = useState(false);

    const [showInput, setShowInput] = useState(true);

    const [isEditorVisibleInp, setIsEditorVisibleInp] = useState(false);


    const toggleEditorAndInput = () => {
        setIsEditorVisibleInp(!isEditorVisibleInp);
        setShowInput(!showInput);
    };


    const [isAtivity, setIsActivity] = useState(-1)


    function HundlerActivity_Mmodal(index){
        return () => {
            if(isAtivity === index) {
                setIsActivity(-1)
            } else{
                setIsActivity(index)
            }
        }
    }
    
    const toggleEditorAndParagraph = () => {
        setEditorVisible(!isEditorVisible);
        setShowParagpaph(!showParagpaph);
    };

    const [task, setTask] = useState([]);

    const editorRef = useRef(null);
    const log = () => {
    if (editorRef.current) {
        console.log(editorRef.current.getContent());
        }
    };

    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/users`)
            .then(response => {
                setUsers(response.data.response.users.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

function formatDate(apiDate) {
    const date = new Date(apiDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

//** ---------------------------------------------------Вся процедура реадагуваня таску */
    const [showIconUpdate, setShowIconUpdate] = useState(false);

    const [updateStatus, setUpdateStatus] = useState(); //? Те що прийщло із АПІ

    const [showInputUpdate, setShowInputUpdate] = useState(false);

    const [idUpdateStatus, setIdUpdateStatus] = useState('');

    const [updateNameTask, setUpdateNameTask] = useState("");

    const idCreatorTasak = 1;

    const sendDataObject = {
        name: updateNameTask,
        user_id: idCreatorTasak,
        status_id: idUpdateStatus,
    }

    useEffect(()=> {
        console.log(idUpdateStatus);
        console.log(updateNameTask);
    }, [idUpdateStatus, updateNameTask])


    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/status`)
            .then(response => {
                setUpdateStatus(response.data.response.status.data);
                console.log(response.data.response.status.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [updateStatus]);

    const sendUpdatedDataTask = () => {
            if(updateNameTask && idCreatorTasak && idUpdateStatus){
                axios.post(`http://127.0.0.1:8000/api/task?id=${taskIdOnClick}`, sendDataObject)
                .then(response => {
                    console.log('Дані було успішно редаговано');
                })
                .catch(error => {
                    console.error('Помилка при відправці даних на сервер:', error);
                });
                setTimeout(()=>{
                    window.location.reload(true)
                },1500)
            }   else {
                alert('Ви ввели не всі дані');
                // setTimeout(()=>{
                //     window.location.reload(true)
                // },1000)
            }
    }




//** ---------------------------------------------------Вся процедура реадагуваня таску */

    return(
        <Div style={{padding:"20px",}}>
            <Div>
                <button className={`${show ? 'bodyUpdatePencilActive' : "bodyUpdatePencil"}`} onClick={()=>{setShow(!show)}}>
                    <Img src={pencil} className='imgUpdate' />
                </button>
            </Div>

            <Div className={`body_modal ${show ? 'body_modal_active' : ""}`}>
                <Div className='modalBody'>
                    <Div className="blockDescription_idTask idTask">
                        <P className="idTaskModal_AddEpic" style={{margin: "0", marginRight: "15px"}}><Span>&#128394;&#65039;</Span> Add epic</P> /  
                        {/* <Img src={}/> */}
                        <form>
                            <Input type="checkbox" id="inputIdModal"></Input>
                            <Label htmlFor="idTaskModal_input">
                                SCT - {idTask}
                            </Label>
                        </form>
                    </Div>

                    <Div className="taskActions">
                        <span className="traskAct_bodyIcon bodyTracking"><Img className="taskAct_icon tracking" src={aye}/> 1</span>
                        <span className="traskAct_bodyIcon bodyМoting"><Img className="taskAct_icon voting" src={like}/> </span>
                        <span className="traskAct_bodyIcon bodyShare"><Img className="taskAct_icon share" src={share}/> </span>
                        <span className="traskAct_bodyIcon bodyActions"><Img className="taskAct_icon actions" src={elips}/> </span>
                        <span className="traskAct_bodyIcon closeModal" onClick={() => setShow(!show)}>╳</span>
                    </Div>


                    <Div className="blockDescription">


                        <Div    className="blockDescription_titleTask titleTask" 
                                onClick={() => {setShowIconUpdate(!showIconUpdate)}}>
                            {showInputUpdate ? (
                                    <Label className="labelUpdateTaskName" htmlFor="inputUpdateTaskName">
                                        {titleTask} 
                                        <textarea className="inputUpdateTaskName" id="inputUpdateTaskName" onChange={(e) => setUpdateNameTask(e.target.value)}  /> 
                                    </Label>
                            ) : (
                                <h2>{titleTask}</h2>
                            )}
                            
                            
                            <Div className={`bodyIconUpdateTask ${showIconUpdate ? "bodyIconUpdateTaskActive" : ""}`} >
                                <span className="spanIconUpdateTask icnUpdTask" onClick={() => {setShowInputUpdate(!showInputUpdate)}}>
                                    <Img className="iconUpdateTask " alt="Icon-Update-Task" src={edit_task}/>
                                </span>
                                {showInputUpdate? (
                                    <span className="icnSndTask spanIconUpdateTask" onClick={sendUpdatedDataTask}>
                                        <Img className="iconUpdateTask icnSndTask" alt="Icon-Send-Task" src={send_update_task}/>
                                    </span>
                                ) : (
                                    <></>
                                )
                                }
                                
                            </Div>
                        </Div>

                        <Div className="blockDescription_buttonGroup buttonGroup">
                            <Span className="bodyButton_buttonGroup"><ButtonGroup className="buttonGroup_itemButton" type="button"><Img className="buttonGroup_img" src={skrepka}/>Прикріпити</ButtonGroup></Span>
                            <Span className="bodyButton_buttonGroup"><ButtonGroup className="buttonGroup_itemButton" type="button"><Img className="buttonGroup_img" src={stuctyre}/>Додати дочірню задачц</ButtonGroup></Span>
                            <Span className="bodyButton_buttonGroup itemButtonDropSpan">
                                <ButtonGroup className="buttonGroup_itemButton  itemButtonDrop" type="button"><Img className="buttonGroup_img" src={cepka}/>Додати посилання на задачу</ButtonGroup>
                                <ButtonGroup className="itemButtonDropArrow" onClick={() => setDropMenu(!dropMenu)}><Img className="imgDropButton" src={arrowB}/></ButtonGroup>
                                <nav className={`dropMenu_buttonGroup ${dropMenu ? "activedropMenu" : ""}`} >
                                    <P className="dropMenuItem"><Img className="img_dropMenu" src={dataPage}/> Пов'язати із сторінкою Confluence</P>
                                    <P className="dropMenuItem"><Img className="img_dropMenu" src={earth}/> Додати посилання на веб-сторінку</P>
                                </nav>
                            </Span>
                            <Span className="bodyButton_buttonGroup"><ButtonGroup className="buttonGroup_itemButton" type="button"><Img className="buttonGroup_img1" src={elips}/></ButtonGroup></Span>
                        </Div>

                        <Div className="addDescriptionTask">
                            <h5 className="addDescr_title">Опис</h5>
                            <Div className={`bodyField_addDescr ${showParagpaph ? "" : "bodyField_none"} `} onClick={toggleEditorAndParagraph}>
                                <P className="addDescr_edit" >Додати опис</P>
                            </Div>
                            {isEditorVisible && 
                            ( <Div className="editorBody">                            
                                    <Editor
                                        apiKey='gpwf6eadvyvdfj4xdak5u1oa685qqndjsqiyme2csvusjcpf'
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        initialValue="<p>This is the initial content of the editor.</p>"
                                        init={{
                                        height: 200,
                                        // width: "85%",
                                        menubar: false,
                                        plugins: [
                                        'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
                                        'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                                        'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
                                        ],
                                        toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                                        'alignleft aligncenter alignright alignjustify | ' +
                                        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                    <Div className="bodyBtnEdit">
                                        <button className="btnEdit">Зберегти</button>
                                        <button className="btnEdit" onClick={toggleEditorAndParagraph}>Скасувати</button>
                                    </Div>
                                </Div> )}
                        </Div>
    <hr/>
                        <Div className="activityModalTask">
                            <h5 className="title_Activity">Активність</h5>
                            <Div className="bodyActivity">
                                <Div className="bodyActivityShow">
                                    <P className="activityShow"> <Span style={{paddingRight: "15px"}}>Показати :</Span>
                                        <Button className={`activityShow_Item activityShow_ItemAll ${isAtivity == 1 ? "showItem_active" : ""}`} onClick={HundlerActivity_Mmodal(1)}>Всі</Button>
                                        <Button className={`activityShow_Item activityShow_ItemComments ${isAtivity == 2 ? "showItem_active" : ""}`} onClick={HundlerActivity_Mmodal(2)}>Коментарі</Button>
                                        <Button className={`activityShow_Item activityShow_ItemHistory ${isAtivity == 3 ? "showItem_active" : ""}`} onClick={HundlerActivity_Mmodal(3)}>Історія</Button>
                                        <Button className={`activityShow_Item activityShow_ItemWorkLog ${isAtivity == 4 ? "showItem_active" : ""}`} onClick={HundlerActivity_Mmodal(4)}>Журнал робіт</Button>
                                    </P>
                                </Div>
                                <Div className="bodyActivityFilt" >
                                    <P className="activityFilt" title="Cортування за спаданням" >
                                        Спочатку нові <Img className="activityFilt_icon" src={filter}/>
                                    </P>
                                </Div>
                            </Div>
                        </Div>

                        <Div  style={{paddingTop: "15px"}}>
                            <Div className={`addComment ${showInput ? "" : "addComment_none"} `} >
                                <Div className="addComment_BodyImgUser">
                                    <Img src={profile} className="imgUser" />
                                </Div>
                                <Div className="addComment_inputComm">
                                    <Form className="addComment_form">
                                        <Input type="text" className="addComment_input" id="idAddComment_input" value="" placeholder="Додати коментар.." onClick={toggleEditorAndInput}/>
                                        <Label className="addComment_label" htmlFor="idAddComment_input"><storong>Порада :</storong> натисніть <span><strong>M</strong></span>, щоб додати коментар</Label>
                                    </Form>
                                </Div>
                            </Div>
                            {isEditorVisibleInp && 
                            ( <Div className="editorBody">                            
                                    <Editor
                                        apiKey='gpwf6eadvyvdfj4xdak5u1oa685qqndjsqiyme2csvusjcpf'
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        initialValue="<p>This is the initial content of the editor.</p>"
                                        init={{
                                        height: 200,
                                        // width: "85%",
                                        menubar: false,
                                        plugins: [
                                        'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
                                        'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                                        'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
                                        ],
                                        toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                                        'alignleft aligncenter alignright alignjustify | ' +
                                        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                    <Div className="bodyBtnEdit">
                                        <button className="btnEdit">Зберегти</button>
                                        <button className="btnEdit" onClick={toggleEditorAndInput}>Скасувати</button>
                                    </Div>
                                </Div> )}
                        </Div>

                        {comments && comments.length > 0 ? (
                            comments.map((comment) => {
                                const user = users.find(user => user.id === comment.user_id);
                                return (
                                    <Div className="commentItem" key={comment.id}>
                                        <Div className="addComment_BodyImgUser">
                                            <Img src={profile} className="imgUser" />
                                        </Div>
                                        <Div className="commentField">
                                            <Div className="commF_userDetails">
                                                <P className="commF_userDetails userName">{user ? user.name : 'АНОНІМ'}</P>
                                                <P className="commF_userDetails timePublicate">{formatDate(comment.created_at)}</P>
                                            </Div>
                                            <Div className="commF_comment"><b>{comment.description}</b></Div>
                                            <Div className="commF_changeComm">
                                                <span className="changeComm_item chanComm_Edit">Змінити</span>
                                                <span className="changeComm_item chanComm_Delete">Видалити</span>
                                                <span className="changeComm_item chanComm_BodyImg"><Img className="chanComm_iconReaction" src={smile}/></span>
                                            </Div>
                                        </Div>
                                    </Div>
                                );
                            })
                        ) : (
                            <Div style={{fontSize: '18px'}}><center><b>Коментарі відсутні</b></center></Div>
                        )}
                    </Div>

                    <Div className="blockDetails">
                        <Div className="statusTaskActions">
                            {showInputUpdate ? (
                                    <select className="selectUpateTask" id="status_id" onChange={(e) => setIdUpdateStatus(e.target.value)}>
                                        <option id="status_id" disabled="true" selected>Виберіть статус таску</option>
                                        {updateStatus && updateStatus.map(status =>(
                                            <option id="status_id" value={status.id} >{status.name}</option>
                                        ))}
                                    </select>
                            ) : (
                                    <P className="statTaskAct">В роботі <Img className="imgDropButton" src={arrowB}/></P>
                            )}
                            <P className="statTaskAct">Дія <Img className="imgDropButton" src={arrowB}/></P>
                        </Div>
                        <Div className="accordionDetails">
                            <Div className="accordion-header" onClick={toggleAccordion}>
                                <span>Заголовок акордеону</span>
                                {isOpen ? <span className="iconArrow">&#9650;</span> : <span className="iconArrow">&#9660;</span>}
                            </Div>
                            {isOpen && (
                                <Div className="accordion-content">
                                    <table className="tableAccordion" width="100%">
                                        <tr>
                                            <td><span style={{fontWeight: "600"}}>Виконавець/і</span></td>
                                            <td>{assigneds.map(assigned => (<span className="bodyAssignedAvatar"><Img className="assignedAvatar" src={`${baseUrl}${assigned.user_avatar}`}/> {assigned.name} </span>))} <P className="addAsegnee"> Додати виконавця</P></td>
                                        </tr> 
                                        <tr>
                                            <td><span style={{fontWeight: "600"}}>Нотатки</span></td>
                                            <td><span className="asgnAcord_descr c">Немає</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style={{fontWeight: "600"}}>Id</span></td>
                                            <td><span className="asgnAcord_descr asgnAcord_padding">{idTask}</span></td>
                                        </tr> 
                                        <tr>
                                            <td><span style={{fontWeight: "600"}}>Сюжетна оцінка</span></td>
                                            <td><span className="asgnAcord_descr asgnAcord_padding">Немає</span></td>
                                        </tr> 
                                        <tr>
                                            <td><span style={{fontWeight: "600"}}>Створив таск</span></td>
                                            <td><span className="bodyAssignedAvatar"><Img className="assignedAvatar" src={`${baseUrl}${creator.user_avatar}`}/> {creator.name} </span></td>
                                        </tr> 
                                    </table>
                                </Div>
                            )}
                        </Div>
                        <Div className="bodySetting">
                            <Div className="dateAdd-Editting">
                                <P className="dateCreated dateAE">Якась дата створення ХЗ</P>
                                <P className="dateUpdated dateAE">Якась дата редагування ХЗ</P>
                            </Div>
                            <Div className="Setting"><span><Img className="settingIcon" src={settings}/> Налаштування</span></Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    );
}
