import { motion } from "framer-motion"
import { TbBrandJavascript,
    TbBrandHtml5,
    TbBrandCss3 } from 'react-icons/tb';


type Props = {}

export default function ZustandCard({}: Props) {
    return (
        <article className="md:inline-flex flex-col md:flex-row mt-16 rounded-lg items-center
        space-y-7  snap-center
        p-10 hover:opacity-100 opacity-40 cursor-pointer
        transition-opacity duration-200 overflow-hidden">
            <motion.img 
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true}}
                className=" "
                src=" https://res.cloudinary.com/dashoh/image/upload/v1671559062/avatars/dashoInc/ygh08urzbdj0qpnzzh9n.png"
                alt='zustand'
                          
            />        

                      
                <p className="font-bold text-4xl mt-1">Zustand</p>
                {/* <div className="flex space-x-2 my-2">
                    <TbBrandJavascript className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandHtml5 className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandCss3 className="h-10 w-10 rounded-full text-2xl"/>
                </div> */}
                   
        
          
        </article>
    )
}