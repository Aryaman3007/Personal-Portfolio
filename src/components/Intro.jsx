import React from 'react'
import "./intro.css"
import Me from "../img/me.jpg"
import Tw from "../img/twitter.png"
import In from "../img/insta.png"
import Gi from "../img/github.png"
import Li from "../img/linkedin.png"

export const Intro = () => {
  return (
    <div className='intro'>
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className='intro-start'>Hello, my name is</h2>
          <h1 className='intro-name'>Aryaman Singh</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className='intro-title-item'>UI Designer</div>
              <div className='intro-title-item'>Competitive Programmer</div>
              <div className='intro-title-item'>Front-End Developer</div>
              <div className='intro-title-item'>Graphic Designer</div>
            </div>
          </div>
          <p className="intro-desc">
          Hello! I am Aryaman Singh, a 3rd year student currently pursuing B.Tech in 
          Electronics and Communication from NIT Agartala. Currently, I am learning DSA and 
          Full Stack Development.
          </p>
        </div>
        <div className="intro-socials">
          <img src={Tw} alt="" className="icon" />
          <a href='https://twitter.com/21uec005'>Twitter</a>
        </div>
        <div className="intro-socials">
          <img src={In} alt="" className="icon" />
          <a href='https://www.instagram.com/aryaman30_/'>Instagram</a>
        </div>
        <div className="intro-socials">
          <img src={Gi} alt="" className="icon" />
          <a href='https://github.com/Aryaman3007'>GitHub</a>
        </div>
        <div className="intro-socials">
          <img src={Li} alt="" className="icon" />
          <a href='https://www.linkedin.com/in/aryaman-singh-171217220/'>Linkedin</a>
        </div>
      </div>   
      <div className="intro-right">
        <div className="img-bg">
          <img src={Me} alt="" className="intro-img" />
        </div>
      </div>     
    </div>
  );
}

export default Intro;
