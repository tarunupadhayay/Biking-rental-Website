import React,{useState,useEffect} from 'react';
import Logo from '../images/logo.png';
import '../Style/Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const naviagte = useNavigate();
  const[Navbar,setNavbar] = useState(true);
  const Changebackground = () => {
    // console.log(window.scrollY);
    if(window.scrollY >= 80)
    {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  };
  useEffect(()=>{
    // console.log(window.screenY);
    Changebackground()
  });

  window.addEventListener('scroll',Changebackground);
  return (
    <div className='nav-bar'>
      {Navbar ? 
        <div className="pages-new">
        <div className="ti" onClick={() => naviagte("/home")}>
            Home
        </div>
        <div className="ti" onClick={() => naviagte("/about")}>
            About
        </div>
        <div className="ti" onClick={() => naviagte("/services")}>
            Services
        </div>
        <div className="ti" onClick={() => naviagte("/blog")}>
            Blog
        </div>
        <div className="ti" onClick={() => naviagte("/contact")}>
            Contact Us
        </div>
      </div>
        :
      <>
        <img src={Logo} alt="Error" className='logo' />
      <div className="pages">
        <div className="li" onClick={() => naviagte("/home")}>
            Home
        </div>
        <div className="li" onClick={() => naviagte("/about")}>
            About
        </div>
        <div className="li" onClick={() => naviagte("/services")}>
            Services
        </div>
        <div className="li" onClick={() => naviagte("/blog")}>
            Blog
        </div>
        <div className="li" onClick={() => naviagte("/contact")}>
            Contact Us
        </div>
      </div>
        </>
      }
    </div>
    
  )
}
