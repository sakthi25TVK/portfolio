import React from 'react';

export default function Skills () {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-orbitron">My Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Technologies I work with to build innovative solutions</p>
                </div>

                <div className="glass-card p-8 rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="mb-8">
                                <div className="flex justify-between mb-1">
                                    <h3 className="font-medium">Python</h3>
                                    <span className="text-cyan-400">70%</span>
                                </div>
                                <div className="skill-bar rounded-full">
                                    <div className="skill-progress rounded-full" style={{ width: '95%' }}></div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between mb-1">
                                    <h3 className="font-medium">Data Analytics</h3>
                                    <span className="text-cyan-400">75%</span>
                                </div>
                                <div className="skill-bar rounded-full">
                                    <div className="skill-progress rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between mb-1">
                                    <h3 className="font-medium">Django/Flask</h3>
                                    <span className="text-cyan-400">88%</span>
                                </div>
                                <div className="skill-bar rounded-full">
                                    <div className="skill-progress rounded-full" style={{ width: '88%' }}></div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between mb-1">
                                    <h3 className="font-medium">Power BI</h3>
                                    <span className="text-cyan-400">70%</span>
                                </div>
                                <div className="skill-bar rounded-full">
                                    <div className="skill-progress rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="mb-8">
                                <div className="flex justify-between mb-1">
                                    <h3 className="font-medium">Machine Learning</h3>
                                    <span className="text-cyan-400">50%</span>
                                </div>
                                <div className="skill-bar rounded-full">
                                    <div className="skill-progress rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between mb-1">
                                    <h3 className="font-medium">DevOps & Cloud</h3>
                                    <span className="text-cyan-400">75%</span>
                                </div>
                                <div className="skill-bar rounded-full">
                                    <div className="skill-progress rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

