import React from 'react'
import './components.css'

export const Topbar = (props) => {
    return(
        <nav className='topbar'>
            <div className='contents'>
                <img className='logo' src="logo192.png" alt="Logo" />
                <div className='buttons'>
                    <a href="#about">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#publications">Publications</a>
                    <a href='PDF/CV.pdf'>CV</a>
                </div>             
            </div>
        </nav>
    )
}