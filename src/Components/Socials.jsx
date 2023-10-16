import React from 'react'
import 'animate.css';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';

const Socials = () => {
  return (
    <div className='relative z-[999] md:flex font-open text-2xl uppercase hidden animate__animated animate__fadeInRight '>
        <div className='flex items-center h-[50svh] fixed top-48 -right-24 -rotate-90   '>
            <div className='px-2 flex items-center text-[#F15946]/25 hover:text-[#F15946]'>
                <a className='flex items-center'>
                <AiFillLinkedin />
                <p className=''>LinkedIn</p>
                </a>
            </div>
            <div className='px-2 flex items-center text-[#F15946]/25 hover:text-[#F15946]'>
                <a className='flex items-center'>
                <AiFillGithub />
                <p>Github</p>
                </a>
            </div>
            <div className='px-2 flex items-center text-[#F15946]/25 hover:text-[#F15946]'>
                <a className='flex items-center'>
                <AiFillMail />
                <p>Email</p>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Socials