"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const orderAkaretler = [
  { name: "YEMEKSEPETI", url: "https://www.yemeksepeti.com/house-of-b-burgers-fries-besiktas-sinanpasa-mah-istanbul" },
  { name: "GETIRYEMEK", url: "https://getir.com/yemek/restoran/house-of-b-sinanpasa-mah-besiktas-istanbul/" },
  { name: "TRENDYOL", url: "https://www.trendyol.com/" },
  { name: "FUUDY", url: "https://fuudy.co/m/restaurant/544" }
]

const orderSuadiye = [
  { name: "YEMEKSEPETI", url: "https://www.yemeksepeti.com/restaurant/m00p/house-of-b" },
  { name: "GETIRYEMEK", url: "https://getir.com/yemek/restoran/house-of-b-suadiye-mah-kadikoy-istanbul/" },
  { name: "TRENDYOL", url: "https://www.trendyol.com/" },
  { name: "FUUDY", url: "https://fuudy.co/" }
]

export default function OrderSection() {
  return (
    <section id="order" className="w-full bg-blue-600">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-16 text-white">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-center md:text-left">
            Order Online
          </h2>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-center md:text-left">
              Akaretler
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              {orderAkaretler.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.url} 
                  target="_blank"
                  className="px-6 py-3 border border-white hover:bg-white hover:text-blue-600 transition-colors duration-300 text-sm font-bold tracking-widest text-center w-full sm:w-auto"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-center md:text-left">
              Suadiye
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              {orderSuadiye.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.url} 
                  target="_blank"
                  className="px-6 py-3 border border-white hover:bg-white hover:text-blue-600 transition-colors duration-300 text-sm font-bold tracking-widest text-center w-full sm:w-auto"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
          <motion.img 
            src="/top.png" 
            alt="House of B Onion Rings" 
            className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  )
}