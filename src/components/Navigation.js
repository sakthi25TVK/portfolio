import React from 'react';

export default function Navigation () {
    return (
        <nav className="fixed w-full z-50 py-4 px-6 lg:px-12 bg-opacity-90 backdrop-blur-sm">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <a href="#" className="text-2xl font-bold gradient-text font-orbitron">PORTFOLIO</a>
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="text-white hover:text-cyan-300 transition">Home</a>
                    <a href="#about" className="text-white hover:text-cyan-300 transition">About</a>
                    <a href="#projects" className="text-white hover:text-cyan-300 transition">Projects</a>
                    <a href="#skills" className="text-white hover:text-cyan-300 transition">Skills</a>
                    <a href="#contact" className="text-white hover:text-cyan-300 transition">Contact</a>
                </div>
                <button className="md:hidden text-white">
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </nav>
    );
};

