import React, {useContext, useEffect, useState} from "react";
import './layaut/Jira.css';
import LayoutInside from "./layaut/LayoutInside";
import Div from "./elements/Div"
import P from "./elements/P"
import A from "./elements/A"
import Form from "./elements/Form"
import Input from "./elements/Input"
import Label from "./elements/Label"
import Img from "./elements/Img"
import {Link} from 'react-router-dom';
import elips from "./img/ellipsis.png"
import magnifier from "./img/magnifier.png"
import profile from "./img/profile.png"
import arrow from "./img/arrow.png"
import arrowB from "./img/arrowB.png"
import analitic from "./img/analytics.png"
import user from "./img/user.png"
import deleteTask from "./img/deleteTask.png"
import user_delete from "./img/user_delete.png"
import axios from "axios";
import ModalComment from "./ModalComment";
import { Button } from "react-bootstrap-v5";
import pencil from "./img/pencil.svg"
import ModalAddAssigneds from "./ModalAddAssigneds";
import ModalAddTask from "./ModalAddTask";
import { ApiDataContext } from "./App";
// import classnames from 'classnames';


export default function Jira() {

    const context = useContext(ApiDataContext);
    
    console.log(context);

    // const [modalShow, setModalShow] = useState(false);

    const tasks = context.tasks;

    const assigned = context.assigned;

    const user = context.user;

    const status = context.status;
    
    const [hoveredStates, setHoveredStates] = useState({});

    // const [comments, setComments] = useState([]);

    const [showModalAddAssign, setShowModalAddAssign] = useState(false);

    const [isAddAssignVisible, setIsAddAssignVisible] = useState({});


    const handleMouseEnter = (userId) => {
        setIsAddAssignVisible((prevState) => ({
        ...prevState,
        [userId]: true,
        }));
    };
    
    const handleMouseLeave = (userId) => {
        setIsAddAssignVisible((prevState) => ({
        ...prevState,
        [userId]: false,
        }));
    };



    // Функція для встановлення стану isHovered для певного id
    const setHoveredState = (id, value) => {
        setHoveredStates(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    // useEffect(() => {
    //         axios
    //             .get(`http://127.0.0.1:8000/api/task`)
    //             .then(response => {
    //                 setTasks(response.data.response.task.data);
    //                 console.log(response.data.response.task.data);
    //             })
    //             .catch(error => {
    //                 console.error(error);
    //             });

    //         axios
    //             .get(`http://127.0.0.1:8000/api/users`)
    //             .then(response => {
    //                 setUser(response.data.response.users.data);
    //                 console.log(response.data.response.users.data);
    //             })
    //             .catch(error => {
    //                 console.error(error);
    //             });

    //         axios
    //             .get(`http://127.0.0.1:8000/api/assigneds`)
    //             .then(response => {
    //                 setAssigned(response.data.response.task.data);
    //                 console.log(response.data.response.task.data);
    //             })
    //             .catch(error => {
    //                 console.error(error);
    //             });
    // }, []);


    const baseUrl = "http://127.0.0.1:8000/storage/avatars/";

    const statusColors = {
        "До виконання": {
                            backgroundColor: "rgba(148, 148, 148, 0.322)",
                            border: "2px solid #b3b3b3",
                            color: "#797979"
                        },
        "В роботі": {
                            backgroundColor: "rgba(255, 234, 99, 0.322)",
                            border: "2px solid #ffe839",
                            color: "#dec400"
                        },
        "Тестовий таск": {
                            backgroundColor: "rgba(242, 72, 255, 0.377)",
                            border: "2px solid #de26ff",
                            color: "#9300ad"
                        },
        "Готово": {
                            backgroundColor: "rgba(72, 255, 154, 0.36)",
                            border: "2px solid #39ff9f",
                            color: "#00b55d"
                        },
    };

//* -----------------------------------------------Отримання id таску, для додавання виконавців, видалення. CRUD тасків*/

    const [taskId, setTaskId] = useState('');

    const handleTaskClick = (idTask) => {
    console.log(idTask);
        setTaskId(idTask);
    }

    useEffect(()=> {
        return () => handleTaskClick;
    }, [taskId, context])

//* -----------------------------------------------Отримання id таску, для додавання виконавців, видалення. CRUD тасків*/


//* -----------------------------------------------Отримання id виконавця для видалення + видалення*/
    const [assignedId, setAssignedId] = useState('');
    
    const handleAssigneHover = (idAssign) => {
        console.log(idAssign);
        setAssignedId(idAssign);
    }

    useEffect(()=> {
        return () => handleAssigneHover;
    }, [assignedId])

    const assignedTask = {
        user_id: assignedId,
        task_id: taskId,
    }

    const filteredTask = assigned.find(task => task.user_id === assignedTask.user_id && task.task_id === assignedTask.task_id);
    
    useEffect(() => {
            if (filteredTask) {
                console.log(filteredTask.id);
            } else {
                console.log('Елемент не знайдено у масиві assigned');
            }
    }, [assignedId, taskId, assigned]);


    const sendObjectToServer = () => {
            
        axios.post(`http://127.0.0.1:8000/api/assigneds?deleteId=${filteredTask.id}`)
            .then(response => {
                console.log('Дані було успішно видалено');
            })
            .catch(error => {
                console.error('Помилка при відправці даних на сервер:', error);
            });
            setTimeout(()=>{
                window.location.reload(true)
            },1500)
        }
//* -----------------------------------------------Отримання id виконавця для видалення + видалення*/


// ! ----------------------------------------------CRUD таск/
//* -----------------------------------------------Додавання таску*/

            // ? Логіка додавання таску знаходиться у компоненті <ModalAddTask />

//* -----------------------------------------------Додавання таску*/


//* -----------------------------------------------Видалення таску */

    const deleteTasks = () => {

        axios.post(`http://127.0.0.1:8000/api/task?deleteId=${taskId}`)
        .then(response => {
            console.log('Дані було успішно видалено');
        })
        .catch(error => {
            console.error('Помилка при відправці даних на сервер:', error);
        });
        setTimeout(()=>{
            window.location.reload(true)
        },1500)
        
    }

//* -----------------------------------------------Видалення таску */


// ! ----------------------------------------------CRUD таск/


//* -----------------------------------------------Перезавантаження сторінки якщо дані не завантажуються 15 секунд */

    // useEffect(() => {
    //     if (tasks.length === 0) {
    //         const timeoutId = setTimeout(() => {
    //             window.location.reload(true);
    //         }, 15000);

    //         return () => clearTimeout(timeoutId); // Очищення таймаута при розміщенні компоненту
    //     }
    // }, [tasks]);

//* -----------------------------------------------Перезавантаження сторінки якщо дані не завантажуються 15 секунд */


    return (
        <>
            <LayoutInside>
                <Div className='mainProject'>

                    <Div className="subNameProectTest">
                        <Div>
                        <Link to="/projects" className="LinkBread">Пректи</Link> / <Link className="LinkBread" to="/projects/jira"> Jira</Link>
                        </Div>
                        <Div className='bodyTitle'>
                        <P className='titleBacklog'>Беклог</P>
                        <Div className="linkTitle"><A href='#' ><Img src={elips} /></A></Div>
                        </Div>
                
                        <Div className='body_Search-Backlog'>
                        <Div className='bodyForm'>
                            <Form className='inputBacklogr bodyForm-Item'>
                            <Label htmlFor='idSearchBacklog'>
                                <A href='#'><Img src={magnifier} className='magnifierBacklog' /></A>
                                <Input type='text' className='inputSearchBacklog' id='idSearch' placeholder='Пошук по беклогу' />
                            </Label>
                            </Form>
            
                            <Div className='bodyForm-Item'>
                                <P className='epic'>Епік <Img src={arrow} className='iconEpic' /></P>
                            </Div>
                        </Div>
                        <Div>
                            <P className='statistic'><Img src={analitic} /> Статистика</P>
                        </Div>
                        </Div>
                        <Div className='body_Tasks'>
                
                            <Div className='bodyTitleTasks'>
                                <Div className='titleTasts'><Img src={arrowB} className='iconEpic' /><strong> SCT Sprint 1</strong>&#32;&#32;   10 May - 24 May (17 issues)</Div>
                                <Div className='right-Block'>
                                <Div className='body_Zero'>
                                    <P className='grey_Zero'>0</P>
                                    <P className='blue_Zero'>0</P>
                                    <P className='green_Zero'>0</P>
                                </Div>

                                <ModalAddTask status={status} />
                                <Div className="linkTitleTasks"><A href='#' ><Img src={elips} /></A></Div>
                                </Div>
                            </Div>
                            <Div className="body_task">
                            {/* <ModalComment  idTask={task.id}  titleTask={task.name} />  <Link to={{pathname: `/projects/jira/ModalComment` ,state: {idTask: task.id,titleTask: task.name,},}}><Img src={pencil} className='imgUpdate' /></Link>*/}
                                { tasks.length > 0 ? (
                                    tasks.map(task => (
                                        <Div className='task' variant="primary" key={task.id} onMouseEnter={() =>  handleTaskClick(task.id)}>
                                            <Div className='left-BlockTast'>
                                                <input type="checkbox" className="form-check-input item-leftBlock" id="exampleCheck1" />
                                                <P className='numberSprint item-leftBlock'>SCT-{task.id}</P>
                                                <P className='numberSprint item-leftBlock'>{task.name}</P>
                                                <P className="modalDetails"><ModalComment status={status}  taskIdOnClick={taskId} users={user}  idTask={task.id}  titleTask={task.name} comments={task.comments} assigneds={task.assigneds} creator={task.user} /></P> 
                                            </Div>
                                            <Div className='right-BlockTask'>
                                                <P className='quintitu item-rightBlock'>-</P>
                                                <Div className='bodyStatus' style={statusColors[task.status.name]}>
                                                    <p className="statusBlock">{task.status.name}</p>
                                                </Div>
                                                <Div className='body_ImgProfile item-rightBlock'>
                                                    <span className='buttonAssigned'onMouseEnter={() => setHoveredState(task.id, true)} // Встановлюємо isHovered в true при наведенні
                                                        onMouseLeave={() => setHoveredState(task.id, false)}>
                                                        Виконавці:
                                                        {hoveredStates[task.id] && (
                                                        <Div className="body_ModalAssigned " >
                                                            <span className="modalArrowUp"></span>
                                                            {task.assigneds.map(assigned => (
                                                                <Div className="assigned" key={assigned.id}
                                                                    onMouseEnter={() => {handleMouseEnter(assigned.id);
                                                                                        handleAssigneHover(assigned.id)
                                                                        }
                                                                    }
                                                                    onMouseLeave={() => handleMouseLeave(assigned.id)}>
                                                                    <Div className="body_assignedAvatar">
                                                                        <Img src={`${baseUrl}${assigned.user_avatar}`} className="assignedAvatar" alt="assignedAvatar" />
                                                                    </Div>
                                                                    <Div className="assigned_name">
                                                                        <P>{assigned.name}</P>
                                                                    </Div>
                                                                    {isAddAssignVisible[assigned.id] && (
                                                                    <Div className="deleteAssign" onClick={sendObjectToServer}>
                                                                        <Img src={user_delete} className="user_delete" alt="user_delete" />
                                                                    </Div>
                                                                    )}
                                                                </Div>
                                                            ))}
                                                            <hr />
                                                            <ModalAddAssigneds taskId={taskId}/>
                                                        </Div>
                                                    )}
                                                    </span>
                                                    
                                                </Div>
                                                <button className='deleteTask' onClick={deleteTasks}  >
                                                    <Img src={deleteTask} className="deleteTaskIcon"/>
                                                </button>
                                            </Div>
                                        </Div>
                                    ))
                                ) : (
                                    <Div style={{fontSize: '28px'}}><center>Loading...</center></Div>
                                )}
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </LayoutInside>
        </>
    );
}



