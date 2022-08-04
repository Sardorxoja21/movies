import React from 'react'
import {FaSearch, FaRegCompass} from 'react-icons/fa'
import {RiHome5Fill} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {IoMdAddCircleOutline} from 'react-icons/io'
import {TbLogout} from 'react-icons/tb'
import {BsHeart} from 'react-icons/bs'
import './instagram.css'

function header() {
  return (
    <div className='card'>
        <ul className='d-flex justify-content-between'>
            <li>
                <h1 className='instagram1'>Instagram</h1>
            </li>
            
            <li>
                <div className="searchbox">
                    <input type="text" className='search-txt' placeholder='Type To Search' name='' />
                    <a href="#" className='search-btn'>
                        <FaSearch/>
                    </a>
                </div>
            </li>

            <li>
                <div className="wrapper">
                    <div className="icon home">
                    <div className='tooltip1'>Home</div>
                        <span><p><RiHome5Fill/></p></span>
                    </div>
                    <div className="icon message">
                        <div className='tooltip1'>Message</div>
                        <span><p><AiOutlineMessage/></p></span>
                    </div>
                    <div className="icon add">
                        <div className="tooltip1">Add</div>
                        <span><p><IoMdAddCircleOutline/></p></span>
                    </div>
                    <div className="icon search1">
                        <div className="tooltip1">Search</div>
                        <span><p><FaRegCompass/></p></span>
                    </div>
                    <div className="icon like">
                        <div className="tooltip1">Like</div>
                        <span><p><BsHeart/></p></span>
                    </div>
                    <div className="icon accaunt">
                        <div className="tooltip1">Accaunt</div>
                        <span><p><TbLogout/></p></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default header