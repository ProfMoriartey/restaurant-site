import Link from "next/link"

const digitalMenus = [
  { name: "AKARETLER", url: "https://qr.finedinemenu.com/house-of-b-akaretler/menu/689cbd7a15a5fb251093aa42" },
  { name: "SUADİYE", url: "https://qr.finedinemenu.com/house-of-b-suadiye/menu/689f534f232cfc45253c5e84" },
  { name: "CADDEBOSTAN POP-UP", url: "https://menu.chex.com.tr/6UKcVTO9RQCgpYR7WteXRA/menu?head_category_id=67f05025578001a582dcb159" },
  { name: "KUŞADASI MARİNA", url: "https://qr.finedinemenu.com/house-of-b-kusadasi-marina" },
]

const orderAkaretler = [
  { name: "YEMEKSEPETİ", url: "https://www.yemeksepeti.com/house-of-b-burgers-fries-besiktas-sinanpasa-mah-istanbul" },
  { name: "GETİRYEMEK", url: "https://getir.com/yemek/restoran/house-of-b-sinanpasa-mah-besiktas-istanbul/" },
  { name: "TRENDYOL", url: "https://www.trendyol.com/" },
  { name: "FUUDY", url: "https://fuudy.co/m/restaurant/544" },
]

const orderSuadiye = [
  { name: "YEMEKSEPETİ", url: "https://www.yemeksepeti.com/restaurant/m00p/house-of-b" },
  { name: "GETİRYEMEK", url: "https://getir.com/yemek/restoran/house-of-b-suadiye-mah-kadikoy-istanbul/" },
  { name: "TRENDYOL", url: "https://www.trendyol.com/" },
  { name: "FUUDY", url: "https://fuudy.co/" },
]

export default function StaticLinks() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 space-y-32">
      
      <div id="menu" className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider">
          Menu
        </h2>
        <p className="text-gray-400 font-medium">I was sad, then I saw food!</p>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {digitalMenus.map((item) => (
            <Link 
              key={item.name} 
              href={item.url} 
              target="_blank"
              className="px-8 py-4 border border-white/20 rounded-none bg-transparent hover:bg-white hover:text-black transition-colors duration-300 text-sm font-bold tracking-widest text-center w-full md:w-auto"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div id="order" className="flex flex-col items-center space-y-16">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider text-center">
          Order<br />Online
        </h2>
        
        <div className="w-full space-y-8">
          <h3 className="text-xl font-bold text-white uppercase text-center tracking-widest">
            Akaretler
          </h3>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {orderAkaretler.map((item) => (
              <Link 
                key={item.name} 
                href={item.url} 
                target="_blank"
                className="px-8 py-4 border border-white/20 rounded-none bg-transparent hover:bg-white hover:text-black transition-colors duration-300 text-sm font-bold tracking-widest text-center w-full md:w-auto"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full space-y-8">
          <h3 className="text-xl font-bold text-white uppercase text-center tracking-widest">
            Suadiye
          </h3>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {orderSuadiye.map((item) => (
              <Link 
                key={item.name} 
                href={item.url} 
                target="_blank"
                className="px-8 py-4 border border-white/20 rounded-none bg-transparent hover:bg-white hover:text-black transition-colors duration-300 text-sm font-bold tracking-widest text-center w-full md:w-auto"
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