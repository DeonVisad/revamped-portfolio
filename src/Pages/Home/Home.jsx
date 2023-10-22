import React from 'react';
import 'animate.css';
import {Link} from 'react-scroll';
import AnimatedCursor from "react-animated-cursor";
import transition from '../../transition';

import Work from '../Work/Work';
import globe from '../../Assets/Vector_30.png';



const Home = () => {


  return (
    <div id='page' name='home' className='flex flex-col'>
        <div className='relative w-[100vw] h-[100svh] bg-[#ced4da] border-b-[1px] border-zinc-500 overflow-x-hidden'>
      
      
        <AnimatedCursor outerStyle={{mixBlendMode: 'difference'}} />
        
        {/* Container */}
        <div className='absolute z-[2] max-w-[1000px] m-auto left-0 right-0 top-0 bottom-0 text-center items-center px-8 flex flex-col justify-center h-full'>
            <div className='flex'>
              
              <div className='border-r-[1px] border-[#F15946] pr-2'>
                <a href="javascript:void(0)"><h1 className='text-black font-darker font-bold text-start italic text-4xl animate__animated animate__fadeInLeft '>A Frontend Specialist</h1></a>
                <h2 className= 'text-sm font-roboto text-start text-black animate__animated animate__fadeInLeft'>If life is good. <br />Help make it that way for others too. </h2>
              </div>
              <a href="javascript:void(0)"><img src={globe} className='w-24 h-24 hover:bg-[#F15946] animate__animated animate__fadeInRight' /></a>
            </div>
                    
                  
            
            
        </div>
        <div className='flex w-full justify-start items-end h-full py-16 px-32 animate__animated animate__fadeIn '>
            <a href='mailto:deondavisdev@gmail.com'>
              <p className='uppercase font-roboto text-xs text-[#F15946] '>Contact me <br />deondavisdev@gmail.com</p>
            </a>                   
        </div>
        </div>
        <Work />
    </div>
  )
}

export default transition(Home);