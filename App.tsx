import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import InspirationCard from './components/InspirationCard';
import { APP_TITLE, APP_SUBTITLE } from './constants';
import { Star, Calendar, MapPin, Utensils, Sparkles } from 'lucide-react';
import auroraImage from './images/aurora.jpg';
import rugea from './images/rugea.png'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fff0f3] relative overflow-x-hidden font-sans">
      
      {/* Background decoration: More elegant and abstract */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
         <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-pink-200 to-transparent rounded-full blur-[100px] opacity-40"></div>
         <div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] bg-gradient-to-bl from-yellow-200 to-transparent rounded-full blur-[80px] opacity-30"></div>
         <div className="absolute bottom-[0%] left-[20%] w-[60%] h-[60%] bg-gradient-to-t from-pink-100 to-transparent rounded-full blur-[100px] opacity-50"></div>
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        
        {/* Header Section */}
        <header className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-white/30 blur-2xl -z-10 rounded-full"></div>
          
          <div className="inline-flex items-center gap-2 mb-4">
             <div className="h-[1px] w-8 bg-glamour-gold"></div>
             <span className="font-serif italic text-glamour-rose text-lg">Save the Date</span>
             <div className="h-[1px] w-8 bg-glamour-gold"></div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 mb-4 drop-shadow-sm leading-tight">
            {APP_TITLE}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light tracking-wide max-w-2xl mx-auto">
            {APP_SUBTITLE}
          </p>
        </header>

        {/* Hero Section: Vertical Photo Layout */}
        <div className="w-full max-w-5xl mb-16 flex flex-col md:flex-row gap-8 items-center justify-center">
            
            {/* Countdown Side */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right order-2 md:order-1">
                <h2 className="text-3xl font-serif font-bold text-glamour-rose mb-6 relative inline-block">
                    Il Conto alla Rovescia
                    <Sparkles className="absolute -top-4 -right-6 w-6 h-6 text-glamour-gold animate-pulse" />
                </h2>
                <div className="transform scale-90 md:scale-100 origin-center md:origin-right">
                    <CountdownTimer />
                </div>
            </div>

            {/* Photo Frame Side - Portrait for the user's photo */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start order-1 md:order-2">
                <div className="relative group">
                    {/* Golden frames */}
                    <div className="absolute -inset-2 border-2 border-glamour-gold/30 rounded-[3rem] transform rotate-3 transition-transform duration-700 group-hover:rotate-6"></div>
                    <div className="absolute -inset-2 border-2 border-glamour-gold/30 rounded-[3rem] transform -rotate-3 transition-transform duration-700 group-hover:-rotate-6"></div>
                    
                    {/* Main Image Container */}
                    <div className="relative w-72 h-96 md:w-80 md:h-[30rem] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10 bg-gray-100">
                        {/* 
                            NOTA PER L'UTENTE:
                            Sostituisci l'URL qui sotto con il link alla tua foto o il percorso locale.
                            Attualmente uso un'immagine segnaposto affidabile.
                        */}
                        <img 
                            src={auroraImage} 
                            alt="La festeggiata" 
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-glamour-rose/20 to-transparent mix-blend-overlay"></div>
                        
                        {/* Floating Label */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-lg border border-pink-100">
                            <span className="font-serif font-bold text-glamour-rose whitespace-nowrap">La Protagonista</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Venue Info Section - Magazine Style */}
        <div className="w-full max-w-4xl relative z-10 mb-16">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl -z-10 shadow-xl border border-white/60"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-pink-200">
                
                {/* Ceremony */}
                <div className="p-8 flex flex-col items-center text-center group cursor-default">
                    <div className="mb-4 relative">
                        <div className="absolute inset-0 bg-pink-200 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <img 
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/c3/91/e6/chiesa-di-sant-angelo.jpg?w=1100&h=1100&s=1"
                            alt="Chiesa"
                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow text-pink-500 z-20">
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">La Cerimonia</h3>
                    <p className="font-bold text-gray-600 text-lg mb-1">Chiesa di Sant'Angelo a Lecore</p>
                    <div className="flex items-center text-gray-500 text-sm mt-2 font-light uppercase tracking-widest">
                         <MapPin className="w-3 h-3 mr-1" />
                         Signa / Campi Bisenzio
                    </div>
                    <p className="mt-4 text-glamour-rose font-serif italic text-lg">Ore 09:00</p>
                </div>

                {/* Reception */}
                <div className="p-8 flex flex-col items-center text-center group cursor-default">
                    <div className="mb-4 relative">
                        <div className="absolute inset-0 bg-yellow-200 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-white shadow-md relative z-10 overflow-hidden">
                             {/* Nuova foto del Resort */}
                             <img 
                                src={rugea}
                                alt="Resort La Rugea"
                                className="w-full h-full object-cover"
                            />
                        </div>
                         <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow text-yellow-500 z-20">
                            <Sparkles className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">Il Ricevimento</h3>
                    <p className="font-bold text-gray-600 text-lg mb-1">Resort La Rugea Le Spighe</p>
                    <div className="flex flex-col items-center text-gray-500 text-sm mt-1 font-light">
                        <span>Via della Rugea, 9-13</span>
                        <span>59100 Prato (PO)</span>
                    </div>
                    <p className="mt-4 text-yellow-600 font-serif italic text-lg">A seguire</p>
                </div>
            </div>
        </div>

        {/* AI Glamour Inspiration */}
        <InspirationCard />

        {/* Footer */}
        <footer className="mt-16 pb-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
                <Star className="w-4 h-4 text-glamour-gold" />
                <Star className="w-4 h-4 text-glamour-gold" />
                <Star className="w-4 h-4 text-glamour-gold" />
            </div>
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">31 Maggio 2026 • Save The Date</p>
        </footer>

      </main>
    </div>
  );
};

export default App;