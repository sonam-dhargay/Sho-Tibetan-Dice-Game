import React from 'react';
import { T } from '../translations';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  isNinerMode: boolean;
  onToggleNinerMode: () => void;
  isDarkMode: boolean;
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose, isNinerMode, onToggleNinerMode, isDarkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className={`${isDarkMode ? 'bg-stone-900 border-amber-700/50' : 'bg-stone-50 border-amber-800/20'} border rounded-[2.5rem] w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl relative no-scrollbar`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`sticky top-0 ${isDarkMode ? 'bg-stone-900/95 border-amber-900/30' : 'bg-stone-50/95 border-amber-700/20'} backdrop-blur-md border-b p-6 flex justify-between items-center z-10`}>
          <div className="flex flex-col">
            <h2 className={`text-2xl md:text-3xl font-cinzel ${isDarkMode ? 'text-amber-500' : 'text-amber-700'} font-bold leading-none`}>
              {T.rules.title.en} <span className="font-serif">{T.rules.title.bo}</span>
            </h2>
          </div>
          <button onClick={onClose} className={`${isDarkMode ? 'text-stone-400 hover:text-white' : 'text-stone-500 hover:text-stone-900'} text-3xl font-bold transition-colors`}>×</button>
        </div>

        <div className={`p-6 md:p-8 space-y-10 font-sans ${isDarkMode ? 'text-stone-300' : 'text-stone-700'} leading-relaxed text-sm md:text-base`}>
          
          <section className="space-y-4">
            <h3 className={`text-2xl font-cinzel ${isDarkMode ? 'text-amber-500' : 'text-amber-700'} font-bold`}>{T.rules.aboutTitle.en}</h3>
            <div className="space-y-2">
              <p>{T.rules.aboutDesc1.en}</p>
              <p className="font-serif text-amber-600/80">{T.rules.aboutDesc1.bo}</p>
            </div>
            <div className="space-y-2">
              <p>{T.rules.aboutDesc2.en}</p>
              <p className="font-serif text-amber-600/80">{T.rules.aboutDesc2.bo}</p>
            </div>
          </section>

          <hr className={isDarkMode ? 'border-amber-900/30' : 'border-amber-700/20'} />

          <section className="space-y-4">
            <h3 className={`text-xl font-cinzel ${isDarkMode ? 'text-amber-400' : 'text-amber-800'} font-bold border-b ${isDarkMode ? 'border-amber-600/30' : 'border-amber-700/20'} pb-2`}>
              {T.rules.equipmentTitle.en} <span className="font-serif">{T.rules.equipmentTitle.bo}</span>
            </h3>
            <div className="space-y-3">
              <div>
                <p>{T.rules.equipmentDesc1.en}</p>
                <p className="font-serif text-[13px] text-stone-500 mt-1">{T.rules.equipmentDesc1.bo}</p>
              </div>
              <div>
                <p>{T.rules.equipmentDesc2.en}</p>
                <p className="font-serif text-[13px] text-stone-500 mt-1">{T.rules.equipmentDesc2.bo}</p>
              </div>
              <div>
                <p>{T.rules.equipmentDesc3.en}</p>
                <p className="font-serif text-[13px] text-stone-500 mt-1">{T.rules.equipmentDesc3.bo}</p>
              </div>
            </div>
          </section>

          <section className={`${isDarkMode ? 'bg-amber-900/10 border-amber-600/20' : 'bg-amber-100 border-amber-200'} p-6 rounded-2xl border space-y-4`}>
            <h3 className={`text-xl font-cinzel ${isDarkMode ? 'text-amber-400' : 'text-amber-800'} font-bold border-b ${isDarkMode ? 'border-amber-600/30' : 'border-amber-700/20'} pb-2`}>
              {T.rules.basicTitle.en} <span className="font-serif">{T.rules.basicTitle.bo}</span>
            </h3>
            <div className="space-y-3">
              <p>{T.rules.basicDesc1.en}</p>
              <p>{T.rules.basicDesc2.en}</p>
              <p>{T.rules.basicDesc3.en}</p>
              <p>{T.rules.basicDesc4.en}</p>
              <p className="font-bold text-red-600">{T.rules.basicDesc5.en}</p>
              <div className="mt-2 pt-2 border-t border-amber-600/20">
                <p className="font-serif text-[14px] leading-relaxed text-amber-700">
                  {T.rules.basicDesc1.bo} {T.rules.basicDesc5.bo}
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className={`text-xl font-cinzel ${isDarkMode ? 'text-amber-400' : 'text-amber-800'} font-bold border-b ${isDarkMode ? 'border-amber-600/30' : 'border-amber-700/20'} pb-2`}>
              {T.rules.movingTitle.en} <span className="font-serif">{T.rules.movingTitle.bo}</span>
            </h3>
            <p>{T.rules.movingDesc1.en}</p>
            <p>{T.rules.movingDesc2.en}</p>
            <p className={`italic ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>{T.rules.movingNote.en}</p>
            <p className="font-serif text-amber-700/70">{T.rules.movingDesc2.bo}</p>
          </section>

          <section className="space-y-4">
            <h3 className={`text-xl font-cinzel ${isDarkMode ? 'text-amber-400' : 'text-amber-800'} font-bold border-b ${isDarkMode ? 'border-amber-600/30' : 'border-amber-700/20'} pb-2`}>
              {T.rules.outcomesTitle.en} <span className="font-serif">{T.rules.outcomesTitle.bo}</span>
            </h3>
            <ol className="list-decimal list-inside space-y-4 ml-2">
              <li><span className={`${isDarkMode ? 'text-amber-200' : 'text-amber-700'} font-bold`}>{T.rules.outcomeVacant.en}</span></li>
              <li><span className={`${isDarkMode ? 'text-amber-400' : 'text-amber-800'} font-bold`}>{T.rules.outcomeSame.en}</span></li>
              <li><span className="text-red-500 font-bold">{T.rules.outcomeOpponentKill.en}</span></li>
              <li><span className="text-stone-500 font-bold">{T.rules.outcomeOpponentForbidden.en}</span></li>
            </ol>
            <div className="bg-stone-500/5 p-4 rounded-xl">
               <p className="font-serif text-sm text-stone-500 leading-relaxed">
                 ༡. {T.rules.outcomeVacant.bo} <br/>
                 ༢. {T.rules.outcomeSame.bo} <br/>
                 ༣. {T.rules.outcomeOpponentKill.bo} <br/>
                 ༤. {T.rules.outcomeOpponentForbidden.bo}
               </p>
            </div>
            <div className={`${isDarkMode ? 'bg-amber-600/10 border-amber-500/30' : 'bg-amber-50 border-amber-200'} p-4 rounded-xl border`}>
              <p className="font-bold text-amber-600">{T.rules.bonusRollNote.en}</p>
              <p className="font-serif text-sm text-amber-700 mt-1">{T.rules.bonusRollNote.bo}</p>
            </div>
          </section>

          <section className={`${isDarkMode ? 'bg-amber-950/20 border-amber-900/30' : 'bg-amber-50 border-amber-200'} p-6 rounded-2xl border space-y-4`}>
            <h3 className={`text-xl font-cinzel ${isDarkMode ? 'text-amber-400' : 'text-amber-800'} font-bold border-b ${isDarkMode ? 'border-amber-600/30' : 'border-amber-700/20'} pb-2`}>
              {T.rules.paraTitle.en} <span className="font-serif">{T.rules.paraTitle.bo}</span>
            </h3>
            <p>{T.rules.paraDesc.en}</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>{T.rules.paraRule1.en}</li>
              <li>{T.rules.paraRule2.en}</li>
              <li><strong>{T.rules.paraRuleOpening.en}</strong></li>
            </ul>
            <div className="font-serif text-amber-700/80 text-sm space-y-1">
              <p>{T.rules.paraRule1.bo}</p>
              <p>{T.rules.paraRuleOpening.bo}</p>
            </div>
            
            <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-amber-900/40' : 'border-amber-700/20'}`}>
              <h4 className="font-bold text-amber-600 mb-2 uppercase text-xs tracking-widest">{T.rules.paraSequenceHeader.en}</h4>
              <p className="text-sm">{T.rules.paraSequenceStandard.en}</p>
              <p className="font-serif text-xs text-stone-500 mt-1">{T.rules.paraSequenceStandard.bo}</p>
            </div>

            <div className={`mt-4 p-4 rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-white/60'} text-xs md:text-sm space-y-3`}>
              <h4 className="font-bold text-amber-500 uppercase tracking-tighter">{T.rules.paraExampleTitle.en} <span className="font-serif ml-1">{T.rules.paraExampleTitle.bo}</span></h4>
              <div className="space-y-2 font-mono">
                <p>{T.rules.paraExampleStep1.en}</p>
                <p>{T.rules.paraExampleStep2.en}</p>
                <p className="text-stone-500 italic mt-2">{T.rules.paraExampleNote.en}</p>
              </div>
            </div>
          </section>

          <section className={`${isDarkMode ? 'bg-stone-800/50 border-stone-700' : 'bg-white border-stone-200'} p-6 rounded-2xl border flex flex-col md:flex-row justify-between items-center gap-4`}>
              <div className="text-center md:text-left">
                  <h4 className="font-bold text-amber-600 mb-2">{T.rules.variantTitle.en} <span className="font-serif ml-1">{T.rules.variantTitle.bo}</span></h4>
                  <p className={`text-sm ${isDarkMode ? 'text-stone-400' : 'text-stone-500'} italic`}>
                    {isNinerMode ? T.rules.ninerMode.en : T.rules.noNinerMode.en}: {isNinerMode ? T.rules.ninerDesc.en : T.rules.noNinerDesc.en}
                  </p>
              </div>
              <button onClick={onToggleNinerMode} className="bg-amber-700 hover:bg-amber-600 px-8 py-3 rounded-xl font-bold text-white text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg">
                {T.rules.switchVariantBtn.en}
              </button>
          </section>
        </div>

        <div className={`p-8 text-center ${isDarkMode ? 'bg-stone-900/80 border-stone-800' : 'bg-stone-100/80 border-stone-200'} backdrop-blur-sm border-t`}>
          <button onClick={onClose} className="w-full md:w-auto px-12 py-4 bg-amber-700 hover:bg-amber-600 text-white font-cinzel font-bold rounded-xl uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95">
            {T.common.close.en} <span className="font-serif ml-2">{T.common.close.bo}</span>
          </button>
        </div>
      </div>
    </div>
  );
};