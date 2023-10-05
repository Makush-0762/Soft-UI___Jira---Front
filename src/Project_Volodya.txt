import React, { useEffect, useState } from "react";
import { Container, Modal, Button, Toast, ToastHeader } from "react-bootstrap-v5";
import Layout from "../layout/Layout";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

import '../style/Style.css';


import imageProject from "../img/jira.svg"
import Select from "../elements/Select";
import Modalka from "../elements/Modal";
import axios from "axios";

import { Link, Route, Routes } from "react-router-dom";
import CommentsPage from "./Comments";

export default function Project() {

  // TODO ===== Додаткові методи та функції ===== TODO //

  // ===== Виведення всіх юзерів ===== //
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/users')
      .then(response => {
        console.log(response.data.response.users.data);
        setUsers(response.data.response.users.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  // ===== Виведення всіх юзерів ===== //

  // ===== Виведення всіх ID юзерів та ID тасків з таблиці task_user ===== //
  const [tasksUsers, setTasksUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/tasksUsers')
      .then(response => {
        console.log(response.data.response.users.data);
        setTasksUsers(response.data.response.users.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function getUserName(userId) {
    const user = users.find(user => user.id === userId);
    // console.log(user);
    return user ? user.name : '';
  }
  // ===== Виведення всіх ID юзерів та ID тасків з таблиці task_user ===== //

  // ===== Виведення всіх коментарів ===== //
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/comments')
      .then(response => {
        setComments(response.data.response.statues.data)
        console.log(response.data.response.statues.data);
      })
      .catch(error => { console.error(error); });
  }, []);
  // ===== Виведення всіх коментарів ===== //

  // ===== Виведення всіх ID тасків та ID коментарів з таблиці task_comment ===== //

  const [tasksComments, setTasksComments] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const test = (id) => {
    // console.log('id = ' + id);
    // axios.get(`http://127.0.0.1:8000/api/currentComment?comment_id=${id}`)
    //   .then(response => {
    //     console.log(response.data);
    //     setTasksComments(response.data);
    //     // comments.filter(taskComment => taskComment.task_id === tasksComments.id)
    //     // const com = comments.filter(comment => comment.comment_id === tasksComments.id);
    //     // setComments(com);
    //     // console.log(com);
    //     // const filtered = comments.filter(comment => tasksComments.some(taskComment => taskComment.comment_id === comment.id) ); setComments(filtered);
    //     // console.log(filtered);
    //   });
    console.log('id = ' + id);
    setSelectedTaskId(id);
    setCommentsModal(true);

    axios.get(`http://127.0.0.1:8000/api/currentComment?comment_id=${id}`)
      .then(response => {
        console.log(response.data);
        setTasksComments(response.data);
        // comments.filter(taskComment => taskComment.task_id === tasksComments.id)
        // const com = comments.filter(comment => comment.comment_id === tasksComments.id);
        // setComments(com);
        // console.log(com);
        // const filtered = comments.filter(comment => tasksComments.some(taskComment => taskComment.comment_id === comment.id) ); setComments(filtered);
        // console.log(filtered);
      });
  }

  function getTaskDescription(commentId) {
    const comment = comments.find(comment => comment.id === commentId);
    // console.log(comment);
    return comment ? comment.description : '';
  }
  // ===== Виведення всіх ID юзерів та ID тасків з таблиці task_user ===== //

  // ===== Виведення всіх тасків ===== //
  // const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/tasks')
      .then(response => {
        setTasks(response.data.response.users.data);
        console.log(response.data.response.users.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  // ===== Виведення всіх тасків ===== //

  // ===== Виведення відповідних статусів ===== //
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/statues')
      .then(response => {
        const data = response.data.response.statues.data;
        setStatuses(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  // ===== Виведення відповідних статусів ===== //

  // TODO ===== Додаткові методи та функції ===== TODO //


  // TODO ===== Операція CRUD над тасками ===== TODO //
  // ===== СТВОРЕННЯ ТАСКІВ ===== //
  const [newTask, setNewTask] = useState({
    name: "",
    user_id: "",
    status_id: ""
  });
  const [showModal, setShowModal] = useState(false);

  const handleNewTaskChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    });
  };

  const createTask = () => {
    axios.post('http://127.0.0.1:8000/api/tasks', newTask)
      .then(response => {
        // Обробка успішного створення таску
        console.log(response.data);
        // Оновити список тасків
        setTasks([...tasks, response.data]);
        // Сховати модальне вікно
        setShowModal(false);
        // Очистити поля введення
        setNewTask({
          name: "",
          user_id: "",
          status_id: ""
        });
      })
      .catch(error => {
        // Обробка помилки створення таску
        console.error(error);
      });
  };
  // ===== СТВОРЕННЯ ТАСКІВ ===== //


  // ===== РЕДАГУВАННЯ ТАСКІВ ===== //

  // ===== Зміна назви таску ===== //
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");

  const startEditingTask = (taskId, taskName) => {
    setEditingTaskId(taskId);
    setEditedTaskName(taskName);
  };

  const saveEditedTask = (taskId) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (!taskToUpdate) {
      console.error(`Task with id ${taskId} not found.`);
      return;
    }

    const { user_id, status_id } = taskToUpdate;

    axios
      .post(`http://127.0.0.1:8000/api/tasks?id=${taskId}`, { name: editedTaskName, user_id: user_id, status_id: status_id })
      .then(response => {
        console.log("Оновлено назву таску:", response.data);
        setEditingTaskId(null);
      })
      .catch(error => {
        console.error(error);
      });
  };
  // ===== Зміна назви таску ===== //


  // ===== Зміна статусів ===== //
  const handleTaskStatusChange = (taskId, newStatusId) => {

    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (!taskToUpdate) {
      console.error(`Task with id ${taskId} not found.`);
      return;
    }

    const { name, user_id } = taskToUpdate;

    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status_id: newStatusId };
      }
      return task;
    });


    console.log(name);
    console.log(user_id);
    console.log(taskId);
    console.log(newStatusId);

    axios
      .post(`http://127.0.0.1:8000/api/tasks/?id=${taskId}`, { name: name, user_id: user_id, status_id: newStatusId })
      .then(response => {
        console.log("Оновлено поле status_id:", response.data);
        setTasks(updatedTasks);
      })
      .catch(error => {
        console.error(error);
      });
  };
  // ===== Зміна статусів ===== //

  // ===== Додавання декількох юзерів для виконання таску ===== //
  const [showUsersModal, setShowUsersModal] = useState(false); // відкриття модалки 
  const [idTask, setIdTask] = useState(0);
  const [selectedUsers, setSelectedUsers] = useState([]); // список обраних користувачів

  console.log("id= " + idTask); // передає id таска по якому клікнули

  //! ----- Функція для перевірки user_id, що відповідають заданому task_id ----- //
  const getUserIdsByTaskId = () => {
    const userIds = tasksUsers
      .filter(user => user.task_id === idTask)
      .map(user => user.user_id);
    return userIds;
  };
  //! ----- Функція для перевірки user_id, що відповідають заданому task_id ----- //

  //! ----- функція яка буде обробляти зміну стану чекбокса і оновлювати відповідний стан в компоненті ----- //
  const handleCheckboxChange = (userId) => {
    const selected = selectedUsers.includes(userId);
    const updatedUsers = selected
      ? selectedUsers.filter(id => id !== userId)
      : [...selectedUsers, userId];
    setSelectedUsers(updatedUsers);
  };

  const handleCreateTaskUsers = async () => {
    try {
      const existingTaskUsers = tasksUsers.filter(
        taskUser => taskUser.task_id === idTask
      );

      const usersToAdd = selectedUsers.filter(
        userId => !existingTaskUsers.some(taskUser => taskUser.user_id === userId)
      );

      const usersToDelete = existingTaskUsers.filter(
        taskUser => !selectedUsers.includes(taskUser.user_id)
      );
      console.log('306 usersToDelete= ' + usersToDelete);
      // Видалення користувачів
      for (const taskUser of usersToDelete) {
        await axios.post(`http://127.0.0.1:8000/api/tasksUsers?deleteId=${taskUser.id}`);
        console.log('Task user removed successfully!');
      }

      // Додавання користувачів
      for (const userId of usersToAdd) {
        await axios.post('http://127.0.0.1:8000/api/tasksUsers', {
          user_id: userId,
          task_id: idTask
        });
        console.log('Task user created successfully!');
      }

      setShowUsersModal(false);
    } catch (error) {
      console.error('Error updating task users:', error);
    }
  };

  const handleOpenUsersModal = (taskId) => {
    setIdTask(taskId);
    setShowUsersModal(true);
  };

  // Оновлення значення taskUserIds при зміні idTask
  useEffect(() => {
    const taskUserIds = getUserIdsByTaskId();
    setSelectedUsers(taskUserIds);
  }, [idTask]);

  //! ----- функція яка буде обробляти зміну стану чекбокса і оновлювати відповідний стан в компоненті ----- //

  // ===== Додавання декількох юзерів для виконання таску ===== //

  // ===== РЕДАГУВАННЯ ТАСКІВ ===== //


  // ===== ВИДАЛЕННЯ ТАСКІВ ==== //
  const deleteTask = (taskId) => {
    console.log(taskId);
    axios
      .post(`http://127.0.0.1:8000/api/tasks?deleteId=${taskId}`)
      .then(response => {
        console.log(response.data);
        setTasks(tasks.filter(task => task.id !== taskId));
      })
      .catch(error => {
        console.error(error);
      });
  };
  // ===== ВИДАЛЕННЯ ТАСКІВ ==== //
  // TODO ===== Операція CRUD над тасками ===== TODO //


  // TODO ===== Операція CRUD над коментарями ===== TODO //

  const [commentsModal, setCommentsModal] = useState(false); // відкриття модалки

  // ===== СТВОРЕННЯ КОМЕНТАРІВ ===== //
  // const [newComment, setNewComment] = useState({
  //   description: "",
  //   user_id: ""
  // });


  const [taskComment, setTaskComment] = useState({
    task_id: null,
    comment_id: null
  });

  const [newComment, setNewComment] = useState({
    description: '',
    user_id: 1, // Поки що user_id сталий і дорівнює 1
  });
  const [createdCommentId, setCreatedCommentId] = useState(null);

  useEffect(() => {
    if (createdCommentId) {
      console.log('Оновлене значення createdCommentId:', createdCommentId);
    }
  }, [createdCommentId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComment({
      ...newComment,
      [name]: value,
    });
  };

  const handleSubmit = (event, taskId) => {
    event.preventDefault();
    axios
      .post('http://127.0.0.1:8000/api/comments', newComment)
      .then((response) => {
        console.log(response.data.response.users.data.id);
        console.log('Коментар збережено успішно');
        setCreatedCommentId(response.data.response.users.data.id);
        console.log(createdCommentId);
        // Очистимо поля форми після відправки коментаря
        setNewComment({
          description: '',
          user_id: 1,
        });


        console.log(taskId);
        console.log('======');
        console.log(createdCommentId);


        // Створити об'єкт коментаря для відправки на сервер
        const newCommentData = {
          ...taskComment,
          task_id: taskId,
          comment_id: response.data.response.users.data.id
        };

        // Виконати POST-запит на сервер для створення коментаря
        axios
          .post('http://127.0.0.1:8000/api/tasksComments', newCommentData)
          .then(response => {
            // Обробка успішного створення коментаря
            console.log(response.data);
            // Оновити список коментарів (якщо потрібно)
          })
          .catch(error => {
            // Обробка помилки створення коментаря
            console.error(error);
          });
      })
      .catch((error) => {
        console.log('Помилка при збереженні коментаря');
      });
  };

  // Клік кнопки Enter
  const handleKeyPress = (event, taskId) => {
    if (event.key === 'Enter') {
      handleSubmit(event, taskId);
    }
  };
  // ===== СТВОРЕННЯ КОМЕНТАРІВ ===== //



  // TODO ===== Операція CRUD над коментарями ===== TODO //


  return (
    <>
      <Layout>
        <Container>
          <Row style={{ width: "100%", marginLeft: "0" }}>

            <Col className="p-3" style={{ backgroundColor: "#f2eeee" }} md={3}>

              <Card style={{ width: '18rem', border: "none" }}>
                <ListGroup variant="flush">

                  <ListGroup.Item style={{ backgroundColor: "#f2eeee", display: "flex", alignItems: "center", gap: "20px", borderColor: "transparent" }}>
                    {/* <img style={{ width: "30px" }} src={imageProject} alt="Image project" /> */}
                    <div>
                      <h4>Title project</h4>
                      <p>Subtitle project</p>
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ backgroundColor: "#f2eeee", borderColor: "transparent" }}>
                    <h5>PLANNING</h5>
                    <ListGroup>
                      <ListGroup.Item style={{
                        color: '#000',
                        backgroundColor: "#f2eeee",
                        borderColor: "transparent"
                      }}>
                        Roadmap
                      </ListGroup.Item>
                      <ListGroup.Item style={{
                        color: '#000',
                        backgroundColor: "#f2eeee",
                        borderColor: "transparent"
                      }} >
                        Backlog
                      </ListGroup.Item>
                      <ListGroup.Item style={{ backgroundColor: "#f2eeee", borderColor: "transparent" }}>
                        <Modalka />
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ backgroundColor: "#f2eeee" }}>
                    <h5>DEVELOPMENT</h5>
                    <ListGroup>
                      <ListGroup.Item style={{ backgroundColor: "#f2eeee", borderColor: "transparent" }}>
                        Code
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>


                  <ListGroup.Item style={{ backgroundColor: "#f2eeee" }}>
                    <ListGroup>
                      <ListGroup.Item style={{ backgroundColor: "#f2eeee", borderColor: "transparent" }}>
                        Project pages
                      </ListGroup.Item>
                      <ListGroup.Item style={{ backgroundColor: "#f2eeee", borderColor: "transparent" }}>
                        Add Shortcut
                      </ListGroup.Item>
                      <ListGroup.Item style={{ backgroundColor: "#f2eeee", borderColor: "transparent" }}>
                        Project settings
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>

                </ListGroup>
              </Card>

            </Col>

            <Col className="p-3" style={{ backgroundColor: "lightblue" }} md={9}>

              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Project</Breadcrumb.Item>
              </Breadcrumb>

              {/* =============================== */}
              <h4>Backlog</h4>

              {/* ===== Модальне вікно створення нового таску ===== */}
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Create New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={newTask.name}
                        onChange={handleNewTaskChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>User ID</Form.Label>
                      <Form.Control
                        type="text"
                        name="user_id"
                        value={newTask.user_id}
                        onChange={handleNewTaskChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Status ID</Form.Label>
                      <Form.Control
                        type="text"
                        name="status_id"
                        value={newTask.status_id}
                        onChange={handleNewTaskChange}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={createTask}>
                    Create
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* ===== Модальне вікно створення нового таску ===== */}

              {/* ===== Модальне вікно вибору юзерів ===== */}
              <Modal show={showUsersModal} onHide={() => setShowUsersModal(false)}>
                <Modal.Header>
                  <Modal.Title>Виберіть користувачів</Modal.Title>
                  {/* <p>{idTask}</p>
                  <p>user_id: {getUserIdsByTaskId().join(', ')}</p>  */}
                  {/* Виводимо user_id, що відповідають заданому task_id */}
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    {users.map(user => (
                      <Form.Check
                        key={user.id}
                        type="switch"
                        id={user.id}
                        label={user.name}
                        checked={selectedUsers.includes(user.id)} // Встановлюємо значення "checked" в залежності від наявності id в масиві selectedUsers
                        onChange={() => handleCheckboxChange(user.id)} // Обробник зміни стану чекбокса
                      />
                    ))}
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowUsersModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleCreateTaskUsers}>
                    Create
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* ===== Модальне вікно вибору юзерів ===== */}

              {/* ===== Модальне вікно для коментарів ===== */}
              {/* <Modal size="lg" show={commentsModal} onHide={() => setCommentsModal(false)}> */}
              <Modal size="lg" show={commentsModal} onHide={() => setCommentsModal(false)}>
                <Modal.Header>
                  <Modal.Title>Comments</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    {tasksComments.map((taskComment, index) => {
                      const task = tasks.find(task => task.id === taskComment.task_id);
                      const comment = comments.find(comment => comment.id === taskComment.comment_id);
                      const isEven = index % 2 === 0;

                      if (task && comment) {
                        return (
                          <Toast
                            key={taskComment.comment_id}
                            style={{
                              marginLeft: isEven ? "auto" : "0",
                            }}
                          >
                            <Toast.Header>
                              <strong className="me-auto">User {comment.user_id}</strong>
                              <small>{comment.updated_at}</small>
                            </Toast.Header>
                            <Toast.Body>
                              <p>{getTaskDescription(taskComment.comment_id)}</p>
                            </Toast.Body>
                          </Toast>
                        );
                      } else {
                        return null; // Якщо не знайдено відповідний таск або коментар, повертаємо null
                      }
                    })}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>
                        Comment:
                        <input
                          type="text"
                          name="description"
                          value={newComment.description}
                          onChange={handleInputChange}
                          onKeyPress={handleKeyPress}
                        />
                      </label>
                    </div>
                  </form>
                  <button className="btn btn-secondary" onClick={() => setCommentsModal(false)}>Close</button>
                </Modal.Footer>
              </Modal>
              {/* ===== Модальне вікно для коментарів ===== */}


              <Card border="secondary" style={{ width: '100%' }}>
                <Card.Header>
                  <div className="project__header">
                    <div className="project__header--first">
                      <span>Name project</span>
                      <span><b>SCT Sprint 1 10 May - 24 May (17 issues)</b></span>
                    </div>
                    <div>
                      <button className="btn btn-primary" onClick={() => setShowModal(true)}>+</button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Table bordered>
                      <tbody>
                        {tasks.map(task => (
                          <tr key={task.id} style={{ verticalAlign: 'middle' }}>
                            <td>
                              <Form>
                                <Form.Check aria-label="option 1" />
                              </Form>
                            </td>
                            <td onClick={() => startEditingTask(task.id, task.name)}>
                              {editingTaskId === task.id ? (
                                <input
                                  type="text"
                                  value={editedTaskName}
                                  onChange={e => setEditedTaskName(e.target.value)}
                                  onKeyDown={e => {
                                    if (e.key === "Enter") {
                                      saveEditedTask(task.id);
                                    }
                                  }}
                                />
                              ) : (
                                <>
                                  {task.id}
                                  <span> </span>
                                  {task.name}
                                </>
                              )}
                            </td>
                            <td className="img-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onClick={() => deleteTask(task.id)} style={{ cursor: "pointer" }}>
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                              </svg>
                            </td>
                            <td>
                              {/* <Link className="btn btn-primary" to="" onClick={() => setCommentsModal(true)}>Comments</Link> */}
                              <Link className="btn btn-primary" to="" onClick={() => { test(task.id); setCommentsModal(true) }}>Comments</Link>
                            </td>
                            <td>
                              <select value={task.status_id} onChange={(e) => handleTaskStatusChange(task.id, e.target.value)}>
                                {statuses.map(status => (
                                  <option key={status.id} value={status.id}>{status.name}</option>
                                ))}
                              </select>
                            </td>
                            {/* Вивід всих юзерів які вказані як виконавці завдання */}
                            <td className="block-center" onClick={() => handleOpenUsersModal(task.id)}>
                              {tasksUsers
                                .filter(taskUser => taskUser.task_id === task.id)
                                .map(taskUser => (
                                  <p key={taskUser.user_id}>{getUserName(taskUser.user_id)}</p>
                                ))}
                            </td>
                            {/* Вивід всих юзерів які вказані як виконавці завдання */}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </Container>
      </Layout >
      <Routes>
        <Route path="/comments/:taskId" element={<CommentsPage />} />
      </Routes>
    </>
  );
}



{/* {comments.map((comment, index) => (
                      <Toast
                        key={comment.id}
                        variant="dark"
                        style={{
                          marginLeft: index % 2 === 0 ? "auto" : "0", // зміна стилю для шахового розташування
                        }}
                      >
                        <Toast.Header>
                          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                          <strong className="me-auto">{comment.user_id}</strong>
                          <small>{comment.updated_at}</small>
                        </Toast.Header>
                        <Toast.Body>
                          {tasksComments
                            .filter(taskComment => taskComment.task_id === comment.id)
                            .map(taskComment => (
                              <p key={taskComment.comment_id}>{getTaskDescription(taskComment.comment_id)}</p>
                            ))}
                        </Toast.Body>
                      </Toast>
                    ))} */}

{/* {tasksComments
                      .map((taskComment) => (
                        comments
                          .map((comment, index) => (
                            <Toast
                              key={comment.id}
                              variant="dark"
                              style={{
                                marginLeft: index % 2 === 0 ? "auto" : "0", // зміна стилю для шахового розташування
                              }}
                            >
                              <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">{comment.user_id}</strong>
                                <small>{comment.updated_at}</small>
                              </Toast.Header>
                              <Toast.Body>
                                <p key={taskComment.comment_id}>{getTaskDescription(taskComment.comment_id)}</p>
                              </Toast.Body>
                            </Toast>
                          ))
                      ))} */}