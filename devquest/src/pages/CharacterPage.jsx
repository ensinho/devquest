import React from 'react';

const CharacterPage = ({ user, userClass, avatars, selectedAvatar, onAvatarSelect, onLogout }) => (
    <div className="mt-8 p-6 md:p-10 bg-parchment-dark/50 backdrop-blur-sm border-2 border-amber-800/30 rounded-lg shadow-lg shadow-black/30 animate-fade-in">
        <h2 className="text-3xl font-cinzel font-bold text-amber-300 mb-6">Hero's Quarters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
                <h3 className="font-cinzel text-xl text-amber-400 mb-4">Choose Your Avatar</h3>
                <div className="grid grid-cols-3 gap-4">
                    {avatars.map(avatar => (
                        <button key={avatar.id} onClick={() => onAvatarSelect(avatar.url)} className={`rounded-full border-4 transition-all ${selectedAvatar === avatar.url ? 'border-amber-400' : 'border-transparent hover:border-amber-400/50'}`}>
                            <img src={avatar.url} alt={`Avatar ${avatar.id}`} className="w-full h-full rounded-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:col-span-2">
                 <h3 className="font-cinzel text-xl text-amber-400 mb-4">Account Details</h3>
                 <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-amber-100/80 mb-1">Username</label>
                        <input type="text" disabled value={user.name} className="w-full bg-black/20 border border-amber-800/20 rounded-md p-2 text-gray-400 cursor-not-allowed" />
                    </div>
                     <div>
                        <label className="block text-sm font-bold text-amber-100/80 mb-1">Class</label>
                        <input type="text" disabled value={userClass} className="w-full bg-black/20 border border-amber-800/20 rounded-md p-2 text-gray-400 cursor-not-allowed" />
                    </div>
                     <div>
                        <label className="block text-sm font-bold text-amber-100/80 mb-1">Password</label>
                        <input type="password" disabled value="********" className="w-full bg-black/20 border border-amber-800/20 rounded-md p-2 text-gray-400 cursor-not-allowed" />
                    </div>
                 </div>
                 <button onClick={onLogout} className="mt-8 bg-red-700 text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-red-800 transition-all duration-200 font-cinzel">
                    Logout
                 </button>
            </div>
        </div>
    </div>
);
export default CharacterPage;
