import React from 'react';
import { ArrowUpCircle } from 'lucide-react';

const MascotEvolutionModal = ({ newStage, onClose, mascotGifs }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
        <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border-2 border-purple-400 rounded-lg shadow-2xl w-full max-w-md text-white text-center p-8 relative overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-spin-slow"></div>
            <ArrowUpCircle className="w-24 h-24 text-purple-400 mx-auto mb-4 animate-pulse-fast" />
            <h2 className="text-4xl font-bold text-white mb-2 font-cinzel">EVOLUTION!</h2>
            <img src={mascotGifs[newStage]} alt="Evolved Mascot" className="w-40 h-40 mx-auto my-4 drop-shadow-xl" />
            <p className="text-gray-300 mb-6">Your companion has evolved into a new, more powerful form!</p>
            <button onClick={onClose} className="bg-purple-500 text-white font-bold py-2 px-8 rounded-md shadow-md shadow-purple-800/20 hover:bg-purple-600 transition-all duration-200 font-cinzel">Awesome!</button>
        </div>
    </div>
);
export default MascotEvolutionModal;
