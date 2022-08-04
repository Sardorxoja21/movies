import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../home.css'
import {AiOutlineOrderedList} from 'react-icons/ai'
import {RiHeartLine} from 'react-icons/ri'
import {MdSaveAlt} from "react-icons/md"
import {IoIosStarOutline} from 'react-icons/io'

const My_key = "51cc7f5f459038d8f6fd27150449d6a1"

const Upcomingoff = () => {
    const [data,setData] = useState([])

    const Id = Number(useParams().id)
    console.log(Id);


    const axios = require(`axios`).default

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${My_key}&language=en-US&page=1`)
        .then(function (v) {
            // console.log("homeoffdan",v.data.results);
            const a = v.data.results.filter(soz=>{
                return soz.id == Id
            })
            setData(...a)
            console.log(a);
        })
    }, [])
    
  return (
    <div>
        <div className="backdrop">
        <img className='bacgroundimg w-100 h-50' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
        <div className="backdropof">
                <div className="row">
                    <div className="col-3">
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />
                    </div>
                    </div>
                    <div className="col-9">
                       <div className="nameandate d-flex text-light">
                       <h3>{data.original_title}</h3>
                       <h4 className='ps-5 pt-4'>{data.release_date}</h4>
                       </div>
                       <h6 className='text-light pt-3'>{data.release_date}, {data.original_language}, {data.popularity} 1h 59m</h6>

                       <div className="mee123 mt-4">
                        <img src="https://freepngimg.com/thumb/graphic_design/58095-label-off--50-sale-download-hd-png.png" alt="" />
                        <span className='text-light mt-4'>
                            <h6>User</h6>
                            <h6>Score</h6>
                        </span>
                       <span className='d-flex mt-4' id='iconfather'>
                       <p className='text-light fs-3'><AiOutlineOrderedList/></p>
                        <p className='text-light fs-3'><RiHeartLine/></p>
                        <p className='text-light fs-3'><MdSaveAlt/></p>
                        <p className='text-light fs-3'><IoIosStarOutline/></p>
                       </span>
                       </div>

                       <h6 className='text-light pt-3 fst-italic'>The one is not the only.</h6>

                       <h5 className='text-light pt-3'>Overview</h5>

                       <p className='text-light pt-3'>{data.overview}</p>
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Upcomingoff