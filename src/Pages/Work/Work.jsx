import React, {useState} from 'react';
import './Work.css';
import 'animate.css';
import jhrealty from '../../Assets/jhmockup.jpg';
import portfolio from '../../Assets/portfolioMockup.jpg';
import happycow from '../../Assets/HappycowMockup.jpg';
import clueo from '../../Assets/clueoMockup.jpg';
import swift from '../../Assets/swiftvueMockup.jpg';
import HTML from '../../Assets/html.png'
import CSS from '../../Assets/css.png'
import JavaScript from '../../Assets/javascript.png'
import ReactImg from '../../Assets/react.png';
import Redux from '../../Assets/reduxlogo.png'

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
    <div name='work' className='w-full bg-[#adb5bd] flex flex-col items-center pt-36'>
      <div className={appear ? 'm-10 w-3/4 ' : 'hidden'} >


        <div className={appear ? 'flex flex-col md:flex-row w-full justify-between items-center border-b-[1px] border-zinc-500 my-4 animate__animated animate__slideInUp' : null}>
          
          <div className='flex-col justify-center md:w-1/2'>
            <div className='flex flex-col'>
              <h2 className='font-darker font-bold text-3xl text-start uppercase bg-[#F15946]'>Jennifer Henderson Realty</h2>
              <h3 className='font-roboto text-md text-start py-4'>Freelance, Frontend Development</h3>
              <p className='font-roboto text-sm text-start py-6 md:w-1/2'> A realtor's personal website. | Designed with ReactJS, TailwindCSS, & React Transition Group.</p>
              <div className='flex md:w-1/2 justify-start my-3 md:my-0'>
                <a href='https://jenniferhenderson.co' target='_blank' rel='noreferrer'><button className='bg-black text-white hover:text-black hover:bg-[#F15946] rounded-full text-sm font-roboto py-2 px-5 mr-4'>Live Site</button></a>
                <a href='https://github.com/DeonVisad/jh-realty' target='_blank' rel='noreferrer'><button className='rounded-full border-black border-[1px] hvr-shutter-out-horizontal text-sm font-roboto py-2 px-5'>Code</button></a>
              </div>
              <div className='flex justify-start my-4'>
                    <img className='w-8 mx-1' src={HTML} alt='HTML icon' />
                    <img className='w-8 mx-1' src={CSS} alt='CSS icon' />
                    <img className='w-8 mx-1' src={JavaScript} alt='JavaScript icon' />
                    <img className='w-8 mx-1' src={ReactImg} alt='React icon' />
              </div>
            </div>
          </div>
          <a href="javascript:void(0)"><img src={jhrealty} className='md:h-96 md:w-full h-64 w-96 rounded-xl drop-shadow-sm mb-12 hvr-grow' /></a>

          
        </div>


        <div className={appear ? 'flex flex-col md:flex-row w-full justify-between items-center border-b-[1px] border-zinc-500 my-4 animate__animated animate__slideInUp' : null}>
          
          <div className='flex-col justify-center md:w-1/2'>
            <div className='flex flex-col'>
              <h2 className='font-darker font-bold text-3xl text-start uppercase bg-[#F15946]'>Portfolio Template</h2>
              <h3 className='font-roboto text-md text-start py-4'>Project, Frontend Development</h3>
              <p className='font-roboto text-sm text-start py-6 md:w-1/2'> A fully responsive portfolio site built implementing Javascript, React, Tailwind, & React-Scroll. It includes project cards, animations, complete responsiveness, and contact form submission.</p>
              <div className='flex md:w-1/2 justify-start my-3 md:my-0'>
                <a target='_blank' rel='noreferrer'><button className='bg-black text-white hover:text-black hover:bg-[#F15946] rounded-full text-sm font-roboto py-2 px-5 mr-4'>Live Site</button></a>
                <a href='https://github.com/DeonVisad/Portfolio/tree/master' target='_blank' rel='noreferrer'><button className='rounded-full border-black border-[1px] hvr-shutter-out-horizontal text-sm font-roboto py-2 px-5'>Code</button></a>
              </div>
              <div className='flex justify-start my-4'>
                    <img className='w-8 mx-1' src={HTML} alt='HTML icon' />
                    <img className='w-8 mx-1' src={CSS} alt='CSS icon' />
                    <img className='w-8 mx-1' src={JavaScript} alt='JavaScript icon' />
                    <img className='w-8 mx-1' src={ReactImg} alt='React icon' />
              </div>
            </div>
          </div>
          <a href="javascript:void(0)"><img src={portfolio} className='md:h-96 md:w-full h-64 w-96 rounded-xl drop-shadow-sm mb-12 hvr-grow' /></a>

          
        </div>

        <div className={appear ? 'flex flex-col md:flex-row w-full justify-between items-center border-b-[1px] border-zinc-500 my-4 animate__animated animate__slideInUp' : null}>
          
          <div className='flex-col justify-center md:w-1/2'>
            <div className='flex flex-col'>
              <h2 className='font-darker font-bold text-3xl text-start uppercase bg-[#F15946]'>Happy Cow</h2>
              <h3 className='font-roboto text-md text-start py-4'>Project, Frontend Development</h3>
              <p className='font-roboto text-sm text-start py-6 md:w-1/2'> Happy Cow is a delightful Dairy-Free Recipe Application developed in React JS and styled using Tailwind CSS. This app is designed to help users discover and explore a wide range of dairy-free recipes that are not only delicious but also healthy.</p>
              <div className='flex md:w-1/2 justify-start my-3 md:my-0'>
                <a href='https://thehappycow.netlify.app/' target='_blank' rel='noreferrer'><button className='bg-black text-white hover:text-black hover:bg-[#F15946] rounded-full text-sm font-roboto py-2 px-5 mr-4'>Live Site</button></a>
                <a href='https://github.com/DeonVisad/HappyCow' target='_blank' rel='noreferrer'><button className='rounded-full border-black border-[1px] hvr-shutter-out-horizontal text-sm font-roboto py-2 px-5'>Code</button></a>
              </div>
            </div>
            <div className='flex justify-start my-4'>
                    <img className='w-8 mx-1' src={HTML} alt='HTML icon' />
                    <img className='w-8 mx-1' src={CSS} alt='CSS icon' />
                    <img className='w-8 mx-1' src={JavaScript} alt='JavaScript icon' />
                    <img className='w-8 mx-1' src={ReactImg} alt='React icon' />
              </div>
          </div>
          <a href="javascript:void(0)"><img src={happycow} className='md:h-96 md:w-full h-64 w-96 rounded-xl drop-shadow-sm mb-12 hvr-grow' /></a>

          
        </div>

        <div className={appear ? 'flex flex-col md:flex-row w-full justify-between items-center border-b-[1px] border-zinc-500 my-4 animate__animated animate__slideInUp' : null}>
          
          <div className='flex-col justify-center md:w-1/2'>
            <div className='flex flex-col'>
              <h2 className='font-darker font-bold text-3xl text-start uppercase bg-[#F15946]'>Clueo e-commerce</h2>
              <h3 className='font-roboto text-md text-start py-4'>Project, Frontend Development</h3>
              <p className='font-roboto text-sm text-start py-6 md:w-1/2'> A partial frontend e-commerce site built implementing Javascript, React & Redux. It includes a shopping cart with local storage & product listings.</p>
              <div className='flex md:w-1/2 justify-start my-3 md:my-0'>
                <a href='https://clueocandles.netlify.app/' target='_blank' rel='noreferrer'><button className='bg-black text-white hover:text-black hover:bg-[#F15946] rounded-full text-sm font-roboto py-2 px-5 mr-4'>Live Site</button></a>
                <a href='https://github.com/DeonVisad/clueo-revamp' target='_blank' rel='noreferrer'><button className='rounded-full border-black border-[1px] hvr-shutter-out-horizontal text-sm font-roboto py-2 px-5'>Code</button></a>
              </div>
              <div className='flex justify-start my-4'>
                    <img className='w-8 mx-1' src={HTML} alt='HTML icon' />
                    <img className='w-8 mx-1' src={CSS} alt='CSS icon' />
                    <img className='w-8 mx-1' src={JavaScript} alt='JavaScript icon' />
                    <img className='w-8 mx-1' src={ReactImg} alt='React icon' />
                    <img className='w-8 mx-1' src={Redux} alt='Redux icon' />
              </div>
            </div>
          </div>
          <a href="javascript:void(0)"><img src={clueo} className='md:h-96 md:w-full h-64 w-96 rounded-xl drop-shadow-sm mb-12 hvr-grow' /></a>

          
        </div>

        <div className={appear ? 'flex flex-col md:flex-row w-full justify-between items-center border-b-[1px] border-zinc-500 my-4 animate__animated animate__slideInUp' : null}>
          
          <div className='flex-col justify-center md:w-1/2'>
            <div className='flex flex-col'>
              <h2 className='font-darker font-bold text-3xl text-start uppercase bg-[#F15946]'>SwiftVue</h2>
              <h3 className='font-roboto text-md text-start py-4'>Project, Frontend Development</h3>
              <p className='font-roboto text-sm text-start py-6 md:w-1/2'> A landing page for a concept campaign management dashboard called SwiftVue</p>
              <div className='flex md:w-1/2 justify-start my-3 md:my-0'>
                <a href='https://swiftvue.netlify.app/' target='_blank' rel='noreferrer'><button className='bg-black text-white hover:text-black hover:bg-[#F15946] rounded-full text-sm font-roboto py-2 px-5 mr-4'>Live Site</button></a>
                <a href='https://github.com/DeonVisad/swiftvue' target='_blank' rel='noreferrer'><button className='rounded-full border-black border-[1px] hvr-shutter-out-horizontal text-sm font-roboto py-2 px-5'>Code</button></a>
              </div>
              <div className='flex justify-start my-4'>
                    <img className='w-8 mx-1' src={HTML} alt='HTML icon' />
                    <img className='w-8 mx-1' src={CSS} alt='CSS icon' />
                    <img className='w-8 mx-1' src={JavaScript} alt='JavaScript icon' />
                    <img className='w-8 mx-1' src={ReactImg} alt='React icon' />
              </div>
            </div>
          </div>
          <a href="javascript:void(0)"><img src={swift} className='md:h-96 md:w-full h-64 w-96 rounded-xl drop-shadow-sm mb-12 hvr-grow' /></a>

          
        </div>

      </div>
    </div>
  )
}

export default Work