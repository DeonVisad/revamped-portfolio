import React from 'react';
import jhrealty from '../Assets/JHco.png';

const Work = () => {
  return (
    <div className='w-full bg-zinc-200 flex flex-col items-center'>
      <div className='m-10 w-3/4 border-b-[1px] border-zinc-500' >
        <div className='flex w-full justify-between items-center'>
          
          <div className='flex-col justify-center'>
            <div className='flex flex-col'>
              <h2 className='font-roboto font-bold text-3xl text-start uppercase bg-[#F15946]'>Jennifer Henderson Realty</h2>
              <h3 className='font-roboto text-md text-start py-4'>Freelance, Frontend Development</h3>
              <p className='font-roboto text-sm text-start py-8 w-1/2'> A realtor's personal website. | Designed with ReactJS, TailwindCSS, & React Transition Group.</p>
              <div className='flex w-1/2 justify-start'>
                <a><button className='bg-black text-white hover:text-black hover:bg-[#F15946] rounded-full text-sm font-roboto py-2 px-5 mr-4'>Live Site</button></a>
                <a><button className='bg-none border-black border-[1px] text-black hover:text-black hover:bg-[#F15946] rounded-full text-sm font-roboto py-2 px-5'>Code</button></a>
              </div>
            </div>
          </div>
          <img src={jhrealty} className='w-[770px] h-[500px] rounded-xl shadow-md mb-12' />

          
        </div>
      </div>
    </div>
  )
}

export default Work