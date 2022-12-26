import React from "react";
import '../styles/footer.css'
import linkedin from '../media/linkedin_logo.png'
import discord from '../media/discord_logo.png'
import github from '../media/github_logo.png'


const Footer = () => {
    return (
        <div classname ='footer'>
            <p className="ftext"> Thank you for stopping by! Please check me out on social media </p>
            <div className="logobox">
                <a href="https://www.linkedin.com/in/adam-wagh/" target='_blank'>
                <img className="logo" src={linkedin}></img>
                </a>
                <a href="https://discordapp.com/users/adamw2630" target='_blank'>
                <img className="logo" src={discord}></img>
                </a>
                <a href="https://github.com/adamwagh512" target='_blank' >
                <img className="logo" src={github}></img>
                </a>

            </div>
        </div>   
)}

export default Footer