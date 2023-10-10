import React from 'react';
import 'animate.css';
import {Link} from 'react-scroll';
import AnimatedCursor from "react-animated-cursor"



const Home = () => {


  return (
    <div name='home' className='relative w-[100vw] h-[99svh] bg-[#F8F9FA] border-b-[1px] border-black'>
        <AnimatedCursor />
        {/* Container */}
        <div className='absolute z-[2] max-w-[1000px] m-auto left-0 right-0 top-0 bottom-0 text-center items-center px-8 flex flex-col justify-center h-full'>
            <div className='border-r-[1px] border-black pr-2'>
              <h1 className='text-black font-playfair text-start italic text-4xl animate__animated animate__fadeInLeft '>A Frontend Specialist</h1>
              <h2 className= 'text-sm font-roboto text-start text-black animate__animated animate__fadeInLeft'>Life is good. <br />Help make it that way for others too. </h2>
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