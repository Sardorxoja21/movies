import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div>
      <div className="fatherfooter">
        <div className="container">
          <div className="row">

            <div className="col-3">
              <img src="https://www.clipartmax.com/png/full/205-2059743_tech-time-logo-tech-time-logo.png" alt="" />
              <button className='btn btn-light mt-3'>Join_The_CommuniTy</button>
            </div>

            <div className="col-3">
              <a href="">THE BASICS</a>
              <br/>
              <a href="">About TMDB</a>
              <br/>
              <a href="">Contact Us</a>
              <br/>
              <a href="">Support Forums</a>
              <br/>
              <a href="">API</a>
              <br/>
              <a href="">System Status</a>
            </div>

            <div className="col-3">
              <a href="">GET INVOLVED</a>
              <br/>
              <a href="">Contribution Bible</a>
              <br/>
              <a href="">Add New Movie</a>
              <br/>
              <a href="">Add New TV Show</a>
            </div>

            <div className="col-3">
              <a href="">COMMUNITY</a>
              <br/>
              <a href="">Guidelines</a>
              <br/>
              <a href="">Discussions</a>
              <br/>
              <a href="">Leaderboard</a>
              <br/>
              <a href="">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header