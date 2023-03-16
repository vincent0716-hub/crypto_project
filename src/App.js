import logo from './logo.svg';
import './App.css';
import { FaTwitter,FaDiscord,FaBars} from 'react-icons/fa';

import React, { useState } from 'react'
function App() {
  const [navbar, setNavbar] = useState(false);
   
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
      <nav className={navbar?'bg-black text-[#f3f2f4] ':'bg-[#1a166e] text-[#f3f2f4]'}>
        <div className='flex text-[20px] items-center justify-between
        m-0 max-w-[120rem] p-12
        font-Grotesk 
        '>
        <a className='text-[2rem]'>
          COINDOM 
        </a>
        <ul className='flex gap-[4rem]  max-[750px]:hidden'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Market</a>
          </li>
          <li>
            <a>Choose Us</a>
          </li>
          <li>
            <a>Join</a>
          </li>
        </ul>
        <span className='flex gap-[2rem] text-[2rem]'>
          <FaTwitter className='max-[750px]:hidden'></FaTwitter>
          <FaDiscord className='max-[750px]:hidden'></FaDiscord>
          <FaBars className='min-[750px]:hidden'></FaBars>
          
        </span>
        </div>
      </nav>
    </div>
  );
}

export default App;
