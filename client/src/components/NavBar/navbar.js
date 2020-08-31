import React from 'react'
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbackground">
        <a href="/"><img src="./images/logothumbnail.png" className="logo" alt="logo"/></a>
        <div className="d-flex flex-grow-1">
          <span className="w-100 d-lg-none d-block"></span>
          <a href="/"><h1 className="myName">Vincent Varghese</h1></a>
          <div className="w-100 text-right hamburger">
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#myNavbar7">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
          <ul className="navbar-nav ml-auto flex-nowrap">
            <li className="nav-item">
              <a href="/resume" className="nav-link">Resume</a>
            </li>
            <li className="nav-item">
              <a href="/portfolio" className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav> 
    )
}