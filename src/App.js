import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faSlack, faFacebook, faTwitter, faInstagram, faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';

import './Pages/style.scss';

function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
      <div className='header_box'>
        <header className="header">
          <div className="logo" onClick={()=>{navigate('/')}}>
            <div className='icon'>
              <FontAwesomeIcon icon={faSlack} size='2x' />
            </div>
            <div className='text'>
              <div className='text_top'>ATLASIA</div>
              <div className='text_bottom'>the realm of dragons</div>
            </div>
          </div>
          <div className='menu_box'>
            <ul className='menu_left'>
              <li className='home'><Link to='/' className='main_menu'>HOME</Link></li>
              <li className='about'><Link to='/about' className='main_menu'>ABOUT</Link></li>
              <li className='shop'><Link to='/shop' className='main_menu'>SHOP</Link></li>
              <li className='cart'><Link to='/cart' className='main_menu'>CART</Link></li>
            </ul>
            <ul className='menu_right'>
              <li className='home'>
                <Link to='/shop' className='sub_menu'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
              </li>
              <li className='about'>
                <Link to='/shop' className='sub_menu'>
                  <FontAwesomeIcon icon={faHeadset} />
                </Link>
              </li>
              <li className='shop'><Link to='/cart' className='sub_menu'>SIGN IN</Link></li>
              <li className='cart'><Link to='/cart' className='sub_menu'>SIGN UP</Link></li>
            </ul>
          </div>
        </header>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='react_project' element={<Home/>} />
        <Route path='about' element={<About />} />
        <Route path='shop' element={<Shop />} />
        <Route path='cart' element={<Cart />} />
      </Routes>


      <div className='footer_box'>
        <footer className='footer'>
          <div className='footer_left_box'>
            <div className='footer_logo'>
              <div className='icon' onClick={()=>{navigate('/')}}>
                <FontAwesomeIcon icon={faSlack} size='xl' />
              </div>
              <div className='text' onClick={()=>{navigate('/')}}>
                ATLASIA
              </div>
            </div>

            <ul className='footer_menu_box'>
              <li><Link to='/shop' className='footer_menu'>About</Link></li>
              <li><Link to='/shop' className='footer_menu'>Terms of Use</Link></li>
              <li><Link to='/shop' className='footer_menu'>FAQ</Link></li>
              <li><Link to='/shop' className='footer_menu'>Contact Us</Link></li>
              <li><Link to='/shop' className='footer_menu'>License</Link></li>
              <li><Link to='/shop' className='footer_menu'>Privacy policy</Link></li>
            </ul>
          </div>

          <div className='footer_right_box'>
            <div className='icon_box'>
              <div className='facebook icon' onClick={()=>{navigate('/shop')}}>
                <FontAwesomeIcon icon={faFacebook} size='lg' />
              </div>
              <div className='twitter icon' onClick={()=>{navigate('/shop')}}>
                <FontAwesomeIcon icon={faTwitter} size='lg' />
              </div>
              <div className='insta icon' onClick={()=>{navigate('/shop')}}>
                <FontAwesomeIcon icon={faInstagram} size='lg' />
              </div>
              <div className='apple icon' onClick={()=>{navigate('/shop')}}>
                <FontAwesomeIcon icon={faApple} size='lg' />
              </div>
              <div className='google icon' onClick={()=>{navigate('/shop')}}>
                <FontAwesomeIcon icon={faGooglePlay} size='lg' />
              </div>
            </div>
            <div className='copyright'>
              © 2023 Atlasia. All rights reserved.
            </div>
          </div>


        </footer>
      </div>
    </div>
  );
}

export default App;
