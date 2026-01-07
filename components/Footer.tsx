export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">VanzzDigital.</h2>
          <p className="text-zinc-500 max-w-xs text-sm">Crafting digital precision for brands that want to lead.</p>
        </div>
        <div className="grid grid-cols-2 gap-10 md:gap-20">
          <div className="flex flex-col gap-3 text-sm text-zinc-400">
            <span className="text-white font-semibold">Social</span>
            <a href="https://www.instagram.com/vanzz.digital?igsh=MWlpbmx5cHVmOG9waw==" className="hover:text-blue-400">Instagram</a>
          </div>
          <div className="flex flex-col gap-3 text-sm text-zinc-400">
            <span className="text-white font-semibold">Contact</span>
            <p>vanzzdigital@gmail.com</p>
            <p>Based in Indonesia</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-xs text-zinc-600">
        © 2026 VanzzDigital Portfolio. All rights reserved.
      </div>
    </footer>
  );
}