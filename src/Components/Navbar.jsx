import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../Assets/logo.png';
import {Link} from 'react-scroll';
import 'animate.css';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center px-4  text-black z-10'>
        <div className='animate__animated animate__fadeIn flex justify-start pr-32'>
            <p className='font-semibold italic font-roboto text-sm'>Deon Davis &#169;</p>
        </div>
    
        {/* menu */}
            <ul className='hidden md:flex justify-center items-center animate__animated animate__fadeIn font-darker'>
                <li className='hover:text-[#F15946] cursor-pointer px-2'>
                <Link to='home' smooth={true} duration={500}>Home</Link> 
                </li>
                <li className='hover:text-[#F15946] cursor-pointer px-2'>
                <Link to='about' smooth={true} duration={500}>About</Link> 
                </li>
                <li className='hover:text-[#F15946] cursor-pointer px-2'>
                <Link to='skills' smooth={true} duration={500}>Skills</Link> 
                </li>
                <li className='hover:text-[#F15946] cursor-pointer px-2'>
                <Link to='work' smooth={true} duration={500} offset={-50} >Work</Link> 
                </li>
                <li className='hover:text-[#F15946] hover:underline font- cursor-pointer px-2'>
                <Link to='contact' smooth={true} duration={500}>Contact</Link> 
                </li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
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