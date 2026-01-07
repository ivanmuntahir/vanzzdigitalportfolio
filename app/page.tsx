import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-blue-500/30 min-h-screen overflow-x-hidden">
      <Navbar />
      
      <div className="flex flex-col space-y-24 md:space-y-40">
        
        <Hero />

        <Portfolio />

      </div>

      <Footer />
    </main>
  );
}