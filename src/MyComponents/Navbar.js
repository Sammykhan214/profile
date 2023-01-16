import React from "react"
import reactLogo from "../MyComponents/React.png"


export default function Navbar(){
    return(
        <nav>
            <img 
                src={reactLogo}
                alt="React Logo"
                className="nav--icon"
                width={60}
                height={60}
            />

            <h2 className="nav--logo_text">React Facts</h2>
            <h4 className="nav--title_text">React Course - Project 1</h4>
        </nav>
        //<h1>Navbar Goes Here.</h1>
    )
}