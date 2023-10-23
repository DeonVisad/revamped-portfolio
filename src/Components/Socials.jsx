import React from 'react'
import 'animate.css';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';

const Socials = () => {
  return (
    <div className='relative z-[9] md:flex font-open text-2xl uppercase hidden animate__animated animate__fadeInRight '>
        <div className='flex items-center h-[50svh] fixed top-48 -right-24 -rotate-90   '>
            <div className='px-2 flex items-center text-[#F15946]/25 hover:text-[#F15946]'>
                <a className='flex items-center' href='https://www.linkedin.com/in/deon-davis-/' rel='noreferrer' target='_blank'>
                <AiFillLinkedin />
                <p className=''>LinkedIn</p>
                </a>
            </div>
            <div className='px-2 flex items-center text-[#F15946]/25 hover:text-[#F15946]' >
                <a className='flex items-center' href='https://github.com/DeonVisad' target='_blank' rel='noreferrer'>
                <AiFillGithub />
                <p>Github</p>
                </a>
            </div>
            <div className='px-2 flex items-center text-[#F15946]/25 hover:text-[#F15946]'>
                <a className='flex items-center' href='mailto:deondavisdev@gmail.com'>
                <AiFillMail />
                <p>Email</p>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Socials