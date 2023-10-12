import React, { useState, useRef } from 'react';
import 'animate.css';
import playbutton from '../Assets/Vector_02.png';
import pausebutton from '../Assets/Vector_03.png';
import song from '../Assets/Mood Ring.mp3';



const PlayMusic = () => {
const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();

    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    console.log("here");
    myRef.current.pause();
    changeAudioStatus(false);
  };
  return (
    <>
        <audio ref={myRef} src={song} />
        <div className='relative z-[999]'>
            <a href='javascript:void(0)'>{audioStatus ? <img src={playbutton} onClick={pauseAudio} className='fixed bottom-12 left-12 h-16 w-16 animate-spin bg-[#F15946] rounded-full'/> : <img src={pausebutton} onClick={startAudio} className='fixed bottom-12 left-12 h-16 w-16 hover:animate-pulse bg-[#F15946] rounded-full'/>}</a>
        </div>
    </>
  )
}

export default PlayMusic