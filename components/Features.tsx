"use client";
import { motion } from "framer-motion";
import { Globe, Cpu, ArrowUpRight } from "lucide-react";

export default function Features() {
  const cards = [
    {
      title: "Enterprise Solutions",
      desc: "Sistem majalah digital interaktif dengan integrasi backend yang kokoh dan aman.",
      icon: <Globe className="text-blue-500" size={24} />,
      size: "md:col-span-2"
    },
    {
      title: "Performance",
      desc: "Optimasi kecepatan maksimal.",
      icon: <Cpu className="text-blue-500" size={24} />,
      size: "md:col-span-1"
    }
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${card.size} group relative p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all`}
          >
            {/* Icon & Arrow */}
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                {card.icon}
              </div>
              <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" />
            </div>

            {/* Content */}
            <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-sm">
              {card.desc}
            </p>

            {/* Background Decor */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full group-hover:bg-blue-600/10 transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}