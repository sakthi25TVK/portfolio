import React from 'react';

export default function Footer () {
    return (
        <footer className="py-6 bg-gray-900">
            <div className="container mx-auto text-center">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Sakthivel S. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};


