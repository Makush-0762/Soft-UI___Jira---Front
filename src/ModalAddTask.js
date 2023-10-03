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

    const [status, setStatus] = useState();

    const [descriptionTask, setDescriptionTask] = useState('');

    useEffect(()=> {
        console.log(descriptionTask);
    }, [descriptionTask])

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


    return(
            <Div className="bodyModalAddTask" >
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
                            <select className="selectModalAddTask" id="status_id">
                                {status.map(stat =>(
                                    <option id="status_id">{stat.name}</option>
                                ))}
                            </select>
                            <Input className="inputEnterTaskUser" id="user_id" value="1" type="hidden" />
                        </Form>
                    </Div>
                    <Div className="actionDataModalTask blockEnterData_item">
                        <ButtonGroup >Закрити</ButtonGroup>
                        <ButtonGroup >Додати</ButtonGroup>
                    </Div>
                </Div>
            </Div>
    );
}


// 