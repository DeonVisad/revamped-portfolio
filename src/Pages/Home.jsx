import React from 'react';
import 'animate.css';
import {Link} from 'react-scroll';
import AnimatedCursor from "react-animated-cursor";

import globe from '../Assets/Vector_30.png';



const Home = () => {


  return (
    <div id='page' name='home' className='relative w-[100vw] h-[99svh] bg-[#F8F9FA] border-b-[1px] border-zinc-500'>
      
      
        <AnimatedCursor outerStyle={{mixBlendMode: 'difference'}} />
        
        {/* Container */}
        <div className='absolute z-[2] max-w-[1000px] m-auto left-0 right-0 top-0 bottom-0 text-center items-center px-8 flex flex-col justify-center h-full'>
            <div className='flex'>
              
              <div className='border-r-[1px] border-black pr-2'>
                <a href="javascript:void(0)"><h1 className='text-black font-playfair text-start italic text-4xl animate__animated animate__fadeInLeft '>A Frontend Specialist</h1></a>
                <h2 className= 'text-sm font-roboto text-start text-black animate__animated animate__fadeInLeft'>Life is good. <br />Help make it that way for others too. </h2>
              </div>
              <a href="javascript:void(0)"><img src={globe} className='w-24 h-24 hover:bg-[#F15946]' /></a>
            </div>
                  <Link to='work' smooth={true} duration={500} offset={-50}>
                    <div className='grid grid-cols-2 grid-div gap-4 animate__animated animate__fadeIn '>
                       
                          
                    </div>
                  </Link>
            
            
        </div>
    </div>
  )
}

export default Home