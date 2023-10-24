import React, {useState} from 'react';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';
import {Link as Nav} from 'react-router-dom'
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
    <div className={navbar ? 'fixed w-full h-[80px] flex justify-center items-center px-4 z-10 bg-black text-white animate__animated animate__fadeIn' : 'fixed w-full h-[80px] flex justify-center items-center px-4 text-black z-10 animate__animated animate__fadeIn'}>
        <div className='animate__animated animate__fadeIn flex justify-start pr-32'>
            <Nav to='/'><p className='font-semibold italic font-roboto text-sm hover:bg-[#F15946] '>Deon Davis &#169;</p></Nav>
        </div>
    
        {/* menu */}
            <ul className='hidden md:flex justify-center items-center animate__animated animate__fadeIn font-darker'>
                <li className=' hover:bg-[#F15946] cursor-pointer px-2 '>
                <Nav to='/' >Index</Nav>
                </li>
                <li className=' hover:bg-[#F15946] cursor-pointer px-2'>
                <Nav to='/about' smooth={true} duration={500}>About Me</Nav> 
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
            {!nav ? <a href='javascript:void(0)'><img src={Globe} className={navbar ? 'h-8 w-8 hover:animate-spin border-[1px] rounded-full bg-[#F15946]' : 'h-8 w-8 hover:animate-spin'} /></a> : <FaTimes className='text-[#F15946] h-8 w-8' />}
        </div>


        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 right-0 w-1/3 h-screen bg-black/95 flex flex-col justify-center items-center animate__animated animate__slideInRight text-white/75 font-darker '}>
            <li className='py-6 md:text-4xl  text-2xl  hover:text-white'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link> </li>
            <li className='py-6 md:text-4xl  text-2xl  hover:text-white'><Nav onClick={handleClick} to='/about'>About</Nav> </li>
            <li className='py-6 md:text-4xl  text-2xl  hover:text-white'><a onClick={handleClick} href='mailto:deondavisdev@gmail.com' target='_blank' rel='noreferrer'>Contact</a></li>
        </ul>
        

        {/* Social icons */}

    
    </div>

  
  
  
  
  )
}

export default Navbar;