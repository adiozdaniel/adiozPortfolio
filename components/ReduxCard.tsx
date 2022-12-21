import { motion } from "framer-motion"
import { TbBrandJavascript,
    TbBrandHtml5,
    TbBrandCss3 } from 'react-icons/tb';


type Props = {}

export default function ReduxCard({}: Props) {
    return (
        <article className="flex flex-col md:flex-row mt-16 rounded-lg items-center
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
                className="w-[220px] h-[280px]"
                src=" https://res.cloudinary.com/dashoh/image/upload/v1671561978/avatars/dashoInc/hfmgpwrjsqga68dcysg0.png"
                alt='redux'
                 
            />
             
                <p className="font-bold text-6xl mr-10">Redux</p>
             
        </article>
    )
}