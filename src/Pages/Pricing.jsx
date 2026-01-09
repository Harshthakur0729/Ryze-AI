import { Check, Zap, Star } from 'lucide-react';

const Pricing = () => {
  const freeFeatures = ["Basic Ad Audits", "1 Connected Account", "Weekly Reports", "Email Support"];
  const proFeatures = ["Unlimited AI Audits", "Unlimited Accounts", "Real-time Dashboard", "24/7 Priority Support", "Custom Strategy Builder"];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter dark:text-white">
            Ready to scale <span className="text-orange-600">your ads?</span>
          </h2>
          <p className="text-gray-500 mt-4 font-medium">Choose a plan that fits your growth stage.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div className="group relative p-8 bg-white dark:bg-zinc-900 border border-orange-100 dark:border-zinc-800 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold dark:text-white uppercase tracking-widest text-gray-400">Basic</h3>
                <p className="text-4xl font-black mt-2 dark:text-white">$0<span className="text-sm text-gray-400 font-medium">/mo</span></p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-2xl group-hover:rotate-12 transition-transform duration-500">
                <Zap className="text-gray-400" size={24} />
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {freeFeatures.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded-full text-orange-600">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-95">
              Start Free Journey
            </button>
          </div>

          <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl shadow-orange-500/30 transition-all duration-500 hover:-translate-y-3">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl flex items-center gap-2">
              <Star size={10} className="fill-orange-500 text-orange-500" /> Best Value
            </div>

            <div className="bg-white dark:bg-zinc-950 p-8 rounded-[2.4rem] h-full">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold text-orange-600 uppercase tracking-widest">Pro AI</h3>
                  <p className="text-5xl font-black mt-2 dark:text-white tracking-tighter">$49<span className="text-sm text-gray-400 font-medium tracking-normal">/mo</span></p>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Zap className="text-orange-600 fill-orange-600" size={24} />
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {proFeatures.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold dark:text-white transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                    <div className="bg-orange-500 p-1 rounded-full text-white shadow-lg shadow-orange-500/40">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:bg-black dark:hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20 active:scale-95">
                Join Pro Member
              </button>
            </div>
          </div>

        </div>

        <p className="text-center mt-12 text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
          No credit card required <span className="w-1 h-1 bg-gray-300 rounded-full" /> Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Pricing;