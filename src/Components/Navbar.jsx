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
            <Nav to='/'><p className='font-semibold italic font-roboto text-sm text-white hover:bg-[#F15946] '>Deon Davis &#169;</p></Nav>
        </div>
    
        {/* menu */}
            <ul className='hidden md:flex justify-center items-center animate__animated animate__fadeIn font-darker text-white'>
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
            {!nav ? <svg className={navbar ? 'h-8 w-8 hover:animate-spin border-[1px] fill-white rounded-full bg-[#F15946]' : 'h-8 w-8 fill-white hover:animate-spin'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.14 48.14"><defs><style>.cls-1</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M11.83,9.51l.2.24,1-.07s0-.45,0-.45l-.49.08ZM13.92,35.1H6.44a20.84,20.84,0,0,0,13.38,9.35C17.33,42.65,15.25,39.33,13.92,35.1ZM6.48,12.94l-.15.27h.18Zm6.59-4.52V8.1h-.74l0,.16h-.46v0h0v.42h1ZM11.59,21.9l.82-.55c.06-1,.16-1.91.29-2.83h-.43L11,19.17l-.55,1-.22.81.36.79ZM5.65,14.37l.15-.18h0a1.74,1.74,0,0,1-.11.18Zm6.66,10.19h-9a20.75,20.75,0,0,0,2.57,9.56h7.79A37.1,37.1,0,0,1,12.31,24.56Zm3.59,0h-.57l.5.08ZM12.32,23.4l-.61-.17-.57-.1.06-.52-.72-.11v.3l-1.82-.45-.73-1.12.3-.54L7.08,19l-.2-1.23H6.41L6.57,19l.79,1.22-.08.49-.68-.1-.83-1.42V17.52l-.86-.41V15.92h0v-.14h0v.14a20.59,20.59,0,0,0-1.64,7.66h9C12.31,23.52,12.32,23.46,12.32,23.4Zm1.22,1.16H13.3a36.79,36.79,0,0,0,1.32,9.56H17.9V32.66s-1.21-.92-1.28-.92-.64-.16-.64-.16l-.12-.67-1.58-2,.16-.71.05-1.16,1.09-.76L15.42,25l-1.59-.12Zm3.33-11.35h0l0,0Zm-.35,1.33.39-.08.31-.2v-.07h-.7Zm6.17,23.84-1.24.6-.81.12,0,.35.58.16-.07.37-.52.49.31.39.62,0,0,.48-.17.46-.05.38.91.77-.12.4-1.24,0-1.23-1.08-1-1.69L18.76,39,18,38l.29-1.64-.43-.12V35.1h-3c1.74,5.4,4.72,9.14,8.17,9.74l.48,0V37l-.48.61ZM16.21,14.92l-.11.46h.67l.29-.3v-.4l-.48.06-.06.16Zm-1.06-1.71h1.32V13h-.82Zm-1.8-5.72.88.19L14.3,8l1.4.06-.18-.45-1.25,0,.29-.27L14.46,7H13.34l1.22-.92h1.18l.56.76.53,0a13,13,0,0,1,3-3.15,20.75,20.75,0,0,0-8,3.53h1.05Zm3.17-.17h-.1s0,0,0,.1Zm-2.77,4.37.34.69.06,0c.1-.3.2-.6.31-.89l-.16,0Zm1.19,2.68-.08.51.36.2.64-.89H15.1Zm2.45-.07v.38l.18.26h.66v-.4l-.79-.24ZM36.24,25.85l-.45-.45a36.93,36.93,0,0,1-1.28,8.72h4.22v-1l-.61-.6,0-.69.77-1.47-1.46-2.58L37.55,26Zm-1.44-.42-.38.35H32.87l-.06.13H32l-1.19-1.35h-6.2v3.26l.07,0,1.83,0,.54.88.81.26-.15.69-.81,1.05-.09.11-.07.69h.06V32h-.1l-.15,1.41-.8.64-1.14,0v.15h9A36.36,36.36,0,0,0,34.8,25.43ZM30,21.88l.33-.12.12-.67H30l-.19-.71,2.3-1.66V17.54l1.13-.63.45.05h.54c0-.14,0-.29-.07-.43h-.95l-.58-.27-.17-1.14.21-.55,1-.21a1.36,1.36,0,0,1,0-.17h-9v9.39H30ZM33.21,35.1H24.56v9.77h.3C28.38,44.36,31.43,40.59,33.21,35.1ZM33,12.36h-.46v-.43l.19-.3C30.92,7,28.17,3.84,25,3.3l-.47,0V7.93l.58.15-.31.58h-.27v4.55h8.7C33.17,12.92,33.07,12.64,33,12.36Zm-11.67,13,1.32,0,.48.85.07,1,.4.15V24.56h-2.8Zm23-6,.14.28c0-.12,0-.24-.08-.36ZM24.07,0A24.07,24.07,0,1,0,48.14,24.07,24.1,24.1,0,0,0,24.07,0Zm22,29.38A22.71,22.71,0,1,1,39.33,7.3c.35.32.7.66,1,1l.35.37A22.62,22.62,0,0,1,45,15.26c.06.14.11.29.17.43a22.3,22.3,0,0,1,1.5,6.17c.06.65.1,1.31.1,2,0,.07,0,.15,0,.23a22.52,22.52,0,0,1-.35,4C46.32,28.49,46.22,28.93,46.12,29.38ZM42.39,16.57l-.55-.6-.1-1-.56.31-.29,1.17-.81-.85,0-.81-.75-.64H38.2l.17.49,1.08.6.19.2-.23.12v.63l-.53.22-.45-.1-.29-.4.74,0,.19-.26-1.62-1.1-.12-.44h0l-.63.57L36,14.62,35,16v0l.15.7.17-.1,2.34-.18v1.19l1.84.47.37.26h.33v-.65l1.07-.1,1,.75h1.66L44,18.2c-.17-.56-.35-1.11-.57-1.65ZM39.52,35.81,39,35.1H34.22c-1.33,4.22-3.41,7.54-5.89,9.34a20.86,20.86,0,0,0,11.88-7.25h-.69ZM17.87,14.19Zm16.81.38.09-.38h-.21l.09.37Zm-12.31-.3-.22.14-.37,0c0-.09,0-.15,0-.15h-.14v-.1h-.37l0,.3-.43,0,0-.3,0,0h-.71l.06.05L18.82,15l-1.28,1.34-.09.59-1.28.84-.64.64.07,1.28-.88-.41v-.75H13.68a36.52,36.52,0,0,0-.33,3.85l.7.12.07,1.09h2.63l.13-.16.77.16h5.93V14.19H22.39ZM23.25,8l-.6-.51-1.37.17-.12.12h0l0,0-.4.41-.65,0,.05.33.23.09v.11l-.53.07,0,.31-.5,0-.09-.61-.91.27L16.43,10l.21.76.52.34,1,.15v1.18l.47-.08.45-.92,1.1-.35V9.64l.61-.46,1.49.35-.11.93h.4l1-.47V9.31l-1.91-.45Zm.31,4.48-.36-.1-.09.32-.64.1-.06,0v0l-.22,0L22,12.5l-.21-.1h-.46l-.2.17V13l.39.13.38.05-.08,0,0,0h1.46l0-.14h0l.33-.23ZM17.19,8l.6,0,.14-.35.88,0,.1-.52L18.39,7l.18-.47L19,6.42l1.39.06-.76.7.12.53.79.12-.05-1,.76-.39,1.35-.16,1,.45V3.27l-.42,0C20.9,3.66,18.84,5.37,17.19,8Zm16.35,3.12.35.15,0,.45-.07.05c.06.15.11.31.16.46l0-.34.5-.11,0-.33-.47-.3L33.64,11v-.33l.19-.3.69-.13.17.83.36.58.24.28.44.17-.41.5-.8.08h-.44c.06.19.13.37.19.57h.2l0-.26,1.08-.17.75-1.06.78-.13.7.1h.26l-.14-1-.86.35-.3-.75-.49-.07-.09-.51.4-.44,1-.38.25-.44a20.79,20.79,0,0,0-9.46-4.74A16.68,16.68,0,0,1,33.54,11.15Zm6.28.43.41-.61c-.33-.41-.67-.79-1-1.17v1l-.9.45.09.3Zm3.27,4.06c-.15-.34-.31-.68-.49-1l-.13.15h0v.92l.41-.06Z"/></g></g></svg> : <FaTimes className='text-[#F15946] h-8 w-8' />}
        </div>


        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 right-0 w-1/3 h-screen bg-black/95 flex flex-col justify-center items-center animate__animated animate__slideInRight text-white/75 font-darker '}>
            <li className='py-6 md:text-4xl  text-2xl  hover:text-white'><Link onClick={handleClick} to='/' smooth={true} duration={500}>Home</Link> </li>
            <li className='py-6 md:text-4xl  text-2xl  hover:text-white'><Nav onClick={handleClick} to='/about'>About</Nav> </li>
            <li className='py-6 md:text-4xl  text-2xl  hover:text-white'><a onClick={handleClick} href='mailto:deondavisdev@gmail.com' target='_blank' rel='noreferrer'>Contact</a></li>
        </ul>
        

        {/* Social icons */}

    
    </div>

  
  
  
  
  )
}

export default Navbar;