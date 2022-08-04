import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Key = "51cc7f5f459038d8f6fd27150449d6a1"

function Movies2() {
  const [control,setControl] = useState([])
  const ID = parseInt(useParams().id);
  console.log("ID",ID);

  const axios = require('axios').default;
  const Key = "51cc7f5f459038d8f6fd27150449d6a1"

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`)
    .then(function (v) {

        let a = v.data.results.filter(sonic =>{
          return sonic.id == ID
        })
        console.log("kelaqo", a);
        setControl(...a)
    })
}, [])

console.log("control",control);

  return (
    <div>
        {
            <div className="container">
                <div className="row">
                    <div className="decription2 col">
                    <img src={`https://image.tmdb.org/t/p/original${control.poster_path}`} alt="" />
                        <h3>{control.title}</h3>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Movies2