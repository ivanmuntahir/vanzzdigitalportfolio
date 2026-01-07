"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="w-full max-w-7xl flex justify-between items-center px-6 py-4 rounded-2xl border border-white/5 bg-black/50 backdrop-blur-xl"
      >
        <div className="font-bold text-xl tracking-tighter">VANZZ<span className="text-blue-500">DIGITAL</span></div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition">Work</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">About</a>
        </div>
        <a 
  href="https://wa.me/6285777126038?text=Hello%20VanzzDigital!%20I'm%20interested%20in%20your%20services%20and%20would%20love%20to%20discuss%20a%20project." 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full text-sm font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
>
  Let's Talk
</a>
      </motion.div>
    </nav>
  );
}