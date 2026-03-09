import React from 'react';
import { Map } from 'lucide-react';

const Coverage = () => {
    return (
        <div className="container py-20 min-h-[70vh] flex flex-col items-center justify-center relative">
            <div className="bg-glow top-0"></div>

            <div className="text-center z-10 mb-12 animate-fade-in">
                <h1 className="title-xl font-outfit text-white mb-4">
                    Nationwide <span className="text-secondary">5G Coverage</span>
                </h1>
                <p className="subtitle mx-auto">
                    Built on America's largest and most reliable network.
                </p>
            </div>

            <div className="w-full max-w-4xl glass-card relative h-[400px] flex items-center justify-center animate-fade-in delay-200 overflow-hidden">
                {/* Mock Map Background Visualization */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, #4F46E5 2px, transparent 2px)',
                        backgroundSize: '30px 30px'
                    }}>
                </div>

                {/* Mock Coverage Nodes */}
                <div className="absolute top-[30%] left-[20%] w-32 h-32 bg-primary/40 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-[60%] right-[30%] w-48 h-48 bg-secondary/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-[40%] left-[50%] w-24 h-24 bg-primary/50 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[20%] right-[20%] w-40 h-40 bg-secondary/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

                <div className="z-10 flex flex-col items-center text-center p-8 glass rounded-2xl border-white/20">
                    <Map className="w-16 h-16 text-white mb-4 opacity-80" />
                    <h3 className="font-outfit text-2xl font-bold text-white mb-2">Interactive Map Area</h3>
                    <p className="text-text-muted">Enter your ZIP code to see local tower connectivity.</p>
                    <div className="mt-6 flex">
                        <input type="text" placeholder="Enter ZIP" className="input-base rounded-r-none w-48" />
                        <button className="btn btn-primary rounded-l-none px-6">Check</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coverage;
