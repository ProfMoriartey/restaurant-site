import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md text-white">
      <Link href="/">
        <img 
          src="/fluburger.png" 
          alt="Flu Burger" 
          className="h-12 w-12 object-contain" 
        />
      </Link>

      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide">
        <Link href="/#menu" className="hover:text-gray-300 transition-colors">MENU</Link>
        <Link href="/#best" className="hover:text-gray-300 transition-colors">B FOR THE BEST</Link>
        <Link href="/#order" className="hover:text-gray-300 transition-colors">ORDER ONLINE</Link>
        <Link href="/#fra" className="hover:text-gray-300 transition-colors">FRANCHISING</Link>
        <Link href="/#contact" className="hover:text-gray-300 transition-colors">CONTACT</Link>
        <div className="flex gap-2 ml-4 border-l border-white/30 pl-4">
          <Link href="/tr" className="hover:text-gray-300">TR</Link>
          <Link href="/" className="text-gray-400">ENG</Link>
        </div>
      </nav>

      <button className="group relative flex items-center justify-center w-10 h-10 lg:hidden">
        <span className="block w-2 h-2 bg-white rounded-full transition-all duration-300 group-hover:opacity-0 group-hover:scale-50"></span>
        <span className="absolute opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <ArrowRight className="w-5 h-5 text-white" />
        </span>
      </button>
    </header>
  )
}