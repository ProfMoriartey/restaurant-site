import Link from "next/link"

const digitalMenus = [
  { name: "AKARETLER", url: "https://qr.finedinemenu.com/house-of-b-akaretler/menu/689cbd7a15a5fb251093aa42" },
  { name: "SUADİYE", url: "https://qr.finedinemenu.com/house-of-b-suadiye/menu/689f534f232cfc45253c5e84" },
  { name: "CADDEBOSTAN POP-UP", url: "https://menu.chex.com.tr/6UKcVTO9RQCgpYR7WteXRA/menu?head_category_id=67f05025578001a582dcb159" },
  { name: "KUŞADASI MARİNA", url: "https://qr.finedinemenu.com/house-of-b-kusadasi-marina" }
]

export default function IntroSection() {
  return (
    <section id="menu" className="relative w-full py-32 bg-amber-100 overflow-hidden flex items-center justify-center">
      
      <div 
        className="absolute w-full h-[75%] bottom-6 bg-[url('https://houseofbturkey.com/wp-content/uploads/2024/06/bgline.jpg')] bg-repeat-x bg-center opacity-100 z-0"
        style={{ backgroundSize: "auto 100%" }}
      ></div>

      <div className="relative z-10 w-full md:h-[70vh] max-w-6xl mx-6 flex flex-col md:flex-row shadow-2xl">
        
        <div className="w-full md:w-1/2 bg-amber-400 flex justify-center items-center p-12">
          <img 
            src="/side.png" 
            alt="House of B Burgers" 
            className="w-full max-w-md h-auto object-contain drop-shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 bg-brand-red flex flex-col items-center md:items-start justify-center gap-8 p-12 text-white">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider">
            Menu
          </h2>
          <p className="text-xl font-bold uppercase italic">
            I was sad, then I saw food!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center md:justify-start">
            {digitalMenus.map((item) => (
              <Link 
                key={item.name} 
                href={item.url} 
                target="_blank"
                className="px-6 py-3 border border-white text-white hover:bg-white hover:text-brand-red transition-colors duration-300 text-sm font-bold tracking-widest text-center w-full sm:w-auto"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}   