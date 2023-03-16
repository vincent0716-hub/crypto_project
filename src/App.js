import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon, FaTwitter, FaDiscord, FaBars } from 'react-icons/fa';

import React, { useState } from 'react'
import Home from './pages/home'
function App() {
  const [navbar, setNavbar] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 5) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  if (typeof window !== 'undefined') {

    window.addEventListener('scroll', changeBackground)
  } else {
    console.log('You are on the server,Cannot execute')
  }
  return (
    <div className="App">
      <nav className={navbar ? 'fixed bg-[black] text-[#f3f2f4] w-full' : 'fixed w-full bg-[transparent] text-[#f3f2f4]'}>
        <div className='flex text-[20px] items-center justify-between
        m-0 max-w-[100%] p-7
        font-Grotesk
        '>
          <a className='text-[2rem]'>
            COINDOM
          </a>
          <ul className='flex gap-[3rem]  max-[750px]:hidden font-extrabold  font-GroteskEB'>
            <li >
              <a className='hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all'>Home</a>
            </li>
            <li>
              <a className='hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all'>Market</a>
            </li>
            <li>
              <a className='hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all'>Choose Us</a>
            </li>
            <li>
              <a className='hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all'>Join</a>
            </li>
          </ul>
          {/* cursor-pointer:改變鼠標當鼠標指向特定物件時 */}
          <span className='flex gap-[1rem] text-[24px] '>
            <FaTwitter className='cursor-pointer max-[750px]:hidden'
             onMouseEnter={() => setIsHovered2(true)}
             onMouseLeave={() => setIsHovered2(false)}
             style={{ color: isHovered2 ? '#ff00ea' : '',transition:'color 0.5s ease'}}></FaTwitter>
            <FaDiscord 
            className='cursor-pointer max-[750px]:hidden'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ color: isHovered ? '#ff00ea' : '',transition:'color 0.5s ease'}}></FaDiscord>
            <FaBars className='min-[750px]:hidden'></FaBars>

          </span>

        </div>
      </nav>
      <Home></Home>
    </div>
  );
}

export default App;
