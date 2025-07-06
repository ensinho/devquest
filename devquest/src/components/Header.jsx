import React from 'react';
import { Shield, LayoutGrid, BookCopy, User as UserIcon } from 'lucide-react';

const Header = ({ userAvatar, onNavClick, activePage }) => {
    const navItems = [
        { id: 'quests', label: 'Quests', icon: <LayoutGrid /> },
        { id: 'guides', label: 'Guides', icon: <BookCopy /> },
        { id: 'character', label: 'Character', icon: <UserIcon /> },
    ];
    return (
        <header className="bg-parchment-dark/50 backdrop-blur-sm border-b-2 border-amber-800/30 p-4 rounded-lg flex justify-between items-center shadow-lg shadow-black/30 sticky top-4 z-40">
            <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-amber-400" />
                <h1 className="text-xl font-bold text-white font-cinzel hidden md:block">DevQuest</h1>
            </div>
            <nav className="flex items-center gap-2 md:gap-4 bg-black/20 p-1 rounded-lg">
                {navItems.map(item => (
                    <button key={item.id} onClick={() => onNavClick(item.id)} className={`flex items-center gap-2 py-2 px-3 md:px-4 rounded-md text-sm font-bold transition-colors ${activePage === item.id ? 'bg-amber-600 text-white' : 'text-amber-100/70 hover:bg-black/30'}`}>
                        {item.icon}
                        <span className="hidden md:block">{item.label}</span>
                    </button>
                ))}
            </nav>
            <div className="w-12 h-12 rounded-full border-2 border-amber-500 p-0.5">
                <img src={userAvatar} alt="User Avatar" className="w-full h-full rounded-full object-cover" />
            </div>
        </header>
    );
};

export default Header;
