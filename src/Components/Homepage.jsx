import React from 'react'
import Banner from '../images/homepage-banner-demo.jpg';
import Second from '../images/homepage-second-banner.jpg';
// import Bicycle1 from '../images/b1.jpg';
import image2 from '../images/b2.jpg';
import image3 from '../images/b3.png';
import image4 from '../images/b4.jpg';
import '../Style/home.css';
import {RxCounterClockwiseClock} from 'react-icons/rx';
import {ImClock} from 'react-icons/im';
import {CgSandClock} from 'react-icons/cg';
import {BsCalendar3} from 'react-icons/bs';
// import fifth_background from '../images/fifth_background.jpg';

export default function Homepage() {
  return (
    <div className='home'>
      <img src={Banner} alt="Error" className='banner' />
      <div className="bar">       .       </div>
      <div className='banner-word'>
        <div className="w1">RENT</div>
        <div className="w12">A BIKE</div>
        <div className="w13">CHEAPLY</div>
        <div className="w2">Book a bike for hire at a low price and</div>
        <div className="w21">get the next rental with a <b>25% discount!</b></div>
        <button className='banner-btn'>RENTAL BIKE</button>
      </div>
      <div className="banner-second">
        <img src={Second} alt="Error" className='second'/>
        <div className="bar-second">              </div>
        <div className='banner-second-word'>
            <div className="s1">ABOUT</div>
            <div className="s12">OUR</div>
            <div className="s13">COMPANY</div>
            <div className="s2">We are cycling enthusiasts, fall in love with our city, </div>
            <div className="s21">and tour guides obsessed with showing it.</div>
            <button className='banner-second-btn'>ABOUT</button>
            <button className='sub'>SUBCRIBE</button>
        </div>
        </div>
        <div className="banner-third">
            <div className="bar-third">              </div>
            <div className="banner-third-word">
                <div className="t1">COST</div>
                <div className="t12">OF BIKING</div>
                <div className="t2">There are a lot of loyal customers, who come back to rent</div>
                <div className="t21">bicycles. We provide affordable prices for renting bikes.</div>
                <button className='banner-third-btn'>RENTAL BIKE</button>
                <div className="hours">
                    <ImClock className='hourClock'/>
                    <div className="tim-hour">4 Hours<div className="rate">(₹200)</div></div>
                    <div className="hour h1">You can rent a bike for 4 hours</div>
                    <div className="hour h2">and enjoy your riding around the city.</div>
                </div>
                <div className="days">
                    <RxCounterClockwiseClock className='DayClock'/>
                    <div className="tim-day">1 Day<div className="rate">(₹700)</div></div>
                    <div className="day d1">There are a lot of loyal customers,</div>
                    <div className="day d2">who come back to rent bicycles.</div>
                </div>

                <div className="weeks">
                    <CgSandClock className='weekClock'/>
                    <div className="tim-week">1 Week<div className="rate">(₹1200)</div></div>
                    <div className="week week1">There are a lot of loyal customers,</div>
                    <div className="week week2">who come back to rent bicycles.</div>
                </div>

                <div className="months">
                    <BsCalendar3 className='monthClock'/>
                    <div className="tim-month">1 Month<div className="rate">(₹2000)</div></div>
                    <div className="month m1">There are a lot of loyal customers,</div>
                    <div className="month m2">who come back to rent bicycles.</div>
                </div>
            </div>
        </div>
      <div className="banner-fourth">
        <div className="fourth">  </div>
          <div className="bar-fourth">              </div>
          <div className="f1">CHOOSE</div>
          <div className="f2">YOUR BIKE</div>
          <button className='banner-fourth-btn'>VIEW MORE</button>
          <div className="cycleItem">
            {/* <img src={Bicycle1} alt="error" className='Bicycle1'/> */}
            {/* <img src={Bicycle2} alt="error" className='Bicycle2'/>
            <img src={Bicycle3} alt="error" className='Bicycle3'/>
            <img src={Bicycle4} alt="error" className='Bicycle4'/> */}
            <div className="Bicycle2">
              <img src={image2} alt="error" className='image2'/>
              <div className="fouth-text">
                <div className="bigtext">MTB Bike - "Ranger Storm" </div>
                <div className="smalltext">
                  Exclusive Choose
                </div>
                <div className="bikerate">
                  <b>₹ 700.00 </b>/ Days
                </div>
              </div>
              <button className="cycle-btn">RENT</button>
            </div>
            <div className="Bicycle3">
              <img src={image3} alt="error" className='image3'/>
              <div className="fouth-text">
                <div className="bigtext">MTB Bike - "Sports" </div>
                <div className="smalltext">
                  Exclusive Choose
                </div>
                <div className="bikerate">
                  <b>₹ 700.00 </b>/ Days
                </div>
              </div>
              <button className="cycle-btn">RENT</button>
            </div>
            <div className="Bicycle4">
               <img src={image4} alt="error" className='image4'/>
               <div className="fouth-text">
                <div className="bigtext">Drift Bike - "Fittness Bike" </div>
                <div className="smalltext">
                  Exclusive Choose
                </div>
                <div className="bikerate">
                  <b>₹ 700.00 </b>/ Days
                </div>
              </div>
              <button className="cycle-btn">RENT</button>
            </div>
          </div>
      </div>
      <dov className="banner-fifth">
        <img src={image3} alt="no" className='fifth_post'/>
      </dov>
    </div>
  )
}
