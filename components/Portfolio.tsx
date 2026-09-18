"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Globe, Box, Instagram, FolderKanban, MessageCircle, Send, Play } from "lucide-react";

const projects = [
  {
    title: "Digital Magazine Tuban",
    desc: "Interactive government magazine with custom Admin CMS.",
    category: "Government Web",
    link: "https://tubankab.go.id/majalahdigital",
    image: "/portfolio/tuban.webp",
    type: "Web",
    icon: <Globe size={18} />,
    size: "md:col-span-2"
  },
  {
    title: "VR Detective: SureLock",
    desc: "Immersive mystery-solving experience.",
    category: "Game Dev",
    link: "https://youtu.be/bFJiOsEWZ1M",
    image: "https://img.youtube.com/vi/bFJiOsEWZ1M/maxresdefault.jpg",
    type: "VR",
    icon: <Box size={18} />,
    isYoutube: true,
    size: "md:col-span-1"
  },
  {
    title: "SB Finance",
    desc: "Professional company profile for financial services.",
    category: "Corporate Web",
    link: "https://www.sbfinance.co.id/",
    image: "/portfolio/sbfinance.webp",
    type: "Web",
    icon: <Globe size={18} />,
    size: "md:col-span-1"
  },
  {
    title: "VR OTS PT Pupuk Kaltim",
    desc: "Industrial factory simulation training with multiplayer systems.",
    category: "Industrial",
    link: "https://youtu.be/FlhiGqSuLss",
    image: "https://img.youtube.com/vi/FlhiGqSuLss/maxresdefault.jpg",
    type: "VR",
    icon: <Box size={18} />,
    isYoutube: true,
    size: "md:col-span-1"
  },
  {
    title: "Samator Healthcare",
    desc: "Healthcare management platform with integrated Admin CMS.",
    category: "Health-Tech",
    link: "https://samatorhealthcare.com/",
    image: "/portfolio/samator.webp",
    type: "Web",
    icon: <Globe size={18} />,
    size: "md:col-span-1"
  },
  {
    title: "Digital Infrastructure Map",
    desc: "Interactive geospatial mapping and flexible data management for smart infrastructure.",
    category: "Geospatial",
    link: "https://drive.google.com/file/d/1SQdeJoB7mtJitA6JABGStRUAlDB4qZjU/view",
    image: "/portfolio/map.webp",
    type: "Map",
    icon: <FolderKanban size={18} />,
    size: "md:col-span-2"
  },
  {
    title: "VR Stride Military",
    desc: "Tactical soldier POV simulation.",
    category: "Simulation",
    link: "https://youtu.be/Z8DIclTedGk",
    image: "https://img.youtube.com/vi/Z8DIclTedGk/maxresdefault.jpg",
    type: "VR",
    icon: <Box size={18} />,
    isYoutube: true,
    size: "md:col-span-1"
  },
  {
    title: "Arunika Handcraft",
    desc: "Digitalizing UMKM with modern e-commerce solution.",
    category: "E-commerce",
    link: "https://arunika-handcraft.vercel.app/",
    image: "/portfolio/arunika.webp",
    type: "Web",
    icon: <Globe size={18} />,
    size: "md:col-span-1"
  },
  {
    title: "VR Basketball",
    desc: "A high-fidelity VR basketball simulation focused on realistic ball mechanics and tactile interaction.",
    category: "Sports",
    link: "https://youtu.be/YYl7KkpAYZc",
    image: "/portfolio/basketball.webp",
    type: "VR",
    icon: <Box size={18} />,
    isYoutube: true,
    size: "md:col-span-1"
  },
  {
    title: "Disaster Simulation",
    desc: "Earthquake & Tsunami awareness VR.",
    category: "Education",
    link: "https://drive.google.com/file/d/15_e2OdVyr5J4ho1upc6BxdojSCpTRV5l/view",
    image: "/portfolio/disaster.webp",
    type: "VR",
    icon: <Box size={18} />,
    size: "md:col-span-2"
  },
  {
    title: "AR Farms: Interactive Learning",
    desc: "Bringing education to life by merging physical flashcards with 3D animals and fruits through Augmented Reality.",
    category: "Edutech",
    link: "https://www.instagram.com/reel/C7IfLRnviyE/",
    image: "/portfolio/arfarms.webp",
    type: "AR Experience",
    icon: <Instagram size={18} />,
    size: "md:col-span-1"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.type === filter);

  return (
    <section className="px-6 max-w-7xl mx-auto flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white">Selected Works</h2>
          <p className="text-zinc-500 mt-3 md:mt-4 max-w-md font-medium text-sm md:text-base">
            Showcasing high-performance digital products & immersive experiences.
          </p>
        </div>

        {/* FIX: scrollable on very narrow screens instead of wrapping/squeezing */}
        <div className="flex bg-zinc-900/50 p-1 rounded-full border border-white/5 backdrop-blur-sm overflow-x-auto max-w-full">
          {["All", "Web", "VR", "AR"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 md:px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap ${
                filter === tab ? "bg-white text-black shadow-lg" : "text-zinc-500 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            // FIX: seluruh card sekarang jadi <a> (bukan cuma icon kecil di pojok).
            // Sebelumnya klik hanya kena kalau tepat di icon ExternalLink, dan pas
            // filter selain "All" dipilih, card yang lagi exit/reposisi (AnimatePresence
            // popLayout + layout animation) bisa numpuk di atas card baru sehingga klik
            // sering miss / kena elemen yang salah. Menjadikan seluruh card sebagai satu
            // link menghilangkan masalah target klik kecil ini sekaligus.
            <motion.a
              layout
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`${project.size} group relative block overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 h-[380px] md:h-[450px] cursor-pointer`}
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-30 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
              </div>

              <div className="relative h-full p-6 md:p-8 flex flex-col justify-between z-20 pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 text-blue-400">
                    {project.icon}
                  </div>
                  {/* Sekarang cuma indikator visual, bukan target klik terpisah lagi */}
                  <div className="p-3 rounded-full bg-white text-black opacity-100 translate-y-0 md:opacity-0 md:translate-y-[-10px] md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all">
                    <ExternalLink size={18} />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">{project.category}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-xs opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                    {project.desc}
                  </p>
                  {project.isYoutube && (
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-white/50">
                      <Play size={12} fill="currentColor" /> PREVIEW VIDEO
                    </div>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-24 md:mt-32 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-blue-600 p-8 sm:p-12 md:p-24 flex flex-col items-center text-center group"
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05] md:leading-none mb-8 md:mb-10">
              READY TO BUILD YOUR <br className="hidden md:block" /> NEXT BIG THING?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/+6285777126038?text=Saya%20tertarik%20menggunakan%20jasa%20VanzzDigital,%20bolehkah%20saya%20bertanya%20lebih%20lanjut%3F" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl transition-all group/btn"
              >
                <MessageCircle size={22} className="group-hover/btn:rotate-12 transition-transform" /> 
                WhatsApp Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/vanzz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl transition-all group/btn"
              >
                <Send size={22} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" /> 
                Telegram Chat
              </motion.a>
            </div>
          </div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" 
          />
        </motion.div>
      </div>
    </section>
  );
}
