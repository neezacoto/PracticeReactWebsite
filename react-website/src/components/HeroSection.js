import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';
import { HiPlay } from 'react-icons/hi'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you wating for?</p>
        <div className='hero-btns'>
            <Button 
                className='btns'
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    GET STARTED
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                >
                    WATCH TRAILER <HiPlay />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection