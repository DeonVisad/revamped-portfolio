import React from 'react';
import transition from '../../transition';
import AnimatedCursor from 'react-animated-cursor';

const About = () => {
  return (
    <div name='about' className='flex w-full h-[100svh] bg-[#adb5bd] text-black'>
        <AnimatedCursor outerStyle={{mixBlendMode: 'difference'}} />
        <div className='flex flex-col justify-center items-center w-full p-3'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Deon! It's a pleasure to meet you. I hope you enjoy your day!</p>
                </div>
                <div>
                    <p>
                        I enjoy all forms of creative media from videography to graphic design and music production. You can also find me playing videogames competitively or on a field kicking a ball! 
                        I strongly believe there is great value in creating lasting relationships and developing software that makes people's lives easier and fulfilling.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default transition(About);