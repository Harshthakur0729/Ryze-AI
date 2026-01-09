import { useEffect, useState } from 'react';
import {
  ArrowRight, Star, TrendingUp, Search,
  Target, ShieldCheck, HandCoins, Layers,
  Cpu, CheckCircle2
} from 'lucide-react';

const Home = () => {
  const logos = ["HG", "MOS", "Motif", "PUPIL", "Ritma", "Speedy", "TETRA", "WILLYS", "caleyx", "directly"];
  const tickerText = "• 2000+ CLIENTS • 700+ AGENCIES • 23+ COUNTRIES • $500M+ AD SPEND MANAGED ";

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#030303] font-sans text-gray-900 dark:text-gray-100 selection:bg-orange-500/30 transition-colors duration-700 overflow-x-hidden relative">

      <div className="pointer-events-none fixed inset-0 z-30 opacity-40 transition-opacity duration-500"
        style={{ background: `radial-gradient(650px at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.12), transparent 80%)` }} />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate-900/[0.03] dark:bg-grid-white/[0.02] pointer-events-none" />

      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-orange-500/20 text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-12 shadow-xl animate-fade-in">
            <Cpu size={14} className="animate-spin-slow" />
            Autonomous Ad Agent is Online
          </div>

          <h1 className="text-6xl md:text-[130px] font-black uppercase tracking-tighter leading-[0.75] mb-12 animate-title drop-shadow-2xl">
            Scale <span className="text-orange-600">Ads</span><br />
            with <span className="text-outline-orange italic">Autopilot</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-500 dark:text-zinc-400 font-bold text-xl md:text-2xl mb-16 leading-tight">
            Stop wasting budgets on manual management. Our AI agent <span className="text-gray-900 dark:text-white underline decoration-orange-500/50 underline-offset-4">optimizes bids and creatives 24/7</span> for Meta, Google & LinkedIn.
          </p>

          <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
              <button className="relative w-full sm:w-auto bg-black dark:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 active:scale-95 transition-all shadow-2xl">
                Launch Your Campaign <ArrowRight size={20} />
              </button>
            </div>
            <div className="flex items-center gap-4 text-xs font-black uppercase opacity-60 tracking-widest">
              <CheckCircle2 size={18} className="text-green-500" /> No Card Required
            </div>
          </div>
        </div>
      </section>
      <div className="relative py-16 border-y dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/50 backdrop-blur-sm">
        <div className="flex animate-marquee gap-24 items-center">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-4xl font-black text-gray-300 dark:text-zinc-700 uppercase tracking-widest hover:text-orange-500 transition-colors duration-300 cursor-default">
              {logo}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#fafafa] dark:from-[#030303] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#fafafa] dark:from-[#030303] to-transparent z-10" />
      </div>

      <section className="py-24 px-4 max-w-7xl mx-auto" id="features">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">

          <div className="md:col-span-8 bg-white dark:bg-zinc-900/40 backdrop-blur-xl rounded-[48px] border dark:border-zinc-800 p-10 shadow-2xl relative overflow-hidden group">
            <div className="flex justify-between items-center mb-16">
              <h3 className="font-black uppercase tracking-widest text-[10px] text-gray-400">ROAS Tracking • Live Analytics</h3>
              <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Active Agent</span>
              </div>
            </div>

            <div className="flex items-end gap-3 mb-10">
              <span className="text-8xl font-black tracking-tighter leading-none">5.2<span className="text-4xl text-orange-600">x</span></span>
              <span className="text-green-500 font-black mb-2 flex items-center gap-1 bg-green-500/10 px-3 py-1 rounded-xl text-sm">
                <TrendingUp size={16} /> +24%
              </span>
            </div>

            <div className="flex items-end gap-3.5 h-48">
              {[40, 70, 45, 90, 65, 80, 50, 95, 100, 85, 75, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-xl transition-all duration-1000 group-hover:opacity-100 opacity-60"
                  style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }}
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-4 bg-orange-600 rounded-[48px] p-10 text-white shadow-2xl flex flex-col justify-between group transition-all duration-500 hover:rotate-1">
            <Target size={48} strokeWidth={3} className="mb-8 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-3xl font-black leading-tight mb-4 tracking-tighter uppercase">AI Bid<br />Manager</h3>
              <p className="opacity-90 font-bold text-sm leading-relaxed italic">"The agent adjusted our keyword bids 1,402 times today to hit the ROAS target."</p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 flex justify-between font-black text-xs uppercase tracking-widest">
              <span>System Status</span>
              <span className="text-white animate-pulse">Running</span>
            </div>
          </div>

          <div className="md:col-span-4 bg-white dark:bg-zinc-900/60 border dark:border-zinc-800 rounded-[40px] p-8 shadow-xl hover:scale-105 transition-transform duration-500">
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 bg-blue-500/10 text-blue-500 rounded-3xl"><ShieldCheck size={32} /></div>
              <h4 className="font-black uppercase text-[10px] tracking-widest opacity-50">Fraud Detection</h4>
            </div>
            <p className="text-3xl font-black tracking-tighter">$4,209</p>
            <p className="text-[10px] font-black opacity-30 uppercase tracking-widest">Wasted Spend Blocked</p>
          </div>

          <div className="md:col-span-4 bg-white dark:bg-zinc-900/60 border dark:border-zinc-800 rounded-[40px] p-8 shadow-xl">
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 bg-purple-500/10 text-purple-500 rounded-3xl"><Layers size={32} /></div>
              <h4 className="font-black uppercase text-[10px] tracking-widest opacity-50">Creative Gen</h4>
            </div>
            <p className="text-3xl font-black tracking-tighter">84%</p>
            <p className="text-[10px] font-black opacity-30 uppercase tracking-widest">A/B Winner Prediction</p>
          </div>

          <div className="md:col-span-4 bg-black dark:bg-orange-600 rounded-[40px] p-8 shadow-xl text-white group overflow-hidden relative">
            <div className="flex justify-between items-center mb-8 relative z-10">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-50">AI Budgeting</span>
              <HandCoins size={28} className="group-hover:translate-y-[-10px] transition-transform" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden"><div className="h-full w-2/3 bg-white" /></div>
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden"><div className="h-full w-1/2 bg-white" /></div>
            </div>
            <div className="absolute bottom-[-20%] right-[-10%] opacity-10 group-hover:scale-125 transition-transform"><HandCoins size={120} /></div>
          </div>

        </div>
      </section>

      <div className="py-20 space-y-0 relative z-40">
        <div className="bg-orange-600 py-6 border-b border-black/10 overflow-hidden flex transform -rotate-1 scale-110 shadow-2xl">
          <div className="animate-scroll-left whitespace-nowrap flex items-center">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-white text-sm font-black uppercase tracking-[0.3em] px-12">{tickerText}</span>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-900 py-6 border-b border-black/10 overflow-hidden flex transform rotate-1 scale-110 shadow-2xl">
          <div className="animate-scroll-right whitespace-nowrap flex items-center">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-gray-950 dark:text-white text-sm font-black uppercase tracking-[0.3em] px-12">{tickerText}</span>
            ))}
          </div>
        </div>
      </div>

      <section className="py-40 px-4 text-center" id="audit">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase mb-12">
            Audit your <br />
            <span className="text-orange-600 text-outline-black italic">account</span> instantly.
          </h2>

          <div className="relative p-2 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-[40px] shadow-3xl hover:shadow-orange-500/10 transition-shadow">
            <div className="flex flex-col md:flex-row p-2">
              <div className="flex-1 flex items-center gap-6 px-8 py-4">
                <Search className="text-orange-600" size={32} />
                <input type="text" placeholder="your-brand.com" className="bg-transparent w-full focus:outline-none text-2xl font-black placeholder:opacity-20" />
              </div>
              <button className="bg-black dark:bg-orange-600 text-white px-12 py-6 rounded-[32px] font-black uppercase tracking-widest text-sm hover:scale-[0.98] transition-all">Launch AI Audit</button>
            </div>
          </div>
        </div>
      </section>


      <section className="py-32 px-4 bg-zinc-50 dark:bg-zinc-950/30" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">
              Loved by <br /><span className="text-orange-600">Growth Teams.</span>
            </h2>
            <div className="flex -space-x-5">
              {[1, 2, 3, 4, 5].map(i => (
                <img key={i} src={`https://i.pravatar.cc/150?u=${i * 10}`} className="w-16 h-16 rounded-full border-4 border-white dark:border-zinc-900 shadow-2xl" alt="user" />
              ))}
              <div className="w-16 h-16 rounded-full bg-orange-600 border-4 border-white dark:border-zinc-900 flex items-center justify-center font-black text-white shadow-2xl">600+</div>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              { name: "Bryan Evans", role: "Growth @ TechFlow", text: "The AI bidding agent adjusted our bids 1,400 times in 24 hours. We saw a 60% ROAS spike within week one." },
              { name: "Sarah Jenkins", role: "CEO @ Bloom", text: "Literally set it and forget it. It's like having a senior performance marketer working for $0.15 an hour." },
              { name: "Daniel Bauer", role: "CMO @ Gauge", text: "Finally, an AI that doesn't just show data but takes action. The creative analysis is magic." }
            ].map((rev, i) => (
              <div key={i} className="break-inside-avoid bg-white dark:bg-zinc-900 p-10 rounded-[48px] border dark:border-zinc-800 shadow-xl transition-all hover:scale-105 group">
                <div className="flex text-orange-500 mb-8 gap-1">
                  {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-bold text-lg leading-relaxed mb-10 italic">"{rev.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t dark:border-zinc-800">
                  <div className="w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center text-orange-600 font-black tracking-tighter italic">AI</div>
                  <div>
                    <h4 className="font-black text-sm">{rev.name}</h4>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes title { 0% { opacity: 0; transform: translateY(50px) skewY(5deg); } 100% { opacity: 1; transform: translateY(0) skewY(0deg); } }
        
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-scroll-left { animation: scrollLeft 45s linear infinite; }
        .animate-scroll-right { animation: scrollRight 45s linear infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-title { animation: title 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .text-outline-black { -webkit-text-stroke: 1.5px #ea580c; color: transparent; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .text-outline-orange { -webkit-text-stroke: 1.5px #ea580c; color: transparent; }
      `}} />
    </div>
  );
};

export default Home;