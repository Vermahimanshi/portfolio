const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Himanshi Verma. All rights reserved.
        </p>
        <p className="text-zinc-400 text-sm font-medium tracking-wide">
          Designed & Developed by <span className="text-white">Himanshi Verma</span>
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
