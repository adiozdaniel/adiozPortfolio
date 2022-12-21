import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import {BsFacebook, BsGithub, BsTwitter, BsFillEnvelopeFill} from 'react-icons/bs';

type Props = {}

export default function Header({}: Props) {
    return (
        <header className=' -mb-32 p-5 flex items-start justify-between max-w-7xl mx-auto
        xl:items-center'>
            <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className='z-40 flex flex-row items-center gap-6 text-3xl'>
                {/* SOCIAL ICONS */}
                <a href="https://web.facebook.com/adiozdaniel" target="_blank" rel="noreferrer" > 
                    <BsFacebook/>
                </a>
                 <a href="https://twitter.com/adiozdaniel" target="_blank" rel="noreferrer" > 
                    <BsTwitter/>
                </a>
                 <a href="https://github.com/adiozdaniel" target="_blank" rel="noreferrer" > 
                    <BsGithub/>
                </a>
                         
            </motion.div>

            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className='z-40 flex items-center text-gray-300 cursor-pointer'>
            <a href="mailto:adiozdaniel@gmail.com" target="_blank" rel="noreferrer" > 
                    <BsFillEnvelopeFill/>
                     <span className='uppercase -mt-5  hidden md:flex text-sm ml-10 text-gray-400'>Contact me</span>
                </a>
               
            </motion.div>
        </header>
    )
}