import React from 'react';
import transition from '../../transition';
import AnimatedCursor from 'react-animated-cursor';
import HTML from '../../Assets/html.png';
import CSS from '../../Assets/css.png';
import JS from '../../Assets/javascript.png';
import react from '../../Assets/react.png';
import tailwind from '../../Assets/tailwind.png';
import redux from '../../Assets/reduxlogo.png';
import node from '../../Assets/node.png';


const About = () => {
  return (
    <div name='about' className='flex w-full text-black'>
        <AnimatedCursor outerStyle={{mixBlendMode: 'difference'}} />
        <div className='flex flex-col justify-center items-center w-full md:h-screen py-20 md:py-0 bg-[#adb5bd] p-3'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <h1 className='font-darker font-bold md:text-lg text-[#F15946]'>1. About Me</h1>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-8 border-b-[1px] border-zinc-500' >
                <div className='sm:text-right text-4xl font-bold font-darker animate__animated animate__fadeInLeft'>
                    <p>Hi, I'm Deon! It's a pleasure to meet you. I hope you enjoy your day!</p>
                </div>
                <div>
                    <p className='font-roboto animate__animated animate__fadeInRight'>
                        I enjoy all forms of creative media from videography to graphic design and music production. You can also find me playing videogames competitively or on a field kicking a ball! 
                        I strongly believe there is great value in creating lasting relationships and developing software that makes people's lives easier and fulfilling.
                    </p>
                </div>
            </div>

            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <h1 className='font-darker font-bold text-lg text-[#F15946]'>2. Skills</h1>
            </div>
            <div className='max-w-[1000px] w-full grid grid grid-cols-2 md:grid-cols-7 gap-4 text-center py-8 border-b-[1px] border-zinc-500 animate__animated animate__fadeInUp' >
                <div className='drop-shadow-xl hover:scale-110 duration-500'>
                    <img src={HTML} className='w-10 mx-auto' />
                </div>

                <div className='drop-shadow-xl hover:scale-110 duration-500'>
                    <img src={CSS} className='w-10 mx-auto' />
                </div>

                <div className='drop-shadow-xl hover:scale-110 duration-500'>
                    <img src={JS} className='w-10 mx-auto' />
                </div>

                <div className='drop-shadow-xl hover:scale-110 duration-500'>
                    <img src={react} className='w-10 mx-auto' />
                </div>

                <div className='drop-shadow-xl hover:scale-110 duration-500'>
                    <img src={tailwind} className='w-10 mx-auto' />
                </div>

                <div className='drop-shadow-xl hover:scale-110 duration-500'>
                    <img src={redux} className='w-10 mx-auto' />
                </div>

                <div className='drop-shadow-xl hover:scale-110 duration-500'>
                    <img src={node} className='w-10 mx-auto' />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default transition(About);