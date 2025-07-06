import React from 'react';

const Mascot = ({ stage, mascotGifs }) => (
    <div className="absolute bottom-4 right-4 hidden lg:block group animate-float">
        <img 
            src={mascotGifs[stage]} 
            alt="RPG Mascot" 
            className="w-44 h-44 object-contain drop-shadow-lg group-hover:animate-wing-flap"
            onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/128x128/000000/FFFFFF?text=Mascot+${stage}`; }}
        />
        <div className="absolute bottom-full right-0 mb-2 w-48 bg-[#16213E] p-3 rounded-lg border-2 border-[#E94560]/50 text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>Keep up the great work, adventurer! Your journey to mastery is impressive.</p>
            <div className="absolute bottom-0 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#16213E] transform translate-y-full"></div>
        </div>
    </div>
);

export default Mascot;
