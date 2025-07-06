import React from 'react';
import { Star } from 'lucide-react';

const LevelUpModal = ({ newLevel, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
        <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border-2 border-[#F0A500] rounded-lg shadow-2xl w-full max-w-md text-white text-center p-8 relative overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-[#F0A500]/30 to-transparent animate-spin-slow"></div>
            <Star className="w-24 h-24 text-[#F0A500] mx-auto mb-4 animate-pulse-fast" />
            <h2 className="text-4xl font-bold text-white mb-2 font-cinzel">LEVEL UP!</h2>
            <p className="text-6xl font-bold text-[#F0A500] mb-4 drop-shadow-lg">{newLevel}</p>
            <p className="text-gray-300 mb-6">Your power grows, adventurer. New challenges await!</p>
            <button onClick={onClose} className="bg-[#F0A500] text-[#1A1A2E] font-bold py-2 px-8 rounded-md shadow-md shadow-[#F0A500]/20 hover:bg-[#F0A500]/80 transition-all duration-200 font-cinzel">Continue</button>
        </div>
    </div>
);
export default LevelUpModal;