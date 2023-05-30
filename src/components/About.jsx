import React from 'react'
import "./about.css"
import Ab from "../img/about.jpg"

export const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
          <div className="about-card bg"></div>
          <div className="about-card">
            <img src={Ab} alt="" className="img-card" />
          </div>
        </div>
        <div className="about-right">
          <h1 className="about-title">ABOUT ME</h1>
          <p className="about-desc">
          <br/>
          As an aspiring software developer, I am embarking on a 
          fascinating journey into the world of technology and programming. 
          Software development is a dynamic and ever-evolving field that 
          offers immense opportunities for growth and innovation.<br/>
          <br/>
          I have a passion for coding and problem-solving, which will be my 
          driving force as I tackle complex challenges and find creative 
          solutions. I pay close attention to detail and approach problems 
          with an analytical mindset. Writing clean, efficient, and 
          maintainable code is important to me, as I strive to deliver 
          high-quality software solutions.<br/>
          <br/>
          The path to becoming a skilled software developer may have its 
          challenges, but the rewards are immense. The ability to create 
          software that can make a positive impact on people's lives, 
          businesses, and society as a whole is truly gratifying. I am 
          committed to continuous growth, staying curious, and adapting 
          to the ever-changing landscape of software development.<br/>
          <br/>
          I will keep coding, learning, and enjoying the exciting journey 
          ahead as an aspiring software developer!
          </p>
        </div>
    </div>
  )
}

export default About
