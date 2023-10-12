import React, {useState} from 'react';
import './Work.css';
import 'animate.css';
import jhrealty from '../../Assets/jhmockup.jpg';

const Work = () => {
  const [appear, setAppear] = useState(false);

  const changeBackground = () => {
      if(window.scrollY >= 75) {
      setAppear(true)
      } else {
      setAppear(false)
      }
  }

window.addEventListener('scroll', changeBackground);

  return (
    <div className='w-full bg-[#adb5bd] flex flex-col items-center pt-36'>
      <div className={appear ? 'm-10 w-3/4 ' : 'hidden'} >


        <div className={appear ? 'flex w-full justify-between items-center border-b-[1px] border-zinc-500 my-4 animate__animated animate__slideInUp' : null}>
          
          <div className='flex-col justify-center'>
            <div className='flex flex-col'>
              <h2 className='font-darker font-bold text-3xl text-start uppercase bg-[#F15946]'>Jennifer Henderson Realty</h2>
              <h3 className='font-roboto text-md text-start py-4'>Freelance, Frontend Development</h3>
              <p className='font-roboto text-sm text-start py-6 w-1/2'> A realtor's personal website. | Designed with ReactJS, TailwindCSS, & React Transition Group.</p>
              <div className='flex w-1/2 justify-start'>
                <a><button className='bg-black text-white hover:text-black hover:bg-[#F15946] rounded-full text-sm font-roboto py-2 px-5 mr-4'>Live Site</button></a>
                <a><button className='rounded-full border-black border-[1px] hvr-shutter-out-horizontal text-sm font-roboto py-2 px-5'>Code</button></a>
              </div>
            </div>
          </div>
          <a href="javascript:void(0)"><img src={jhrealty} className='h-96 rounded-xl drop-shadow-sm mb-12 hvr-grow' /></a>

          
        </div>


        <div className={appear ? 'flex w-full justify-between items-center border-b-[1px] border-zinc-500 my-4 animate__animated animate__slideInUp' : null}>
          
          <div className='flex-col justify-center'>
            <div className='flex flex-col'>
              <h2 className='font-darker font-bold text-3xl text-start uppercase bg-[#F15946]'>Jennifer Henderson Realty</h2>
              <h3 className='font-roboto text-md text-start py-4'>Freelance, Frontend Development</h3>
              <p className='font-roboto text-sm text-start py-6 w-1/2'> A realtor's personal website. | Designed with ReactJS, TailwindCSS, & React Transition Group.</p>
              <div className='flex w-1/2 justify-start'>
                <a><button className='bg-black text-white hover:text-black hover:bg-[#F15946] rounded-full text-sm font-roboto py-2 px-5 mr-4'>Live Site</button></a>
                <a><button className='rounded-full border-black border-[1px] hvr-shutter-out-horizontal text-sm font-roboto py-2 px-5'>Code</button></a>
              </div>
            </div>
          </div>
          <a href="javascript:void(0)"><img src={jhrealty} className='h-96 rounded-xl drop-shadow-sm mb-12 hvr-grow' /></a>

          
        </div>
      </div>
    </div>
  )
}

export default Work