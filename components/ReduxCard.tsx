import { motion } from "framer-motion"
import { TbBrandJavascript,
    TbBrandHtml5,
    TbBrandCss3 } from 'react-icons/tb';


type Props = {}

export default function ReduxCard({}: Props) {
    return (
        <article className="flex flex-col mt-16 rounded-lg items-center
        space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center 
        bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
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
        

            <div className="px-0 md:px-10">               
                <p className="font-bold hidden md:flex text-6xl mr-10">Redux</p>
                {/* <div className="flex space-x-2 my-2">
                    <TbBrandJavascript className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandHtml5 className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandCss3 className="h-10 w-10 rounded-full text-2xl"/>
                </div> */}
                   
            </div>

            

           
            {/* <h3 className='absolute top-24 uppercase tracking-[20px]
            text-gray-500 text-2xl'>Experience</h3> */}
        </article>
    )
}