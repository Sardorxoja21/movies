import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Amaliyot/amaliyot.css'

const Key = "51cc7f5f459038d8f6fd27150449d6a1"

function Movies() {
    const axios = require('axios').default
    const [tom,settom] = useState([])

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`)
        .then(function (v) {
            console.log(v.data.results);
            settom(v.data.results)
        })
    }, [])


  return (
    <div>
        {
            (tom.length > 0) && (
                <div className="container">
                    <div className="row">
                        {
                            tom.map((v,i)=>{
                                return <div className="col-3">
                                    <div className="card mt-3">
                                        <img src={`https://image.tmdb.org/t/p/original${v.poster_path}`} alt="" />
                                        <Link to={`/movies2/${v.id}`}>More</Link>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Movies