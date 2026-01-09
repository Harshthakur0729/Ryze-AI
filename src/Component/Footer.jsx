import { Zap, ArrowUpRight, Instagram, Twitter, Linkedin, Heart, Send, Sparkles } from 'lucide-react';
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"
import img9 from "../assets/img9.jpg"
import img10 from "../assets/img10.jpg"

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-zinc-950 pt-32 pb-12 px-8 relative overflow-hidden transition-colors duration-700">

            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-orange-500/10 blur-[120px] rounded-full animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 mb-32 border-b border-zinc-100 dark:border-zinc-900 pb-24">
                    <div className="text-center lg:text-left">
                        <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter dark:text-white group">
                            READY TO <span className="text-orange-500 inline-block transition-transform duration-700 group-hover:translate-x-4">SCALE?</span>
                        </h2>
                        <button className="mt-12 relative group px-16 py-8 bg-zinc-950 dark:bg-white rounded-full overflow-hidden transition-all active:scale-95 shadow-2xl">
                            <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <span className="relative z-10 flex items-center gap-3 text-xl font-black uppercase text-white dark:text-zinc-950 group-hover:text-white transition-colors duration-300">
                                Launch Now <ArrowUpRight size={24} strokeWidth={3} />
                            </span>
                        </button>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="text-orange-500" size={20} />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] dark:text-zinc-300">Weekly Ad Intelligence</span>
                        </div>
                        <h4 className="text-2xl font-black italic uppercase dark:text-white mb-6">Get the AI Edge.</h4>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="YOUR@EMAIL.COM"
                                className="w-full bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-5 text-sm font-bold outline-none focus:border-orange-500 dark:text-white"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-6 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-32">
                    <div className="col-span-2 lg:col-span-1 space-y-8">
                        <div className="flex items-center gap-3 group cursor-pointer w-fit">
                            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white transition-all duration-700 group-hover:rotate-[360deg] group-hover:rounded-full">
                                <Zap size={24} fill="currentColor" />
                            </div>
                            <span className="text-3xl font-black tracking-tighter uppercase italic dark:text-white">Ryze</span>
                        </div>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-500">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        { title: "Product", links: ["Ad Audits", "Creative AI", "Budget Flow", "Pricing"] },
                        { title: "Network", links: ["Wall of Love", "Case Studies", "Agency Partner", "Careers"] },
                        { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Security", "Contact"] }
                    ].map((col, idx) => (
                        <div key={idx} className="flex flex-col gap-8">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-zinc-400 dark:text-zinc-500 font-bold text-sm uppercase tracking-widest hover:text-orange-500 dark:hover:text-white hover:translate-x-3 inline-block transition-all duration-300">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-y border-zinc-100 dark:border-zinc-900 py-8 flex flex-wrap justify-between items-center gap-8 mb-12">
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-3 group cursor-pointer">
                            {[

                                img7,
                                img8,
                                img9,
                                img10
                            ].map((url, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-zinc-950 overflow-hidden hover:z-10 transition-transform hover:scale-110 shadow-lg">
                                    <img src={url} alt="Agency Partner" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="font-black text-xs uppercase tracking-widest dark:text-zinc-400">Trusted by 2000+ Agencies</p>
                    </div>
                    <div className="flex gap-10 items-center">
                        <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-green-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div> AI Agents Online
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">$500M+ Managed</span>
                    </div>
                </div>

                <div className="relative pt-12 flex flex-col items-center">
                    <h3 className="text-[18vw] font-black uppercase tracking-tighter leading-none text-zinc-900 dark:text-white opacity-[0.03] pointer-events-none select-none absolute -bottom-8">
                        RYZE.AI
                    </h3>
                    <div className="flex flex-col md:flex-row justify-between w-full text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] relative z-10 gap-4 text-center">
                        <span>© 2026 RYZE TECHNOLOGIES INC.</span>
                        <span className="flex items-center justify-center gap-2">DESIGNED FOR THE FUTURE <Heart size={10} className="fill-orange-500 text-orange-500" /></span>
                        <span>SF • GLOBAL</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;