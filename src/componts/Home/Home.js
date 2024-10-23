import React from 'react'
import "./Home.css"
import '../Courses/Courses'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
        <nav>

            <img  className="logo" src='/images/logo.jpg' alt="logo"/>

        <ul>
       
            
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">logout</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
       <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..."/>
            <button className="search-button">🔍</button>
        </div>
             </nav>
       
    </>
  )
}

export default Home