import React from 'react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Hello, I'm</span><br />
                            <span className="text-white">Sakthivel S</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Developer specializing in Python and JavaScript.<br />
                            Building digital experiences that shape the future.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-medium hover:opacity-90 transition">
                                Contact Me
                            </a>
                            <a href="#projects" className="px-8 py-3 border border-cyan-400 rounded-full font-medium text-cyan-400 hover:bg-cyan-400 hover:bg-opacity-10 transition">
                                View Work
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative flex justify-center">
                        <div className="relative floating">
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-20"></div>
                            <div className="relative glass-card rounded-2xl p-2 w-64 h-64 md:w-80 md:h-80 overflow-hidden">
                                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f90cbe96-c551-4df1-a021-e4e7b05a6b9b.png" alt="Portrait of a professional developer" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


