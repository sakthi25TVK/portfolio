import React from 'react';

export default function Projects  () {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-orbitron">My Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work showcasing my skills in Python and JavaScript</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="project-card glass-card p-6 rounded-xl">
                        <div className="relative rounded-lg overflow-hidden mb-4 h-48">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/51b0882c-b8da-437f-8f5a-8e3661231428.png" alt="AI Analytics Dashboard" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
                        <p className="text-gray-300 mb-4">A machine learning powered analytics platform that provides real-time insights.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-cyan-900 bg-opacity-30 text-cyan-400 text-xs rounded">Python</span>
                            <span className="px-2 py-1 bg-purple-900 bg-opacity-30 text-purple-400 text-xs rounded">TensorFlow</span>
                            <span className="px-2 py-1 bg-yellow-900 bg-opacity-30 text-yellow-400 text-xs rounded">React</span>
                        </div>
                        <div className="flex space-x-3">
                            <a href="#" className="text-gray-400 hover:text-cyan-400">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-purple-400">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card glass-card p-6 rounded-xl">
                        <div className="relative rounded-lg overflow-hidden mb-4 h-48">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7304c83c-0612-45ab-a470-e3612c2303da.png" alt="Blockchain Explorer" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Blockchain Explorer</h3>
                        <p className="text-gray-300 mb-4">Explore blockchain transactions and network statistics.</p>
                        <div className="flex space-x-3">
                            <a href="#" className="text-gray-400 hover:text-cyan-400">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-purple-400">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="project-card glass-card p-6 rounded-xl">
                        <div className="relative rounded-lg overflow-hidden mb-4 h-48">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5125a32b-b18f-4153-9c0b-bdbdecdf1c3d.png" alt="Insurance Fraud Detection" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Insurance Fraud Detection</h3>
                        <p className="text-gray-300 mb-4">An algorithmic fraud prediction system that executes trades based on machine learning predictions.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-cyan-900 bg-opacity-30 text-cyan-400 text-xs rounded">Python</span>
                            <span className="px-2 py-1 bg-purple-900 bg-opacity-30 text-purple-400 text-xs rounded">Pandas</span>
                            <span className="px-2 py-1 bg-yellow-900 bg-opacity-30 text-yellow-400 text-xs rounded">FastAPI</span>
                        </div>
                        <div className="flex space-x-3">
                            <a href="#" className="text-gray-400 hover:text-cyan-400">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-purple-400">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


