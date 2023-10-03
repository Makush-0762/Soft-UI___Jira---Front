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


    return(
            <Div className="bodyModalAddTask" >
                <Div className="blockEnterDataTask">
                    <Div className="blockEnterData_item testDataItem">
                        <h2 title="Внесіть дані до відповідних полів">Створення таску</h2>
                    </Div>
                    <Div className="blockEnterData_item testDataItem">
                        <Form className="bodyInputEnter">
                            <Label className="labelEnterTaskName" htmlFor="name">Введіть опис до таску, або ж посилання</Label>
                            {/* <Input className="inputEnterTaskName" id="name" placeholder="Назва таску"/> */}
                            <textarea className="textareaEnterTaskName" id="name"></textarea>
                        </Form>
                    </Div>
                    <Div className="blockEnterData_item">
                        <Form>
                            <Label className="labelEnterTaskName" htmlFor="status_id">Статус</Label>
                            <select className="selectModalAddTask" id="status_id">
                                <option>До виконання</option>
                                <option>До виконання</option>
                                <option>До виконання</option>
                                <option>До виконання</option>
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