import React from "react";
import "./Header.css";


function Header (){
    return(
    <div className="header">
        <nav>
            <div >
            <a href="/home" className="logo">
                <img src="Group_4_Project_logo.-removebg-preview.png" alt ="website_logo"></img>
            </a>
            <a href="/booklist" className="navigation-menu">Book List</a>
            <a href="/about" className="navigation-menu">About</a>
            <a href="/contact" className="navigation-menu">Contact Us</a>        
         </div> 
        </nav>
    </div>
    )
};

export default Header;