import { motion } from "framer-motion"

export default function ReactCard() {
    return (
        <div className=" mt-16 rounded-lg items-center
         md:w-[600px] xl:w-[900px] mx-10 min-w-full
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
                className="w-[220px] h-[220px] px-6 mx-6"
                src="https://res.cloudinary.com/dashoh/image/upload/v1671557864/avatars/dashoInc/r2ndvybqjnaycglzeqnf.svg"
                alt='portfolio picture'
                width={300} height={300}            
            />        

            <div className="px-0 md:px-10">               
                <p className="font-bold text-4xl mt-1">React.js</p>
                {/* <div className="flex space-x-2 my-2">
                    <TbBrandJavascript className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandHtml5 className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandCss3 className="h-10 w-10 rounded-full text-2xl"/>
                </div> */}
                   
            </div>
        </div>
    )
}