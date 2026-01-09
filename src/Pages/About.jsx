import { Sparkles } from 'lucide-react';
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"



const About = () => {
    const scrollingImages = [
        img1, img2, img3, img4, img5, img6
    ];

    return (
        <section className="bg-white dark:bg-zinc-950 py-16 md:py-32 px-4 md:px-8 overflow-hidden transition-colors duration-700">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16 md:mb-32">
                    <h2 className="text-4xl md:text-8xl font-black italic uppercase leading-[1.1] md:leading-[0.85] tracking-tighter dark:text-white mb-8 md:mb-16">
                        We built the ads <br className="hidden md:block" /> manager we <span className="text-orange-500">always wanted.</span>
                    </h2>
                    <div className="w-full h-[250px] sm:h-[400px] md:h-[600px] bg-zinc-100 dark:bg-zinc-900 rounded-[24px] md:rounded-[60px] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl relative group">
                        <img
                            src={img1}
                            className="w-full h-full object-cover transition-all duration-700 md:group-hover:scale-105"
                            alt="Team at work"
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-center mb-20 md:mb-40">
                    <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                        <p className="text-xl md:text-3xl font-bold text-zinc-500 dark:text-zinc-400 italic leading-snug">
                            "We've run ads at Google, DTC brands, big companies, small agencies. <span className="text-zinc-950 dark:text-white">Late nights. Tight budgets. Impossible targets.</span>"
                        </p>
                        <p className="text-sm md:text-xl font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-relaxed">
                            We know the truth: most ads lose money. Not because people are bad at marketing. Because the work is too manual, too slow, too scattered.
                        </p>
                    </div>
                    <div className="w-full h-[300px] md:h-auto md:aspect-square bg-zinc-50 dark:bg-zinc-900 rounded-[24px] md:rounded-[50px] border border-zinc-100 dark:border-zinc-800 overflow-hidden order-1 lg:order-2">
                        <img src={img2} className="w-full h-full object-cover md:hover:scale-105 transition-transform duration-700" alt="Manual work vs AI" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-center mb-20 md:mb-40">
                    <div className="w-full h-[300px] md:h-auto md:aspect-square bg-zinc-50 dark:bg-zinc-900 rounded-[24px] md:rounded-[50px] border border-zinc-100 dark:border-zinc-800 overflow-hidden">
                        <img src={img3} className="w-full h-full object-cover md:hover:scale-105 transition-transform duration-700" alt="San Francisco Ryze" />
                    </div>
                    <div className="space-y-6 md:space-y-8">
                        <h3 className="text-3xl md:text-4xl font-black italic uppercase dark:text-white leading-tight">So we moved to San Francisco <br /> and built <span className="text-orange-500">Ryze.</span></h3>
                        <p className="text-lg md:text-xl font-bold text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
                            Worked with the best agencies. Learned what actually moves the needle. Then built AI to do exactly that.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32 px-2">
                    <div className="inline-flex items-center gap-2 mb-6 text-orange-500">
                        <Sparkles size={24} fill="currentColor" />
                    </div>
                    <p className="text-2xl md:text-5xl font-black italic uppercase leading-tight dark:text-white mb-8 md:mb-12">
                        It watches your campaigns, <span className="text-orange-500">fixes what's broken,</span> scales what's working. Every day. Without you.
                    </p>
                    <div className="w-full h-[200px] sm:h-[300px] md:h-[450px] bg-zinc-50 dark:bg-zinc-900 rounded-[24px] md:rounded-[40px] border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-xl">
                        <img src={img4} className="w-full h-full object-cover md:hover:scale-105 transition-transform duration-700" alt="AI Monitoring" />
                    </div>
                </div>

                <div className="space-y-16 md:space-y-24">
                    <div className="max-w-4xl space-y-6 md:space-y-8">
                        <h4 className="text-3xl md:text-6xl font-black italic uppercase dark:text-white leading-[1.1]">
                            Ads that <span className="text-orange-500">make money.</span> <br />
                            The way it should've always worked.
                        </h4>
                        <button className="w-full md:w-auto bg-orange-500 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-zinc-950 transition-all shadow-2xl active:scale-95">
                            Experience the Future
                        </button>
                    </div>

                    <div className="relative mt-10 md:mt-20 py-6 md:py-10 border-y border-zinc-100 dark:border-zinc-900 pointer-events-none">
                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll whitespace-nowrap gap-4 md:gap-8 py-4">
                                {[...scrollingImages, ...scrollingImages, ...scrollingImages].map((img, index) => (
                                    <div
                                        key={index}
                                        className="w-[200px] h-[140px] md:w-[450px] md:h-[300px] flex-none rounded-[16px] md:rounded-[30px] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md"
                                    >
                                        <img
                                            src={img}
                                            className="w-full h-full object-cover transition-transform duration-700 md:hover:scale-110"
                                            alt={`Scroll ${index}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10"></div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-scroll {
                    animation: scroll 35s linear infinite !important;
                }
                @media (max-width: 768px) {
                    .animate-scroll {
                        animation: scroll 20s linear infinite !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;