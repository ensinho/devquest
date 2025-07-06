import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const GuideModal = ({ guide, onClose }) => {
    const [isOpening, setIsOpening] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsOpening(false), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpening(true);
        setTimeout(onClose, 500);
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in" onClick={handleClose}>
            <div className={`bg-parchment-dark border-2 border-amber-800/50 rounded-lg shadow-2xl w-full max-w-3xl text-white relative overflow-hidden transition-transform duration-500 ease-in-out ${isOpening ? 'transform scale-y-0' : 'transform scale-y-100'}`} style={{ transformOrigin: 'top' }} onClick={(e) => e.stopPropagation()}>
                <button onClick={handleClose} className="absolute top-4 right-4 text-amber-100/70 hover:text-white transition-colors z-10"><X size={24} /></button>
                <div className="p-8 max-h-[80vh] overflow-y-auto">
                    <h2 className="text-3xl font-cinzel font-bold text-amber-300 mb-6 text-center">{guide.title}</h2>
                    <div className="space-y-4 text-amber-100/90">
                        {guide.content.map((item, index) => {
                            if (item.type === 'h3') return <h3 key={index} className="font-cinzel text-xl text-amber-400 mt-6">{item.text}</h3>;
                            if (item.type === 'p') return <p key={index} className="text-base leading-relaxed">{item.text}</p>;
                            if (item.type === 'code') return <pre key={index} className="bg-black/30 p-4 rounded-md text-sm font-mono overflow-x-auto"><code>{item.text}</code></pre>;
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GuideModal;
