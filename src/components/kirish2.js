import React, { useEffect, useState } from 'react'
import '../components/style.css'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'



export const Kirish2 = () => {
    const axios = require('axios').default
    const [from,setfrom] = useState([])
    useEffect(()=>{
        axios.get("http://myjson.dit.upm.es/api/bins/3u4a")
        .then(function (v) {
            console.log(v.data);
            setfrom(v.data)
        })
    }, [])
      
  return (
   <div>
    {
        (from.length > 0) && (
           <div className="container mt-5">
            <div className="row">
                {
                    from.map((v,i)=>{
                        return <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                                <div className="gallery">
                                    <div className="content">
                                        <img src={v.picture_main} alt="" />
                                        <h3 className='text-success'>{v.category}</h3>
                                        <p>{v.info}</p>
                                        <h6>$:{v.price}</h6>
                                        <ul>
                                            <li><i><AiFillStar/></i></li>
                                            <li><i><AiFillStar/></i></li>
                                            <li><i><AiFillStar/></i></li>
                                            <li><i><AiFillStar/></i></li>
                                            <li><i><AiFillStar/></i></li>
                                        </ul>
                                       <Link to={`/kirish/${v.id}`}><button className='buy-1'>Sotib olish</button></Link>
                                </div>
                                </div>
                            </div>
                    
                    })
                }
            </div>
           </div>
        ) || (
            <div id="container">
                <div className="error-box">
                  <div className="face">
                  <div className="eyes1"></div>
                    <div className="eye2"></div>
                    <div className="mouth"></div>
                  </div>

                <div className="shadow"></div>
                <h3>Error</h3>
                <p>OH NO SOMETHING WENT WRONG</p>
                <button className='btn btn-danger'>Try again</button>
                </div>
            </div>
        )
    }
   </div>
  )
}

export default Kirish2