import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
    return (
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px]
            text-gray-500 text-2xl'>About</h3>
            <motion.img
            initial={{
                x: -200,
                opacity:0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x:0}}
            viewport={{ once:true }}
            src="https://res.cloudinary.com/dashoh/image/upload/v1671549545/avatars/dashoInc/ctm5dhgkq62uezjqozuq.png"
            className=' md:mb-0 flex-shrink-0 rounded-full object-cover
                        md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <p 
                className='text-2xl mt-5 tracking-wider'
                >🌱 Adioz is a polished developer with a solid understanding in several web development technologies that will make him deliver whatever that is thrown at him. I am passionate about web development; and love challenging jobs.</p>
            </div>
            {/* <Image 
            src='/images/rrm-2.jpg'
            alt='portfolio picture'
            width={300} height={300}
            /> */}
        </motion.div>
    )
}