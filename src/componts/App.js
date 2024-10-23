import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Header3 from './Header/Header3';
import Courses from './Courses/Courses';
import React from 'react'
import Header2 from './Header/Header2';

const App = () => {
  return (
    <> 
    
  <Home/>
<Header/> 

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

/*
 <Router>
    <Home />
   
           <Routes>
                   <Route path='/' element={<Header />}/>
                  
                   <Route path='/Courses' element={<Courses />}/>
            </Routes>
          
    </Router>
    */