// import React, { createContext, useContext, useState, useEffect } from "react";
// import LayoutInside from "./layaut/LayoutInside";
// import axios from "axios";
// // import Sidebar from "../components/main/Sidebar/Sidebar";

// export const ApiDataContext = createContext();


// export default function ApiData ({children}){

//     const [tasks, setTasks] = useState([]);

//     const [user, setUser] = useState([]);

//     const [assigned, setAssigned] = useState([]);

//     const [status, setStatus] = useState();


//     useEffect(() => {
//         axios
//             .get(`http://127.0.0.1:8000/api/task`)
//             .then(response => {
//                 setTasks(response.data.response.task.data);
//                 // console.log(response.data.response.task.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });

//         axios
//             .get(`http://127.0.0.1:8000/api/users`)
//             .then(response => {
//                 setUser(response.data.response.users.data);
//                 // console.log(response.data.response.users.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });

//         axios
//             .get(`http://127.0.0.1:8000/api/assigneds`)
//             .then(response => {
//                 setAssigned(response.data.response.task.data);
//                 // console.log(response.data.response.task.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });

//             axios
//             .get(`http://127.0.0.1:8000/api/status`)
//             .then(response => {
//                 setStatus(response.data.response.status.data);
//                 // console.log(response.data.response.status.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
// }, []);

//     return(
//         <>
//             <ApiDataContext.Provider value={{tasks, user, assigned, status}}>
//                 <LayoutInside>
//                     {children}
//                 </LayoutInside>
//             </ApiDataContext.Provider>
//         </>
//     )
// }