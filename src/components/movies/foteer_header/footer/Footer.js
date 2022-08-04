import React from 'react'
import './footer.css'
import {FaPlus} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="fatherul">
        <ul className='leftul'>
          <li><img className='tmdblogo' src="https://imprexismedia.com/wp-content/uploads/2020/03/php-1-logo-png-transparent.png" alt="" /></li>
          <li>Movies
            <div>
            <ul className='letfulmovies'>
              <li><Link className='letfulmovieslink' to="">Popular</Link></li>
              <li><Link className='letfulmovieslink' to="">Now Playing</Link></li>
              <li><Link className='letfulmovieslink' to="/upcoming">Uncoming</Link></li>
              <li><Link className='letfulmovieslink' to="">Top Rated</Link></li>
            </ul>
            </div>
          </li>
          <li>Tw Show</li>
          <li>People</li>
          <li>More</li>
        </ul>

        <ul className='rightul'>
          <li><p className='text-light fs-4 pt-3'><FaPlus/></p></li>
          <li><button className='uzbutton'>Uz</button></li>
          <li>Login</li>
          <li>Join Tbd</li>
          <li><p className='text-light fs-4 pt-3'><BsSearch/></p></li>
        </ul>

      </div>
    </div>
  )
}

export default Footer