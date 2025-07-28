import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-lg">
                            <div className="glass-card p-4 rounded-xl">
                                <div id="terminal" className="p-4 rounded-lg h-64 overflow-y-auto">
                                    <div className="terminal-line">
                                        <span className="text-green-400"> </span>
                                        <span className="text-white">about_me.run()</span>
                                    </div>
                                    <div className="terminal-line mt-2">
                                        <span className="text-cyan-400">Name:</span>
                                        <span className="text-white"> SAKTHIVEL S</span>
                                    </div>
                                    <div className="terminal-line">
                                        <span className="text-cyan-400">Location:</span>
                                        <span className="text-white"> INDIA, TAMIL NADU</span>
                                    </div>
                                    <div className="terminal-line">
                                        <span className="text-cyan-400">Experience:</span>
                                        <span className="text-white"> Fresher</span>
                                    </div>
                                    <div className="terminal-line">
                                        <span className="text-cyan-400">Specialties:</span>
                                        <span className="text-white"> Python, AI/ML, Learning JavaScript, Basics in Power BI, Data Analytics</span>
                                    </div>
                                    <div className="terminal-line mt-2">
                                        <span className="text-purple-400">Title:</span>
                                        <span className="text-white"> The Future of Web Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text font-orbitron">About Me</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I'm an entry-level software engineer with expertise in building scalable web applications using Python and JavaScript. My journey in tech started when I was 12 years old, and since then I've been obsessed with creating innovative solutions that push boundaries.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            My approach combines cutting-edge technology with user-centered design to create products that are both powerful and intuitive. I thrive in environments where I can solve complex problems and bring ideas to life.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2 bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full">
                                <i className="fas fa-rocket text-cyan-400"></i>
                                <span className="text-sm">Innovative Solutions</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full">
                                <i className="fas fa-code text-purple-400"></i>
                                <span className="text-sm">Clean Code</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full">
                                <i className="fas fa-project-diagram text-green-400"></i>
                                <span className="text-sm">Scalable Architecture</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
