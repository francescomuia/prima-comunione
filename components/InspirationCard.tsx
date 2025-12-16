import React, { useEffect, useState } from 'react';
import { generateDailyInspiration } from '../services/geminiService';
import { Sparkles, Crown, Gem } from 'lucide-react';
import { GlamourInspiration } from '../types';

const InspirationCard: React.FC = () => {
  const [data, setData] = useState<GlamourInspiration | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const result = await generateDailyInspiration();
        if (mounted) {
          setData(result);
          setLoading(false);
        }
      } catch (e) {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => { mounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="mt-12 text-center animate-pulse">
        <div className="inline-block p-4 rounded-full bg-white/50 border border-glamour-gold/30">
          <Sparkles className="w-8 h-8 text-glamour-gold animate-spin" />
        </div>
        <p className="mt-2 text-glamour-rose font-serif italic">Creating magic...</p>
      </div>
    );
  }

  return (
    <div className="mt-16 max-w-2xl mx-auto px-4 w-full">
      <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-2xl p-1 border-2 border-glamour-gold/20 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-glamour-rose text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
            <Crown className="w-4 h-4" />
            <span className="font-serif font-bold uppercase tracking-wider text-xs">Daily Glamour</span>
        </div>
        
        <div className="bg-gradient-to-b from-pink-50 to-white rounded-[1.8rem] p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl"></div>
            
            <h3 className="text-3xl font-serif font-bold text-gray-800 mb-6 relative z-10">
            L'Ispirazione di Oggi
            </h3>
            
            <div className="mb-8 relative z-10">
            <Sparkles className="w-6 h-6 text-glamour-gold mx-auto mb-2 opacity-50" />
            <p className="text-xl md:text-2xl text-gray-600 font-serif italic leading-relaxed px-4">
                "{data?.quote}"
            </p>
            </div>

            <div className="relative z-10 bg-white border border-glamour-gold/30 p-4 rounded-xl shadow-sm inline-block max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
                <Gem className="w-5 h-5 text-glamour-rose" />
                <span className="text-xs font-bold text-glamour-rose uppercase tracking-widest">Fashion Tip</span>
            </div>
            <p className="text-gray-700 font-sans font-light">
                {data?.fashionTip}
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;