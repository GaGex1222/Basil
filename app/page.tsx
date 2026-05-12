"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, ShieldCheck, Smartphone, 
  Settings, Zap, Layout, ChevronDown, 
  Phone, Network, Speaker, 
  Users, CheckCircle, ArrowLeft, Activity, Cpu
} from 'lucide-react';

export default function BaselSystemsCyber() {
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const services = [
    { title: "מצלמות אבטחה", desc: "מיגון בטכנולוגיית AI, זיהוי פנים וראיית לילה צבעונית ברזולוציית 4K.", icon: <Camera size={32} /> },
    { title: "תשתיות ותקשורת", desc: "תכנון הנדסי של רשתות סיבים אופטיים ופריסת נקודות קצה חכמות.", icon: <Network size={32} /> },
    { title: "מערכות אזעקה", desc: "הגנה היקפית מתקדמת עם שליטה מלאה מהסמארטפון מכל מקום בעולם.", icon: <ShieldCheck size={32} /> },
    { title: "בקרת כניסה", desc: "אינטרקומים מבוססי IP, קודנים ביומטריים ומערכות זיהוי פנים.", icon: <Layout size={32} /> },
    { title: "כריזה ושמע", desc: "פתרונות סאונד מקצועיים לעסקים ומערכות כריזה לפי תקן.", icon: <Speaker size={32} /> },
    { title: "תכנון פרויקטים", desc: "ליווי הנדסי משלב התשתית ועד למסירת מערכת מבצעית מלאה.", icon: <Settings size={32} /> },
  ];

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden italic" dir="rtl">
      
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e40af10_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* --- NAV BAR --- */}
      <nav className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* לוגו חכם: מנסה לטעון תמונה, אם אין - מציג אייקון מעוצב */}
            <div className="relative w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] overflow-hidden">
              <img 
                src="/logo.png" 
                alt="לוגו באסל" 
                className="w-full h-full object-contain p-1 z-10" 
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <Cpu size={24} className="absolute text-white/50" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-[1000] tracking-tighter uppercase text-white">באסל</span>
              <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">מערכות תקשורת</span>
            </div>
          </div>
          <a href="tel:0522389607" className="hidden md:flex bg-blue-600 hover:bg-white hover:text-black transition-all px-6 py-2 rounded-full font-black text-sm items-center gap-2">
            <Phone size={14} /> 052-2389607
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/5 mb-8 backdrop-blur-md">
            <Activity size={14} className="text-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Status: Infrastructure_Secure</span>
          </div>

          <h1 className="text-6xl md:text-[12rem] font-[1000] leading-[0.8] tracking-tighter mb-10 uppercase">
            באסל <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #2563eb' }}>מערכות.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-3xl text-slate-400 font-light leading-relaxed mb-16 px-4">
            מובילים את מהפכת התקשורת והאבטחה. <br className="hidden md:block" />
            <span className="text-white font-bold italic underline decoration-blue-600 underline-offset-8">מקצועיות, חדשנות וביצוע ללא פשרות.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="tel:0522389607" className="w-full md:w-auto px-16 py-7 bg-blue-600 text-white font-[1000] text-3xl rounded-2xl shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:scale-105 transition-all">
              052-2389607
            </a>
            <button className="w-full md:w-auto px-12 py-7 border-2 border-white/10 font-black text-2xl rounded-2xl hover:bg-white/5 transition-all">
              הצעת מחיר
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="relative py-40 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-5xl md:text-8xl font-[1000] italic leading-none uppercase">הפתרונות <br/><span className="text-blue-600">שלנו.</span></h2>
            <p className="max-w-md text-slate-500 font-bold italic border-r-4 border-blue-600 pr-6 text-xl">
              אנחנו לא רק מתקינים ציוד, אנחנו בונים מעטפת הגנה ותקשורת חכמה לעסק ולבית.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}
                className="group p-10 bg-[#0a0c12] border border-white/5 rounded-[3rem] hover:bg-blue-600/5 transition-all relative overflow-hidden"
              >
                <div className="text-blue-600 mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 italic uppercase">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed italic">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH SPECS / ABOUT --- */}
      <section className="relative py-40 px-6 bg-blue-600/5 z-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <h2 className="text-5xl md:text-7xl font-black leading-none">צוות מנוסה. <br /><span className="text-blue-500">ביצוע הנדסי.</span></h2>
            <p className="text-xl text-slate-400 italic">
              ברשותנו צוות התקנות מקצועי ומנוסה אשר יעניק לכם שירות אדיב ואמין. אנחנו מאמינים בחדשנות מתמדת ובשימוש בציוד הקצה המתקדם בעולם.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "שירות אדיב ואמין",
                "ייעוץ ותכנון הנדסי",
                "זמינות גבוהה",
                "מחירים תחרותיים"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-black/40 p-5 rounded-2xl border border-white/5 font-bold italic text-sm">
                  <CheckCircle size={20} className="text-blue-500" /> {text}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative flex justify-center">
             <div className="w-64 h-64 md:w-96 md:h-96 border-2 border-blue-600/20 rounded-full flex items-center justify-center animate-spin-slow">
                <Settings size={150} className="text-blue-600 opacity-20" />
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <Users size={100} className="text-white opacity-40 animate-pulse" />
             </div>
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="relative py-48 px-6 text-center z-10">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[4rem] p-12 md:p-24 overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
          <h2 className="text-5xl md:text-9xl font-[1000] italic mb-10 uppercase tracking-tighter">
            Get <span className="text-blue-600">Secure.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="tel:0522389607" className="w-full md:w-auto px-20 py-8 bg-blue-600 text-white rounded-3xl font-black text-4xl italic shadow-2xl hover:scale-105 transition-transform">
              052-2389607
            </a>
          </div>
          <p className="mt-12 text-slate-600 font-mono text-[10px] tracking-[0.5em] uppercase">Basel_Communication_Protocol_2026</p>
        </motion.div>
      </section>

      {/* --- MOBILE FOOTER --- */}
      <footer className="py-10 border-t border-white/5 px-6 opacity-30 text-[9px] font-black uppercase tracking-widest text-center">
        © 2026 BASEL SYSTEMS. ALL RIGHTS RESERVED. // BUILT FOR EXCELLENCE
      </footer>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>

    </div>
  );
}