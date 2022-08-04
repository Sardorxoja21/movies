import React, {useEffect, useState} from 'react'
import Header from './header'
import {BsHeart, BsSave2, BsEmojiSmile, BsHeartFill} from 'react-icons/bs'
import {TbPoint} from 'react-icons/tb'
import {FaRegComment, FaShare} from 'react-icons/fa'

function Instagram() {
  const axios = require('axios').default
  const [from,setfrom] = useState([])

  useEffect(()=>{
      axios.get("http://myjson.dit.upm.es/api/bins/idf6")
      .then(function (v) {
          console.log(v.data);
          setfrom(v.data)
      })
  }, [])

  const Like = (v,i)=>{

    let master = [...from]
    console.log(v,i);
    from[i].Like =!v;

    setfrom(master)

    console.log( from[i].Like);
  }

  return (
    <div>
      {
        <div className="html2">
          <div className="fixed1">
            <Header/>
          </div>
          
          <div className="body2">
            <div className="container">
            <div className="rightcard">
              <div className="card">
              <div class="swiffy-slider slider-item-show4 slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-32x9 bg-white shadow-lg py-3 py-lg-4" data-slider-nav-autoplay-interval="2000">
    <div class="slider-container">
        <div><img src="https://www.pikpng.com/pngl/b/238-2383593_s-logo-png-transparent-cool-s-logo-clipart.png" alt="..."/></div>
        <div><img src="https://freepngimg.com/thumb/panther/71737-school-permian-panther-cat-high-logo-mascot.png" loading="lazy" alt="..."/></div>
        <div><img src="https://www.fotolip.com/wp-content/uploads/2016/05/Warner-Bros-logo-9.png" loading="lazy" alt="..."/></div>
        <div><img src="https://www.seekpng.com/png/full/287-2870261_universal-studios-globe-png-legendary-pictures-universal-pictures.png" loading="lazy" alt="..."/></div>
        <div><img src="https://pngimg.com/uploads/wifi/wifi_PNG62225.png" loading="lazy" alt="..."/></div>
        <div><img src="https://www.pngjoy.com/pngl/606/30531821_logo-de-iphone-verde.png" loading="lazy" alt="..."/></div>
        <div><img src="https://www.freepnglogos.com/uploads/pepsi-png-logo/pepsi-logo-pepsi-symbol-meaning-history-png-logo-3.png" loading="lazy" alt="..."/></div>
        <div><img src="https://www.pikpng.com/pngl/b/598-5986350_c-sharp-c-logo-clipart.png" loading="lazy" alt="..."/></div>
        <div><img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png" loading="lazy" alt="..."/></div>
        <div><img src="https://res.cloudinary.com/kentcdodds-com/image/upload/f_auto,q_auto,dpr_2.0/v1620775101/kentcdodds.com/blog/don-t-solve-problems-eliminate-them/react_nlj9aq.png" loading="lazy" alt="..."/></div>
        <div><img src="https://static.tildacdn.com/tild3861-3865-4065-b731-366339663439/kisspng-check-mark-l.png" loading="lazy" alt="..."/></div>
        <div><img src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png" loading="lazy" alt="..."/></div>
        <div><img src="https://i.pinimg.com/originals/a4/74/e8/a474e8b91c3ddc13b4f161c0947aa3e9.png" loading="lazy" alt="..."/></div>
        <div><img src="https://www.freeiconspng.com/uploads/logo-facebook-glossy-hd-pictures-25.png" loading="lazy" alt="..."/></div>
        <div><img src="https://www.pinclipart.com/picdir/big/577-5779107_globe-clip-art-world-logo-transparent-background-png.png" loading="lazy" alt="..."/></div>
        <div><img src="https://cdn.onlinewebfonts.com/svg/download_39214.png" loading="lazy" alt="..."/></div>
        <div><img src="https://www.pngkit.com/png/full/84-840968_email-icons-clipart-blue-email-png.png" loading="lazy" alt="..."/></div>
        <div><img src="https://www.pngkit.com/png/full/19-192624_big-image-chef-knife-clip-art.png" loading="lazy" alt="..."/></div>
        <div><img src="https://i.pinimg.com/originals/29/1d/2e/291d2e3ce9e6167dea0a4f6c3aa8d17a.png" loading="lazy" alt="..."/></div>
    </div>


</div>
              </div>
              <div className="topcard">
                {
                  (from.length > 0) && (
                    <div className="card mt-2">
                      {
                        from.map((v,i)=>{
                          return <div>
                             <div className="photologofather">
                             <div className="photologo">
                             <img className='photologo1' src={v.photo_logo} alt="" />
                             <p className='pt-3 fs-5'>{v.Channel_Name}</p>
                             </div>
                             <div className="point d-flex">
                              <p className='text-dark'><TbPoint/></p>
                             <p className='text-dark'><TbPoint/></p>
                             <p className='text-dark'><TbPoint/></p>
                              </div>
                             </div>

                              <img src={v.Pictures} alt="" />
                              <div className="icons2 d-flex justify-content-between">
                                <div className="oneicons d-flex">
                                  <p className='fs-4 ps-3' onClick={()=>Like(v.Like,i)}>
                                    <span className={`${(v.Like) ? "d-none" : "d-block"}`}><BsHeart/></span>
                                    <span className={`${(v.Like) ? "d-block" : "d-none"}`}><BsHeartFill/></span>
                                     </p>
                                  <p className='fs-4 ps-3'><FaRegComment/></p>
                                  <p className='fs-4 ps-3'><FaShare/></p>
                                  
                                  
                                </div>
                                <p className='fs-4 pe-2'><BsSave2/></p>
                              </div>
                              <div className="otmetok d-flex justify-content-lg-start">
                              <p className='ps-3'>{v.Share}</p>
                              </div>
                              <div className="otmetok w-75 d-flex justify-content-lg-start">
                              <p className='ps-3'>{v.Description}</p>
                              </div>
                              <div className="otmetok d-flex justify-content-lg-start">
                              <p className='ps-3'>{v.koment}</p>
                              </div>
                              <div className="otmetok d-flex justify-content-lg-start">
                              <p className='ps-3'>{v.time}</p>
                              </div>

                              <div className="card input1">
                              <div class="input-group mb-3 input1">
                                    <span class="input-group-text" id="basic-addon1"><BsEmojiSmile/></span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                  </div>
                              </div>
                          </div>
                        })
                      }
                    </div>
                  )
                }
                </div>
              </div>
            </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Instagram