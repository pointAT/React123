import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';

import Courses from './Courses/Courses';
import React from 'react'

const App = () => {
  return (
    <> 
    
    <Router>

      <Home>
         <Routes>

        <Route path='/Courses' element={<Courses />}/>
         </Routes>
         </Home>
      <Header />
     
      </Router>
   
    </>
  );
};



export default App;
/*
function App() {
  return (
    <>
    <Home />
    <Container />
    </>
  );
}
  */