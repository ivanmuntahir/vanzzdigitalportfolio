"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { 
  SiUnity, 
  SiLaravel, 
  SiThreedotjs, 
  SiNextdotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiFlutter, 
  SiFigma, 
  SiReact
} from "react-icons/si";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Number(latest.toFixed(0)));
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

export default function Hero() {
  const techStack = [
    { name: "Unity", icon: <SiUnity /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "Three JS", icon: <SiThreedotjs /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "React JS", icon: <SiReact /> },
    { name: "JS", icon: <SiJavascript /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Flutter", icon: <SiFlutter /> },
  ];

  const handleScrollToWork = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
  };

  return (
    <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-10"
      >
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        Available for Q1 2026 Projects
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] max-w-5xl"
      >
        Building Advanced Software<br />
        <span className="text-zinc-600">& Immersive Solutions</span>
      </motion.h1>

      <div className="flex flex-wrap gap-x-3 gap-y-1">
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-3xl font-bold tracking-tighter text-white"
        >
          Imagine.
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold tracking-tighter text-zinc-600"
        >
          Realize.
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold tracking-tighter text-white"
        >
          Simplify.
        </motion.span>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-zinc-500 max-w-xl text-base md:text-lg font-medium leading-relaxed"
      >
        VanzzDigital is here to help you implement and scale your vision—optimizing complex workflows and crafting immersive tech into a seamless experience.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 z-10"
      >
        <a 
          href="https://wa.me/628xxxx" 
          target="_blank" 
          className="bg-white text-black px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all hover:scale-105"
        >
          Start a Project <ArrowUpRight size={18} />
        </a>
        <button 
          onClick={handleScrollToWork}
          className="bg-zinc-900/50 backdrop-blur-md text-white px-8 py-4 rounded-full text-sm font-bold border border-white/10 hover:bg-zinc-800 transition-all hover:scale-105"
        >
          View Selected Works
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-white/5 py-12 w-full max-w-3xl"
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-[9px] text-blue-500 font-bold tracking-[0.3em] uppercase mb-2">Portfolio</span>
          <div className="text-4xl md:text-5xl font-bold tracking-tighter"><Counter value={11} />+</div>
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">Selected Works</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-[9px] text-blue-500 font-bold tracking-[0.3em] uppercase mb-2">Industry</span>
          <div className="text-4xl md:text-5xl font-bold tracking-tighter"><Counter value={5} />+</div>
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">Years of Expert</p>
        </div>
        <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
          <span className="text-[9px] text-blue-500 font-bold tracking-[0.3em] uppercase mb-2">Client Trust</span>
          <div className="text-4xl md:text-5xl font-bold tracking-tighter"><Counter value={100} />%</div>
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">Client Success</p>
        </div>
      </motion.div>

      <div className="mt-28 w-full relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-20 whitespace-nowrap px-4"
          >
            {[...techStack, ...techStack].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-zinc-900 hover:text-blue-500 transition-colors cursor-default">
                <span className="text-3xl md:text-4xl">{item.icon}</span>
                <span className="text-4xl md:text-6xl font-black italic tracking-[ -0.05em] uppercase opacity-80">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}