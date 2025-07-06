import React, { useState } from 'react';
import { X, Skull } from 'lucide-react';

const ChallengeModal = ({ quest, onClose, onComplete }) => {
    const [code, setCode] = useState(quest.starterCode);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleCheckCode = () => {
        setError('');
        try {
            if (quest.solution(code)) {
                setSuccess(true);
                setTimeout(() => { onComplete(quest.id); onClose(); }, 1500);
            } else { setError("That's not quite right. Keep trying!"); }
        } catch { setError("There's an error in your code. Check the syntax!"); }
    };

    const isBoss = quest.isBossFight;
    const modalClass = isBoss ? 'border-red-500 bg-boss-lair' : 'border-amber-800/50 bg-parchment-dark';
    const buttonClass = isBoss ? 'bg-red-600 hover:bg-red-700 shadow-red-900/20' : 'bg-amber-600 hover:bg-amber-700 shadow-amber-800/20';

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className={`border-2 rounded-lg shadow-2xl w-full max-w-2xl text-white relative overflow-hidden transition-all duration-500 ${modalClass} ${success ? 'border-green-400' : ''}`}>
                {success && <div className="absolute inset-0 bg-green-500/20 animate-pulse-fast"></div>}
                {isBoss && <div className="absolute inset-0 bg-red-900/50 animate-pulse-slow"></div>}
                <button onClick={onClose} className="absolute top-4 right-4 text-amber-100/70 hover:text-white transition-colors z-10"><X size={24} /></button>
                <div className="p-6 md:p-8 relative">
                    <h2 className={`text-2xl md:text-3xl font-cinzel font-bold mb-2 ${isBoss ? 'text-red-400' : 'text-amber-300'}`}>
                        {isBoss && <Skull className="inline-block w-8 h-8 mr-2" />} {quest.title}
                    </h2>
                    <p className={`mb-4 ${isBoss ? 'text-red-200/80' : 'text-amber-100/80'}`}>{quest.challenge}</p>
                    <div className="bg-black/30 rounded-md p-1">
                        <textarea value={code} onChange={(e) => setCode(e.target.value)} className="w-full h-48 bg-transparent text-white font-mono text-sm p-4 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#F0A500]" spellCheck="false" />
                    </div>
                    <div className="mt-4 h-6">
                        {error && <p className="text-red-400 text-sm animate-shake">{error}</p>}
                        {success && <p className="text-green-400 text-lg font-bold animate-bounce">VICTORY!</p>}
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button onClick={handleCheckCode} className={`text-white font-bold py-2 px-6 rounded-md shadow-md transition-all duration-200 font-cinzel ${buttonClass}`}>
                            {isBoss ? "Vanquish" : "Check Code"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ChallengeModal;
