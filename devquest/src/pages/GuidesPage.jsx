import React from 'react';

const GuidesPage = ({ onOpenGuide, guides }) => (
    <div className="mt-8 p-6 md:p-10 bg-parchment-dark/50 backdrop-blur-sm border-2 border-amber-800/30 rounded-lg shadow-lg shadow-black/30 animate-fade-in">
        <h2 className="text-3xl font-cinzel font-bold text-amber-300 mb-6">The Arcane Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map(guide => (
                <button key={guide.id} onClick={() => onOpenGuide(guide)} className="bg-black/20 p-6 rounded-lg border border-amber-800/20 text-left hover:bg-black/40 hover:border-amber-800/50 transition-all group">
                    <h3 className="font-cinzel text-xl text-amber-400 group-hover:text-amber-300 transition-colors">{guide.title}</h3>
                    <p className="text-amber-100/80 mt-2 text-sm">{guide.description}</p>
                </button>
            ))}
        </div>
    </div>
);
export default GuidesPage;
