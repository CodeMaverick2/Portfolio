import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="navBar">
            <div className="left">
                <h1>Tejas Ghatule</h1>
            </div>
            <div className="right">
                <button onClick={toggleSidebar} className="menu-button">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="menu-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
                    </svg>
                </button>
            </div>

            {isSidebarOpen && (
                <>
                    <div className="sidebar open">
                        <button className="close-btn" onClick={toggleSidebar}>×</button>
                        <a href="#home" onClick={toggleSidebar}><i className="icon-home"></i>Home</a>
                        <a href="#about" onClick={toggleSidebar}><i className="icon-about"></i>About</a>
                        <a href="#services" onClick={toggleSidebar}><i className="icon-services"></i>Services</a>
                        <a href="#projects" onClick={toggleSidebar}><i className="icon-project"></i>Project</a>
                        <a href="#contacts" onClick={toggleSidebar}><i className="icon-contact"></i>Contact</a>
                    </div>
                    <div className="blur-background" onClick={toggleSidebar}></div>
                </>
            )}
        </div>
    );
}

export default NavBar;
