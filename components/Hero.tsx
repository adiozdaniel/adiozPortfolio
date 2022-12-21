import React from 'react';
import Link from 'next/link';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import BackgroundCircles from './BackgroundCircles';
import {BsStack} from 'react-icons/bs';


type Props = {}

export default function Hero({}: Props) {
    const [text, count ] = useTypewriter({
        words: [
        "Hola, Adioz Daniel ",
        "Frontend Developer ",       
        "Full Stack Developer"
        
    ],
    loop: true,
    delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 
        items-center justify-center
        text-center overflow-hidden
        '>
            <BackgroundCircles/>
            <img 
                src="https://res.cloudinary.com/dashoh/image/upload/v1671556028/avatars/dashoInc/idjkkfhv17am7gbulysp.png"
                alt='portfolio picture'                 
                className='relative rounded-full h-32 w-32 mx-auto'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Frontend Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#0a45f7' />
                </h1>
                <div className='pt-8'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                   
                    
                </div>
            </div>
        </div>
    )
}