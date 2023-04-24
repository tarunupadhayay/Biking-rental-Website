import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Homepage';
import Footer from './Components/footer';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Services from './Components/Services';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Navbar/> <Home/> <Footer/></>}/>
      <Route path='/home' element={<><Navbar/> <Home/> <Footer/></>}/>
      <Route path='/about' element={<><Navbar/> <About/> <Footer/></>}/>
      <Route path='/services' element={<><Navbar/> <Services/> <Footer/></>}/>
      <Route path='/blog' element={<><Navbar/> <Blog/> <Footer/></>}/>
      <Route path='/contact' element={<><Navbar/> <Contact/> <Footer/></>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
