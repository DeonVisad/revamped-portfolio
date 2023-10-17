import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../Assets/logo.png';
import {Link} from 'react-scroll';
import 'animate.css';
import Globe from '../Assets/Vector_19.png';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 825) {
        setNavbar(true)
        } else {
        setNavbar(false)
        }
    }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'fixed w-full h-[80px] flex justify-center items-center px-4 text-black z-10 bg-black text-white animate__animated animate__fadeIn' : 'fixed w-full h-[80px] flex justify-center items-center px-4 text-black z-10 animate__animated animate__fadeIn'}>
        <div className='animate__animated animate__fadeIn flex justify-start pr-32'>
            <p className='font-semibold italic font-roboto text-sm hover:bg-[#F15946] '>Deon Davis&#169;</p>
        </div>
    
        {/* menu */}
            <ul className='hidden md:flex justify-center items-center animate__animated animate__fadeIn font-darker'>
                <li className=' hover:bg-[#F15946] cursor-pointer px-2 '>
                <Link to='home' smooth={true} duration={500}>Index</Link> 
                </li>
                <li className=' hover:bg-[#F15946] cursor-pointer px-2'>
                <Link to='work' smooth={true} duration={500}>Work</Link> 
                </li>
                <li className=' hover:bg-[#F15946] cursor-pointer px-2'>
                <a href="https://resume.io/r/XxFFYKyYO" target='_blank' rel='noreferrer' >Resume</a> 
                </li>
                <li className=' hover:bg-[#F15946] cursor-pointer px-2'>
                <a href='mailto:deondavisdev@gmail.com'>Contact</a> 
                </li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className=" ml-10 z-10">
            {!nav ? <a href='javascript:void(0)'><img src={Globe} className={navbar ? 'h-8 w-8 hover:animate-spin border-[1px] rounded-full bg-[#F15946]' : 'h-8 w-8 hover:animate-spin'} /></a> : <FaTimes className='text-white h-8 w-8' />}
        </div>


        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#002029] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link> </li>
            <li className='py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link> </li>
            <li className='py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
        

        {/* Social icons */}

    
    </div>

  
  
  
  
  )
}

export default Navbar;