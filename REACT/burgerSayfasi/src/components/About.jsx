import React from 'react'
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css"

export const About = () => {
    return (
        <div className='about'>
            <div className="aboutTop" style={{ backgroundImage: `url(${BannerImage})` }}>
            </div>
            <div className='aboutBottom'>
                <h1>Hakkımızda</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, sit dolore? Cupiditate vel harum rem error, possimus accusantium molestiae dolore magni sint debitis odio similique minima placeat consectetur numquam adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, sit dolore? Cupiditate vel harum rem error, possimus accusantium molestiae dolore magni sint debitis odio similique minima placeat consectetur numquam adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, sit dolore? Cupiditate vel harum rem error, possimus accusantium molestiae dolore magni sint debitis odio similique minima placeat consectetur numquam adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, sit dolore? Cupiditate vel harum rem error, possimus accusantium molestiae dolore magni sint debitis odio similique minima placeat consectetur numquam adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, sit dolore? Cupiditate vel harum rem error, possimus accusantium molestiae dolore magni sint debitis odio similique minima placeat consectetur numquam adipisci.</p>
            </div>
        </div >
    )
}
