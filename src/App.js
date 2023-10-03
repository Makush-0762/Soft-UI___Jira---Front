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


function App() {
  return (
    <>
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
    </>
  );
}

export default App;
