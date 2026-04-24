import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

const branches = [
  {
    name: "AKARETLER",
    phone: "0 (212) 236 27 47",
    email: "info@houseofbturkey.com",
    address: "Sinanpaşa Mah. Şair Nedim Cd. No:14 Beşiktaş/Istanbul",
    hours: "Sunday / Thursday 11:30-22:30 Friday / Saturday 11:30-23:30"
  },
  {
    name: "SUADİYE",
    phone: "0 (216) 384 27 47",
    email: "info@houseofbturkey.com",
    address: "Suadiye Mah. Bağdat Cad. No:435/A Kadıköy/Istanbul",
    hours: "Monday / Thursday 11:30 - 22:30 / Friday 11:30 - 23:30 Saturday 09:30 - 23:30 / Sunday 09:30 - 22:30"
  },
  {
    name: "CADDEBOSTAN",
    phone: null,
    email: "info@houseofbturkey.com",
    address: "VERTICAL Caddebostan Mah, Bağdat Cad. 319-321 A, Kadıköy/İstanbul",
    hours: "Sunday/Thursday 12:00-23:00 Friday - Saturday 12:00 - 00:00"
  },
  {
    name: "KUŞADASI",
    phone: "(0256) 503 18 18",
    email: "info@houseofbturkey.com",
    address: "Türkmen Mah. Atatürk Bulvarı Setur Marina No: 29/3E-3F Kuşadası/AYDIN",
    hours: "Sunday/Thursday 11:30-22:30 Friday - Saturday 11:30 - 23:30"
  }
]

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#020205] border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
            Contact
          </h2>
          <h3 className="text-2xl font-bold text-gray-300 uppercase tracking-widest">
            Open Everyday!
          </h3>
          <div className="flex gap-6 mt-4">
            <Link href="https://facebook.com/unitedweeat" target="_blank" className="text-white hover:text-gray-400 transition-colors">
              <FaFacebookF className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com/houseofbturkey" target="_blank" className="text-white hover:text-gray-400 transition-colors">
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link href="https://www.youtube.com/channel/UC19IMQbx4nfjXxuOn_hfEkQ" target="_blank" className="text-white hover:text-gray-400 transition-colors">
              <FaYoutube className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com/houseofbturkey" target="_blank" className="text-white hover:text-gray-400 transition-colors">
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {branches.map((branch) => (
            <div key={branch.name} className="flex flex-col gap-6">
              <h4 className="text-xl font-bold text-white uppercase tracking-widest border-b border-white/20 pb-4">
                {branch.name}
              </h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                {branch.phone && (
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 shrink-0 text-white" />
                    <a href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                      {branch.phone}
                    </a>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 shrink-0 text-white" />
                  <a href={`mailto:${branch.email}`} className="hover:text-white transition-colors">
                    {branch.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 text-white" />
                  <span>{branch.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 shrink-0 text-white" />
                  <span>{branch.hours}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>

      </div>
    </footer>
  )
}