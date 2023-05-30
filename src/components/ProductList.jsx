import React from 'react'
import "./productList.css"
import Product from './Product'
import { products } from '../data'

export const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <p className="pl-title">Create & Inspire</p>
        <p className="pl-desc">
        My portfolio showcases a diverse range of projects that highlight
        my expertise in HTML, CSS, and JavaScript. Using the latest front-end frameworks and 
        libraries such as React I create responsive and mobile-friendly websites 
        that adapt seamlessly to different screen sizes. I pay attention to 
        detail, ensuring pixel-perfect designs and smooth user interactions. 
        Through my front-end development skills, I aim to create intuitive 
        interfaces and optimize performance, providing users with a seamless 
        browsing experience. My portfolio represents my dedication to 
        delivering high-quality front-end solutions that meet clients 
        objectives and enhance their online presence.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
