"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Cpu } from "lucide-react";

const securityServices = [
  { name: "שירותי מוקד, סיור ובקרה", href: "/services/patrol", highlight: true },
  { name: "מוקד וידאו אנליטיקה", href: "/services/video-analytics" },
  { name: "מערכות אזעקה", href: "/services/alarms" },
  { name: "מצלמות אבטחה ושליטה", href: "/services/cctv" },
  { name: "מכתבי המלצה", href: "/recommendations" },
  { name: "מוצרים", href: "/products" },
  { name: "שירות אנליטיקה בענן", href: "/services/cloud-analytics" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] overflow-hidden transition-transform group-hover:scale-110">
            <Cpu size={20} className="text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-[1000] tracking-tighter uppercase text-white">באסל</span>
            <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest">מערכות תקשורת</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-bold text-white hover:text-blue-500 transition-colors">ראשי</Link>
          
          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 font-black text-white h-full border-b-2 transition-all ${isDropdownOpen ? 'border-blue-600' : 'border-transparent'}`}>
              שירותי אבטחה
              <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full w-64 bg-[#0a0c12] border border-white/10 py-2 rounded-b-xl shadow-2xl"
                >
                  {securityServices.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href}
                      className={`block px-6 py-3 text-right text-[14px] font-bold hover:bg-white/5 transition-colors ${item.highlight ? "text-blue-500" : "text-white"}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/tech" className="font-bold text-white hover:text-blue-500 transition-colors">אגף טכני</Link>
          <Link href="/contact" className="font-bold text-white hover:text-blue-500 transition-colors">צור קשר</Link>
          
          <a href="tel:0522389607" className="bg-blue-600 text-white p-2 rounded-full hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <Phone size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#05070a] border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="font-bold text-white text-lg py-3">ראשי</Link>
              
              <div className="border-b border-white/5 pb-2">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between font-bold text-white text-lg py-3"
                >
                  שירותי אבטחה
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-blue-500' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white/5 rounded-xl mt-2"
                    >
                      <div className="flex flex-col py-3 pr-4 space-y-4">
                        {securityServices.map((item, idx) => (
                          <Link 
                            key={idx} 
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block font-bold text-sm ${item.highlight ? "text-blue-500" : "text-white/70"}`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" onClick={() => setIsOpen(false)} className="font-bold text-white text-lg py-3">צור קשר</Link>
              <a href="tel:0522389607" className="flex items-center gap-3 text-blue-500 font-black py-5 text-xl tracking-tighter">
                <Phone size={22} /> 052-2389607
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}