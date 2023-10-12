import React from 'react';
import {Link} from 'react-scroll';
import up from '../Assets/Vector_23.png';

const ScrollTop = () => {
  return (
    <div className='relative z-[999]'>
      <div className='flex flex-col justify-center items-center font-roboto uppercase fixed bottom-8 right-12 pt-12'>
        <Link to='home'><img src={up} className=' h-16 w-16 hover:animate-pulse bg-[#F15946] rounded-full'/></Link>
        <p className='text-xs'>Scroll to top</p>
      </div>
    </div>
  )
}

export default ScrollTop