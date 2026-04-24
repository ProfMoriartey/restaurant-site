"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const text = "best".split("")

export default function Hero() {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="object-cover w-full h-full"
          src="https://houseofbturkey.com/wp-content/uploads/2024/06/bg.mp4"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 gap-12">
        
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-5xl md:text-8xl font-black uppercase text-white leading-[1.1]">
            We are the <br />
            <span className="flex h-[1.2em]">
              {text.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            American Restaurant <br /> in town!
          </h1>
          <p className="max-w-lg mt-8 text-lg font-medium text-gray-300">
            At House of B you will find the best and freshest burgers in town
            We grind our meat every day and produce our own fresh patties
          </p>
        </div>

        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          style={{ x: imageX }}
        >
          <img 
            src="https://houseofbturkey.com/wp-content/uploads/2024/03/a70e8fa7-1ded-4466-bc64-0df9400dd936-819x1024.png"
            alt="Girl holding a burger"
            className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  )
}