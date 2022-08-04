import React, {useEffect, useState} from 'react'
import Footer from '../foteer_header/footer/Footer'
import Header from '../foteer_header/header/Header'
import {AiOutlineShareAlt} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../home.css'

const My_key = "51cc7f5f459038d8f6fd27150449d6a1"

const Upcoming = () => {
  const axios = require('axios').default
  const [from,setfrom] = useState([])

  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${My_key}&language=en-US&page=1`)
      .then(function (v) {
          console.log(v.data.results);
          setfrom(v.data.results)
      })
  }, [])

  return (
    <div>
      {
        (from.length) && (
          <div>
            <div className="fixedtopul">
            <Footer/>
              </div>
              <div className="container">
                <div className="words">
                  <div className="rightwords">
                    <div className="container">
                      <h2>Now_Playing_Movies</h2>

                      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
                    </div>
                  </div>
                  <div className="leftwords">
                    <div className="container">
                      <div className="row">
                        {
                          from.map((v,i)=>{
                            return <div className="col-3">
                              <div className="card ms-3 mt-3">
                                <Link to={`/upcomingoff/${v.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original${v.poster_path}`} alt="" />
                              <p className='shareme fs-4 text-light'><AiOutlineShareAlt/></p>
                              <h6 className='text-dark pt-4'>{v.title}</h6>
                              <p>{v.release_date}</p>
                                </Link>
                              
                              </div>
                            </div>
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          <Header/>
          </div>
          
        )
      }
    </div>
  )
}

export default Upcoming