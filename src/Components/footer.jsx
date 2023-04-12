import React from 'react'
import '../Style/footer.css';
import Logo from '../images/logo.png';
import {RiSendPlaneFill} from 'react-icons/ri';

export default function footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer1">
        <div className="f11">
            <div className="footer-heading">
                <img src={Logo} alt="Error in logo" className='log'/>
                <div className='footer-head'>Biking</div>
            </div>
            <div className="footer-details">
                We are cycling enthusiasts, fall in love with our city, and tour guides obsessed with showing it.
            </div>
            <div className="footer-right">
                © 2020 – Trialem. All Rights Reserved.
            </div>
        </div>
      </div>
      <div className="footer2">
        <div className="footer-contact">CONTACT US</div>
        <div className="contact-details">
             <div className="con">
                <div className="footer-contact-head">Phone:</div>
                <div className="footer-contact-details"> + 123 – 456 – 7890</div>
             </div>
             <div className="con">
                <div className="footer-contact-head">Address:</div>
                <div className="footer-contact-details"> 470 Lucy Forks,Patriciafurt, YC7B 3UT</div>
             </div>
             <div className="con">
                <div className="footer-contact-head">Mail:</div>
                <div className="footer-contact-details">info@demolink.org</div>
             </div>
        </div>
      </div>
      <div className="footer3">
        <div className="sub-head">SUBSCRIBE</div>
        <div className="sub-input-box">
            <input type="text" className='sub-input' placeholder='Your Mail*'/>
            <RiSendPlaneFill className='sub-send-icon'/>
        </div>
        <div className="sub-details">
            By renting our bikes you 100% guarantee yourself a healthy life!
        </div>
      </div>
      </div>
    </div>
  )
}
