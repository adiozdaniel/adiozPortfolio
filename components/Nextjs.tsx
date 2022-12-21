import { motion } from "framer-motion"
import { TbBrandJavascript,
    TbBrandHtml5,
    TbBrandCss3 } from 'react-icons/tb';


type Props = {}

export default function NextJs({}: Props) {
    return (
        <div className="flex flex-col justify-center md:flex-row mt-16 rounded-xl items-center
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
                className="max-w-[280px] h-[280px] rounded-full"
                src="https://res.cloudinary.com/dashoh/image/upload/v1671603148/avatars/dashoInc/m1mlerduxkc8xyzub463.png"
                alt='redux'
                 
            />
             
        </div>
    )
}