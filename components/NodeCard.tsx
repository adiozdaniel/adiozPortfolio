import { motion } from "framer-motion"
import { TbBrandJavascript,
    TbBrandHtml5,
    TbBrandCss3 } from 'react-icons/tb';


type Props = {}

export default function NodeCard({}: Props) {
    return (
        <div className="md:inline-flex flex flex-col md:flex-row justify-center mt-16 rounded-lg items-center
        space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center 
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
                className="max-w-[480px]  pr-28"
                src="https://res.cloudinary.com/dashoh/image/upload/v1671560364/avatars/dashoInc/msvszz8f4magiuwwbotq.png"
                alt='Node'           
            />        

                         
                <p className="font-bold text-4xl mr-10">Node Js</p>
                {/* <div className="flex space-x-2 my-2">
                    <TbBrandJavascript className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandHtml5 className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandCss3 className="h-10 w-10 rounded-full text-2xl"/>
                </div> */}
                   
          
          
        </div>
    )
}