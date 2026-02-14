
import React, { useState } from 'react';
import { T } from '../translations';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isNinerMode: boolean;
  onToggleNinerMode: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

type MenuPage = 'MAIN' | 'ABOUT' | 'SETTINGS';

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ 
  isOpen, 
  onClose, 
  isNinerMode, 
  onToggleNinerMode,
  isDarkMode,
  onToggleTheme
}) => {
  const [activePage, setActivePage] = useState<MenuPage>('MAIN');

  if (!isOpen) return null;

  const renderContent = () => {
    switch (activePage) {
      case 'ABOUT':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <header className="flex items-center gap-4 mb-6">
              <button onClick={() => { setActivePage('MAIN'); }} className="text-amber-500 text-2xl">←</button>
              <h2 className={`text-2xl font-cinzel ${isDarkMode ? 'text-amber-500' : 'text-amber-700'} font-bold`}>{T.menu.about.en}</h2>
            </header>
            
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="space-y-4 w-full">
                <h3 className={`text-4xl md:text-6xl font-cinzel ${isDarkMode ? 'text-white' : 'text-stone-900'} font-bold leading-tight tracking-widest text-center`}>
                  Sho ཤོ
                </h3>
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className={`text-sm md:text-lg font-cinzel uppercase tracking-[0.1em] ${isDarkMode ? 'text-amber-500' : 'text-amber-800'} font-bold`}>
                    Traditional Tibetan Dice Game
                  </p>
                  <p className={`text-lg md:text-2xl font-serif ${isDarkMode ? 'text-amber-600' : 'text-amber-900'}`}>
                    བོད་ཀྱི་སྲོལ་རྒྱུན་ཤོ་རྩེད།
                  </p>
                </div>
                
                <p className="text-stone-500 font-serif text-sm leading-relaxed max-w-xs mx-auto pt-4">
                  {T.menu.aboutDesc.bo}
                </p>
                <p className={`${isDarkMode ? 'text-stone-400' : 'text-stone-600'} text-xs leading-relaxed max-w-xs mx-auto italic`}>
                  {T.menu.aboutDesc.en}
                </p>
              </div>

              <div className={`w-full py-5 border-y ${isDarkMode ? 'border-stone-800' : 'border-stone-200'} space-y-4`}>
                <div className="space-y-1">
                  <p className={`${isDarkMode ? 'text-stone-400' : 'text-stone-600'} text-[10px] font-bold uppercase tracking-[0.2em]`}>
                    {T.menu.releaseNotes.en}
                  </p>
                  <p className="text-stone-500 text-[10px] font-serif">
                    {T.menu.releaseNotes.bo}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className={`${isDarkMode ? 'text-stone-300' : 'text-stone-700'} text-xs font-medium`}>{T.menu.developedBy.en}</p>
                  <p className="text-stone-500 text-[10px] font-serif">{T.menu.developedBy.bo}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-stone-400 text-[10px] font-bold tracking-widest">{T.menu.copyright.en}</p>
                  <p className="text-stone-500 text-[9px] font-serif">{T.menu.copyright.bo}</p>
                </div>
              </div>

              <div className="space-y-1 py-2">
                <a href="mailto:lungta.labs@gmail.com" className="text-amber-600 hover:text-amber-500 text-xs font-bold underline transition-colors block">
                  {T.menu.contact.en}
                </a>
                <p className="text-stone-500 text-[10px] font-serif">{T.menu.contact.bo}</p>
              </div>
              
              <div className={`mt-2 pt-4 w-full bg-amber-500/5 rounded-2xl p-4 border border-amber-500/10`}>
                <p className="text-stone-500 text-[11px] font-serif leading-relaxed italic">
                  "{T.menu.thanks.bo}"
                </p>
                <p className={`${isDarkMode ? 'text-stone-400' : 'text-stone-500'} text-[10px] leading-relaxed mt-2 uppercase tracking-tight font-medium opacity-80`}>
                  {T.menu.thanks.en}
                </p>
              </div>
            </div>
          </div>
        );
      case 'SETTINGS':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <header className="flex items-center gap-4 mb-8">
              <button onClick={() => setActivePage('MAIN')} className="text-amber-500 text-2xl">←</button>
              <h2 className={`text-2xl font-cinzel ${isDarkMode ? 'text-amber-500' : 'text-amber-700'} font-bold`}>{T.menu.settings.en} <span className="font-serif ml-2">{T.menu.settings.bo}</span></h2>
            </header>
            <div className="space-y-6">
              <section className={`${isDarkMode ? 'bg-stone-800/40 border-stone-700' : 'bg-stone-100 border-stone-200'} p-5 rounded-2xl border`}>
                <h3 className="text-amber-600 font-cinzel text-xs uppercase tracking-widest font-bold mb-4">
                  {T.menu.themes.en} <span className="font-serif ml-2">{T.menu.themes.bo}</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                   <button 
                     onClick={() => { if (isDarkMode) onToggleTheme(); }}
                     className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${!isDarkMode ? 'bg-amber-600/20 border-amber-500 text-amber-600' : 'bg-black/20 border-stone-800 text-stone-500 hover:border-stone-600'}`}
                   >
                     <span className="text-xs font-bold uppercase tracking-widest">{T.menu.lightMode.en}</span>
                     <span className="text-[10px] font-serif">{T.menu.lightMode.bo}</span>
                   </button>
                   <button 
                     onClick={() => { if (!isDarkMode) onToggleTheme(); }}
                     className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${isDarkMode ? 'bg-amber-600/20 border-amber-500 text-amber-500' : 'bg-black/20 border-stone-200 text-stone-400 hover:border-stone-300'}`}
                   >
                     <span className="text-xs font-bold uppercase tracking-widest">{T.menu.darkMode.en}</span>
                     <span className="text-[10px] font-serif">{T.menu.darkMode.bo}</span>
                   </button>
                </div>
              </section>

              <section className={`${isDarkMode ? 'bg-stone-800/40 border-stone-700' : 'bg-stone-100 border-stone-200'} p-5 rounded-2xl border`}>
                <h3 className="text-amber-600 font-cinzel text-xs uppercase tracking-widest font-bold mb-4">
                  {T.menu.gameVariant.en} <span className="font-serif ml-2">{T.menu.gameVariant.bo}</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                   <button 
                     onClick={() => { if (!isNinerMode) onToggleNinerMode(); }}
                     className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${isNinerMode ? 'bg-amber-600/20 border-amber-500 text-amber-500' : 'bg-black/20 border-stone-800 text-stone-500 hover:border-stone-600'}`}
                   >
                     <span className="text-xs font-bold uppercase tracking-widest">{T.menu.niner.en}</span>
                     <span className="text-[10px] font-serif">{T.menu.niner.bo}</span>
                   </button>
                   <button 
                     onClick={() => { if (isNinerMode) onToggleNinerMode(); }}
                     className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${!isNinerMode ? 'bg-amber-600/20 border-amber-500 text-amber-600' : 'bg-black/20 border-stone-800 text-stone-500 hover:border-stone-600'}`}
                   >
                     <span className="text-xs font-bold uppercase tracking-widest">{T.menu.noNiner.en}</span>
                     <span className="text-[10px] font-serif">{T.menu.noNiner.bo}</span>
                   </button>
                </div>
              </section>

              <div className={`text-center ${isDarkMode ? 'text-stone-700' : 'text-stone-400'} text-[10px] uppercase font-bold tracking-[0.2em] mt-8`}>
                {T.menu.version.en} — LUNGTA LABS
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
            <h2 className={`text-3xl font-cinzel ${isDarkMode ? 'text-amber-500' : 'text-amber-700'} font-bold mb-10 text-center tracking-widest`}>{T.common.menu.en} <span className="font-serif ml-4">{T.common.menu.bo}</span></h2>
            <button 
              onClick={() => setActivePage('ABOUT')}
              className={`w-full py-5 ${isDarkMode ? 'bg-stone-800/50 hover:bg-stone-800 border-stone-700' : 'bg-stone-100 hover:bg-stone-200 border-stone-200'} border hover:border-amber-600 rounded-2xl flex flex-col items-center justify-center transition-all active:scale-95 group`}
            >
              <span className={`font-cinzel text-lg ${isDarkMode ? 'text-stone-200 group-hover:text-amber-400' : 'text-stone-700 group-hover:text-amber-600'} font-bold tracking-widest`}>{T.menu.about.en}</span>
              <span className="font-serif text-sm text-stone-500 mt-1">{T.menu.about.bo}</span>
            </button>
            <button 
              onClick={() => setActivePage('SETTINGS')}
              className={`w-full py-5 ${isDarkMode ? 'bg-stone-800/50 hover:bg-stone-800 border-stone-700' : 'bg-stone-100 hover:bg-stone-200 border-stone-200'} border hover:border-amber-600 rounded-2xl flex flex-col items-center justify-center transition-all active:scale-95 group`}
            >
              <span className={`font-cinzel text-lg ${isDarkMode ? 'text-stone-200 group-hover:text-amber-400' : 'text-stone-700 group-hover:text-amber-600'} font-bold tracking-widest`}>{T.menu.settings.en}</span>
              <span className="font-serif text-sm text-stone-500 mt-1">{T.menu.settings.bo}</span>
            </button>
            <div className="pt-8">
              <button 
                onClick={onClose}
                className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white font-cinzel font-bold rounded-2xl shadow-lg transition-all active:scale-95"
              >
                {T.common.close.en} <span className="font-serif ml-2">{T.common.close.bo}</span>
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose}>
      <div 
        className={`${isDarkMode ? 'bg-stone-900 border-amber-600/30' : 'bg-stone-50 border-amber-800/20'} border-2 p-8 md:p-12 rounded-[3.5rem] w-full max-w-md shadow-[0_0_100px_rgba(0,0,0,0.9)] relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className={`absolute top-8 right-8 ${isDarkMode ? 'text-stone-500 hover:text-white' : 'text-stone-400 hover:text-stone-900'} text-2xl transition-colors`}
        >
          ×
        </button>
        {renderContent()}
      </div>
    </div>
  );
};
