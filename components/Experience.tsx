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

type Props = {}

export default function Experience({}: Props) {
    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=' flex py-6 justify-center relative overflow-hidden flex-col
        md:flex-row max-w-full px-10 mx-auto items-center min-h-[280px]'>
            <p className='absolute top-32 uppercase tracking-[20px]
            text-gray-500 text-2xl'>Skills</p>
            
            <Carousel 
                    autoPlay={true} 
                    infiniteLoop={true} 
                    centerMode={true}
                    className='w-full gap-10 space-x-6 p-10 mx-20 left-0'
            >
                <ReactCard/>
                <ReduxCard/>
                <ZustandCard/>
                <FramerCard/>
                <NodeCard/>
                <TailwindCard/>
                <TrpcCard/>
            </Carousel>
          
        </motion.div>
    )
}