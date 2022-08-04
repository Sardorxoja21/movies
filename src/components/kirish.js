import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "swiffy-slider/css"
import { swiffyslider } from 'swiffy-slider'
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});


function Kirish() {
  const [control,setcontrol] = useState([])
  const ID = Number(useParams().id);
  console.log("ID",ID);

  const axios = require('axios').default

  useEffect(()=>{
    axios.get("http://myjson.dit.upm.es/api/bins/3u4a")
    .then(function (v) {

        let a = v.data.filter(sonic =>{
          return sonic.id == ID
        })
        setcontrol(...a)
    })
}, [])

console.log(control);
  
  return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
          <div class="swiffy-slider slider-item-ratio slider-item-ratio-16x9 slider-nav-animation slider-nav-animation-fadein slider-item-first-visible" id="swiffy-animation">
    <ul class="slider-container" id="container1">
        <li id="slide1" class="slide-visible"><img src={control.picture_main} alt="..."/></li>
        <li id="slide2"><img src={control.picture_1} alt="..."/></li>
        <li id="slide3"><img src={control.picture_2} alt="..."/></li>
    </ul>

    <button type="button" class="slider-nav" aria-label="Go to previous"></button>
    <button type="button" class="slider-nav slider-nav-next" aria-label="Go to next"></button>

    <div class="slider-indicators">
        <button aria-label="Go to slide" class="active"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        {/* <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button> */}
    </div>
</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Kirish