import React, {useEffect, useState} from "react";
import "./layaut/ModalAddAssigneds.css"
import Div from "./elements/Div";
import P from "./elements/P";
import Img from "./elements/Img";
import ButtonGroup from "./elements/ButtonGroup";
import axios from "axios";
import add from "./img/add.png"



export default function ModalAddAssigneds ({style, showModal, closeModal, taskId }){

    const baseUrl = "http://127.0.0.1:8000/storage/avatars/";
    const [users, setUsers] = useState([]);

    const [isAddAssignVisible, setIsAddAssignVisible] = useState({});

    const [selectedAssignee, setSelectedAssignee] = useState(null);

    const [showModalAddAssign, setShowModalAddAssign] = useState(false);


        const handleMouseEnter = (userId) => {
            setSelectedAssignee(userId);
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
        
        const handleAddAssignee = (userId) => {
            const selectedUser = users.find(user => user.id === userId);
            console.log(selectedUser);
            const assigneeHtml = `<Div class='assigned' key={${selectedUser.id}}>
                                    <Div class='body_assignedAvatar'>
                                        <Img
                                            src="${baseUrl}${selectedUser.user_avatar}"
                                            class='assignedAvatar'
                                            alt="assignedAvatar"
                                        />
                                    </Div>
                                    <Div class='assigned_name'>
                                        <P style=" margin: 0px">${selectedUser.name}</P>
                                    </Div>
                                </Div>
                            `;
        

            // Додаємо HTML-код в блок allSelectAsign
            const allSelectAsign = document.querySelector('.allSelectAsign');
            allSelectAsign.innerHTML += assigneeHtml;
            console.log("Додано виконавця з ID:", userId);
        };

//* --------------------------------------------------------Відправка даних про додавання юзера на сервер

        const [userData, setUserData] = useState([])
        const [userDataModifie, setUserDataModifie] = useState([])

        const createAssigni = "http://127.0.0.1:8000/api/assigneds";

        const addUserIdToUserData = (userId) => {
            setUserData(prevUserData => [...prevUserData, { "user_id": userId }]);
        };

        useEffect(() => {
            const updatedUserData = userData.map((userObj) => ({
                ...userObj,
                task_id: taskId
            }));
            setUserDataModifie(updatedUserData);
        }, [userData, taskId]);
        

        useEffect(() => {
            console.log('Дані при кліку на юзера:', userData);
            console.log('Дані із батька:', taskId);
            console.log('Модифіковані дані:', userDataModifie);
        }, [userData, taskId, userDataModifie]);


        const sendObjectToServer = () => {
            
            axios.post(createAssigni, userDataModifie)
                .then(response => {
                    console.log('Дані було успішно відправлено на сервер:', response.data);
                })
                .catch(error => {
                    console.error('Помилка при відправці даних на сервер:', error);
                });
                setTimeout(()=>{
                    window.location.reload(true)
                },3000)
            }

//* --------------------------------------------------------Відправка даних про додавання юзера на сервер





        useEffect(() => {
            axios
            .get(`http://127.0.0.1:8000/api/users`)
            .then((response) => {
                const initialVisibilityState = response.data.response.users.data.reduce(
                (acc, user) => {
                    acc[user.id] = false;
                    return acc;
                },
                {}
                );
                setUsers(response.data.response.users.data);
                setIsAddAssignVisible(initialVisibilityState);

                console.log(response.data.response.users.data);
                console.log(initialVisibilityState);
            })
            .catch((error) => {
                console.error(error);
            });
        }, []);





    return(
        <Div>
            <Div className="addAssigned" onClick={()=>setShowModalAddAssign(!showModalAddAssign)}>
                Призначити +
            </Div>
            <Div className={`bodyModalAddAssigneds  ${showModalAddAssign ? "bodyModalAddAssignedsActive" : ""}`} style={style}>
                    <Div className='assignedsColumn'>
                        <Div className="allAssigneds">
                            {users.length > 0 ? (
                                users.map((user) => (
                                <Div
                                    className="assigned "
                                    onMouseEnter={() => handleMouseEnter(user.id)}
                                    onMouseLeave={() => handleMouseLeave(user.id)}
                                    key={user.id}
                                >
                                    <Div className="body_assignedAvatar">
                                        <Img
                                            src={`${baseUrl}${user.user_avatar}`}
                                            className="assignedAvatar"
                                            alt="assignedAvatar"
                                        />
                                    </Div>
                                    <Div className="assigned_name">
                                        <P style={{ margin: "0px" }}>{user.name}</P>
                                    </Div>
                                    {isAddAssignVisible[user.id] && (
                                    <Div className="addAssign" onClick={() => {
                                        handleAddAssignee(selectedAssignee);
                                        addUserIdToUserData(user.id);
                                    }}>
                                        +
                                    </Div>
                                    )}
                                </Div>
                                ))
                            ) : (
                                <Div>Loading...</Div>
                            )}
                        </Div>
                        <Div className="selectedAssigned">
                            <Div className="allSelectAsign">
                            
                            </Div>
                            <Div className="actionModalAsign">
                                <ButtonGroup    onClick={()=>setShowModalAddAssign(!showModalAddAssign)}>Закрити</ButtonGroup>
                                <ButtonGroup    onClick={sendObjectToServer}>Додати</ButtonGroup>
                            </Div>
                        </Div>
                    </Div>
                </Div>
        </Div>

    );
}


// 