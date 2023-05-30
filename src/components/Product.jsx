import React from 'react'
import "./product.css"
import { ThemeContext } from '../context'
import { useContext } from 'react'

const Product = ({img,link,title}) => {
  const theme = useContext(ThemeContext)
  const darkMode= theme.state.darkMode
  return (
    <div className='p'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <h4 style={{paddingLeft: "30px" , color: darkMode && "#222"}}>{title}</h4>
        </div>
        <a href={link}>
            <img src={img} alt="" className="p-img" />
        </a>
    </div>
  )
}

export default Product