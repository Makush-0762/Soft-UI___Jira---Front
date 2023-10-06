import React, { createContext, useContext, useState, useEffect } from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeLogIn from './HomeLogIn';
import HomeRegicter from './HomeRegicter';
import Jira from './Jira';
import Projects from './Projects';
import ModalComment from './ModalComment';
import ModalAddAssigneds from './ModalAddAssigneds';
import ModalAddTask from './ModalAddTask';
import TuNeTukay from './TuNeTukay';
import axios from "axios";

export const ApiDataContext = createContext();

function App() {

    const [dataLoaded, setDataLoaded] = useState(false);

    const [tasks, setTasks] = useState([]);

    const [user, setUser] = useState([]);

    const [assigned, setAssigned] = useState([]);

    const [status, setStatus] = useState();

    const [comments, setСomments] = useState([]);


    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/task`)
            .then(response => {
                setTasks(response.data.response.task.data);
                // console.log(response.data.response.task.data);
            })
            .catch(error => {
                console.error(error);
            });

        axios
            .get(`http://127.0.0.1:8000/api/users`)
            .then(response => {
                setUser(response.data.response.users.data);
                // console.log(response.data.response.users.data);
            })
            .catch(error => {
                console.error(error);
            });

        axios
            .get(`http://127.0.0.1:8000/api/assigneds`)
            .then(response => {
                setAssigned(response.data.response.task.data);
                // console.log(response.data.response.task.data);
            })
            .catch(error => {
                console.error(error);
            });

            axios
            .get(`http://127.0.0.1:8000/api/status`)
            .then(response => {
                setStatus(response.data.response.status.data);
                // console.log(response.data.response.status.data);
                setDataLoaded(true);
                })
            .catch(error => {
                console.error(error);
            });
            
            axios
            .get(`http://127.0.0.1:8000/api/comment`)
            .then(response => {
                setСomments(response.data.response.comment.data);
                // console.log(response.data.response.status.data);
                setDataLoaded(true);
                })
            .catch(error => {
                console.error(error);
            });
    }, []);

    if (!dataLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ApiDataContext.Provider value={{tasks, user, assigned, status, comments}}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={ <HomeLogIn />} />
                        <Route path='/register' element={ <HomeRegicter />} />
                        <Route path='/projects' element={ <Projects />} />
                        <Route path='/projects/jira' element={ <Jira />} />
                        <Route path='/projects/jira/ModalComment' element={ <ModalComment />} />
                        <Route path='/projects/jira/ModalAddAssigneds' element={ <ModalAddAssigneds />} />
                        <Route path='/projects/jira/ModalAddTask' element={ <ModalAddTask />} />
                        <Route path='/modal' element={ <ModalComment />} />
                        <Route path='/tu_ne_tukay' element={ <TuNeTukay />} />
                        <Route path='/tu' element={ <TuNeTukay />} />
                    </Routes>
                </BrowserRouter>
            </ApiDataContext.Provider>
        </>
    );
}

export default App;
