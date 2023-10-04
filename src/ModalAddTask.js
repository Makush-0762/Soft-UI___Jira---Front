import React, {useEffect, useState} from "react";
import "./layaut/ModalAddTask.css"
import Div from "./elements/Div";
import P from "./elements/P";
import Img from "./elements/Img";
import ButtonGroup from "./elements/ButtonGroup";
import axios from "axios";
import Label from "./elements/Label";
import Input from "./elements/Input";
import Form from "./elements/Form";



export default function ModalAddTask ({}){
    const [showModalCreateTask, setShowModalCreateTask] = useState(false)

    const [status, setStatus] = useState();

    const [descriptionTask, setDescriptionTask] = useState('');

    const [statusTask, setStatusTask] = useState(); 
    
    const idCreatorTasak = 1;

    useEffect(()=> {
        console.log(descriptionTask);
        console.log(statusTask);
        console.log(idCreatorTasak);
    }, [descriptionTask, statusTask])

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/status`)
            .then(response => {
                setStatus(response.data.response.status.data);
                console.log(response.data.response.status.data);
            })
            .catch(error => {
                console.error(error);
            });
}, []);

    const sendDataObject = {
        name: descriptionTask,
        user_id: idCreatorTasak,
        status_id: statusTask,
    }

const createTask = () => {

    if(descriptionTask && idCreatorTasak && statusTask){
        axios.post(`http://127.0.0.1:8000/api/task`, sendDataObject)
        .then(response => {
            console.log('Дані було успішно видалено');
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


    return(
    <>
        <P className='sprintTasks' onClick={()=> {setShowModalCreateTask(!showModalCreateTask)}}>Створити таску <span style={{fontSize: "28px", paddingLeft: "5px"}}>+</span></P>

        <Div className={`bodyModalAddTask ${showModalCreateTask ? "bodyModalAddTaskActive" : ""}`} >
            <Div className="blockEnterDataTask">
                <Div className="blockEnterData_item testDataItem">
                    <h2 title="Внесіть дані до відповідних полів">Створення таску</h2>
                </Div>
                <Div className="blockEnterData_item testDataItem">
                    <Form className="bodyInputEnter">
                        <Label className="labelEnterTaskName" htmlFor="name">Введіть опис до таску, або ж жожаткові посилання</Label>
                        {/* <Input className="inputEnterTaskName" id="name" placeholder="Назва таску"/> */}
                        <textarea className="textareaEnterTaskName" 
                        value={descriptionTask} 
                        onChange={(e) => setDescriptionTask(e.target.value)} 
                        id="name"></textarea>
                    </Form>
                </Div>
                <Div className="blockEnterData_item">
                    <Form>
                        <Label className="labelEnterTaskName" htmlFor="status_id">Статус</Label>
                        <select className="selectModalAddTask" id="status_id" onChange={(e) => setStatusTask(e.target.value)}>
                            <option id="status_id" disabled="true" selected>Виберіть статус таску</option>
                            {status && status.map(stat =>(
                                <option id="status_id" value={stat.id} >{stat.name}</option>
                            ))}
                        </select>
                        <Input className="inputEnterTaskUser" id="user_id" value="1" type="hidden" />
                    </Form>
                </Div>
                <Div className="actionDataModalTask blockEnterData_item">
                    <ButtonGroup onClick={()=> {setShowModalCreateTask(!showModalCreateTask)}}>Закрити</ButtonGroup>
                    <ButtonGroup onClick={createTask}>Додати</ButtonGroup>
                </Div>
            </Div>
        </Div>
    </>
            
    );
}


// 