import React from 'react'
import "./Home.css"

function Home() {
  return (
    <>
    
    <html lang="en"/>
    <head>
      <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
    <link rel="stylesheet" href="style.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>

    </head>
    <body>
        <nav>

            <img className="logo" src='/images/logo.jpg' alt="logo"/>

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
        </body>
    </>
  )
}

export default Home