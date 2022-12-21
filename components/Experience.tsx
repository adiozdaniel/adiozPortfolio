import React from 'react'
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactCard from './ReactCard';
import ReduxCard from './ReduxCard';
import ZustandCard from './ZustandCard';
import FramerCard from './FramerCard';
import NodeCard from './NodeCard';
import TailwindCard from './TailwindCard';
import TrpcCard from './TrpcCard';
import NextJs from './Nextjs';
import Prisma from './Prisma';

type Props = {}

export default function Experience({}: Props) {
    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col w-screen'>
            <p className=' uppercase tracking-[20px] mt-10 text-center
            text-gray-500 text-2xl'>Skills</p>
            
            <Carousel 
                    autoPlay={true} 
                    infiniteLoop={true} 
                    centerMode={false}
                    className=''
            >
                <ReactCard/>
                <ReduxCard/>
                <ZustandCard/>
                <FramerCard/>
                <NodeCard/>
                <TailwindCard/>
                <TrpcCard/>
                <NextJs/>
                <Prisma/>
            </Carousel>
          
        </motion.div>
    )
}