import React, { useState } from 'react';
import { X } from 'lucide-react';

const AuthModal = ({ onClose, onLogin, onSignUp }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (isLogin) {
            // A lógica do Firebase para Login irá aqui
            console.log('Tentando logar com:', email, password);
            onLogin(email, password);
        } else {
            // A lógica do Firebase para Registro irá aqui
            console.log('Tentando registrar com:', email, password);
            onSignUp(email, password);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-parchment-dark border-2 border-amber-800/50 rounded-lg shadow-2xl w-full max-w-md text-white relative overflow-hidden">
                <button onClick={onClose} className="absolute top-4 right-4 text-amber-100/70 hover:text-white transition-colors z-10"><X size={24} /></button>
                <div className="p-8">
                    <h2 className="text-3xl font-cinzel font-bold text-amber-300 mb-6 text-center">
                        {isLogin ? 'Entrar no Reino' : 'Forjar uma Nova Conta'}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-amber-100/80 mb-1" htmlFor="email">Email do Aventureiro</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/20 border border-amber-800/20 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-amber-100/80 mb-1" htmlFor="password">Senha Secreta</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/20 border border-amber-800/20 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                        </div>
                        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                        <button type="submit" className="w-full bg-amber-600 text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-amber-700 transition-all duration-200 font-cinzel">
                            {isLogin ? 'Entrar' : 'Registrar'}
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <button onClick={() => setIsLogin(!isLogin)} className="text-sm text-amber-100/70 hover:text-white underline">
                            {isLogin ? 'Não tem uma conta? Forje uma aqui!' : 'Já é um aventureiro? Entre aqui!'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
