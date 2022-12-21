import { motion } from "framer-motion"
import { TbBrandJavascript,
    TbBrandHtml5,
    TbBrandCss3 } from 'react-icons/tb';


type Props = {}

export default function FramerCard({}: Props) {
    return (
        <div className=" mt-16 md:inline-flex flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 snap-center 
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
                 className="w-[120px] h-[220px]"
                src="https://res.cloudinary.com/dashoh/image/upload/v1671559989/avatars/dashoInc/dmfw4uvvcx6mrdpy90ut.png"
                alt='tailwind'
                          
            />        

                       
                <p className="font-bold text-6xl ">Framer Motion</p>
                {/* <div className="flex space-x-2 my-2">
                    <TbBrandJavascript className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandHtml5 className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandCss3 className="h-10 w-10 rounded-full text-2xl"/>
                </div> */}
                   
           
          
        </div>
    )
}