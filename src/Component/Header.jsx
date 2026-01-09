import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowRight, Zap } from 'lucide-react';

const Header = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full top-0 z-[100] transition-all duration-700 h-24 flex items-center
      ${scrolled
        ? 'h-20 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-3xl border-b border-orange-500/10'
        : 'bg-transparent'}`}>

      <style>
        {`
          @keyframes breathe-soft {
            0%, 100% { transform: scale(1); filter: brightness(1); }
            50% { transform: scale(1.08); filter: brightness(1.1); }
          }
          .animate-logo-breathe {
            animation: breathe-soft 4s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-8 w-full flex justify-between items-center">

        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group z-[110] outline-none">
          <div className="relative animate-logo-breathe">
            <div className="absolute -inset-3 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative w-12 h-12 bg-zinc-950 dark:bg-orange-500 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-700 group-hover:rotate-[360deg]">
              <Zap size={22} className="fill-current" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black dark:text-white tracking-tighter uppercase group-hover:text-orange-500 transition-colors">
              Ryze<span className="text-orange-500 italic">.ai</span>
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1 p-1.5 bg-zinc-100/50 dark:bg-zinc-900/40 backdrop-blur-md rounded-full border border-zinc-200/50 dark:border-zinc-800/50 shadow-inner">
          {[
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: '/pricing' },
            { name: 'About', path: '/about' }
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group
                ${isActive(link.path) ? 'text-white' : 'text-zinc-500 hover:text-orange-600 dark:hover:text-white'}`}
            >
              <span className="relative z-10">{link.name}</span>
              <div className={`absolute inset-0 transform-gpu transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full
                ${isActive(link.path)
                  ? 'bg-orange-500 scale-100 opacity-100 shadow-lg shadow-orange-500/20'
                  : 'bg-orange-500/10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'}`}>
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <button onClick={toggleTheme} className="p-3 bg-white/5 dark:bg-zinc-900/40 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 transition-all hover:text-orange-500">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="group relative px-8 py-3 bg-zinc-950 dark:bg-white rounded-full overflow-hidden transition-all duration-500 shadow-xl shadow-orange-500/5">
            <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 flex items-center gap-2 text-sm font-black text-white dark:text-zinc-950 group-hover:text-white transition-colors">
              Book Demo <ArrowRight size={16} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2 z-[110]">
          <button onClick={toggleTheme} className="p-2 text-zinc-500">{isDark ? <Sun size={22} /> : <Moon size={22} />}</button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-900 dark:text-white">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 h-screen w-full bg-black/20 backdrop-blur-sm transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
      >
        <div
          className={`absolute right-4 top-4 bottom-4 w-[280px] bg-white dark:bg-zinc-950 shadow-2xl p-8 flex flex-col gap-6 rounded-[40px] transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-[120%]'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-12 flex flex-col gap-6">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] border-b border-zinc-100 dark:border-zinc-800 pb-3">Navigation</p>
            {[
              { name: 'Home', path: '/' },
              { name: 'Pricing', path: '/pricing' },
              { name: 'About', path: '/about' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-3xl font-black rounded-2xl px-2 py-1 transition-all ${isActive(link.path) ? 'text-orange-500' : 'text-zinc-900 dark:text-white hover:text-orange-500'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className="mt-auto w-full bg-orange-500 text-white py-5 rounded-full font-black text-lg shadow-xl shadow-orange-500/30">
            Book Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;