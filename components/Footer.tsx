import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 md:py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">VanzzDigital.</h2>
          <p className="text-zinc-500 max-w-xs text-sm">Crafting digital precision for brands that want to lead — software, immersive tech, and cybersecurity.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-20 w-full md:w-auto">
          <div className="flex flex-col gap-3 text-sm text-zinc-400">
            <span className="text-white font-semibold">Social</span>
            <a
              href="https://www.instagram.com/vanzz.digital?igsh=MWlpbmx5cHVmOG9waw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <Instagram size={16} /> Instagram
            </a>
            {/* TODO: ganti dengan URL profil LinkedIn kamu yang sebenarnya */}
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <div className="flex flex-col gap-3 text-sm text-zinc-400">
            <span className="text-white font-semibold">Services</span>
            <p>Software Development</p>
            <p>VR / AR Experience</p>
            <p>Cybersecurity</p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-zinc-400 col-span-2 sm:col-span-1">
            <span className="text-white font-semibold">Contact</span>
            <p>vanzzdigital@gmail.com</p>
            <p>Based in Indonesia</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/5 text-xs text-zinc-600">
        © 2026 VanzzDigital Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
