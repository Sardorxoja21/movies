import React from 'react'
import '../restaurant/restaurant.css'
import { Link } from 'react-router-dom'

const Restaurant = () => {

  return (
    <div>
       <nav>
        <div className="logo">Coding nepals</div>

        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Services</a>
            <ul>
                <li><a href="">Pages</a></li>
                <li><a href="">Elements</a></li>
                <li><a href="">Icons</a></li>
            </ul>
                </li>
            <li><a href="">POrtfolio</a></li>
            <li><a href="">Contact</a></li>
        </ul>
       </nav>
    </div>
  )
}

export default Restaurant