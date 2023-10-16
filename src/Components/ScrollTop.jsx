import React, {useState} from 'react';
import {Link} from 'react-scroll';
import 'animate.css';
import up from '../Assets/Vector_23.png';

const ScrollTop = () => {
  const [scroll, setScroll] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 825) {
        setScroll(true)
        } else {
        setScroll(false)
        }
    }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={scroll ? 'relative z-[999]' : 'hidden'}>
      <div className='flex flex-col justify-center items-center font-roboto uppercase fixed bottom-8 right-12 pt-12 animate__animated animate__slideInUp'>
        <Link to='home'><img src={up} className=' h-16 w-16 hover:animate-pulse bg-[#F15946] rounded-full'/></Link>
        <p className='text-xs'>Scroll to top</p>
      </div>
    </div>
  )
}

export default ScrollTop