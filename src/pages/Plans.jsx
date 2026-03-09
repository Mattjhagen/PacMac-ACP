import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, ArrowRight, Zap } from 'lucide-react';

const Plans = () => {
    return (
        <div className="pb-24 relative">
            {/* Background decorations */}
            <div className="bg-glow top-[10%] left-[-10%]"></div>

            <section className="container pt-20">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <h1 className="title-xl font-outfit text-white mb-6">
                        Plans Built for <span className="text-gradient">You</span>
                    </h1>
                    <p className="subtitle mx-auto">
                        Combine your Lifeline and Affordable Connectivity Program (ACP) benefits to unlock our most powerful plans for absolutely $0/month.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Lifeline Only Plan */}
                    <PlanCard
                        title="Lifeline Essential"
                        price="$0"
                        subtitle="with Lifeline approval"
                        features={[
                            "4.5GB High-Speed 5G Data",
                            "Unlimited Talk & Text",
                            "Free SIM Card",
                            "Nationwide Coverage",
                            "Caller ID & Voicemail"
                        ]}
                        recommended={false}
                        delay="100"
                    />

                    {/* ACP + Lifeline Combo Plan (Highlighted) */}
                    <PlanCard
                        title="PacMac Unlimited"
                        price="$0"
                        subtitle="with Lifeline + ACP combined"
                        features={[
                            "Unlimited High-Speed 5G Data",
                            "Unlimited Talk & Text",
                            "10GB Mobile Hotspot",
                            "Free 5G Smartphone Included*",
                            "International Calling to Mex/Can",
                            "Priority Customer Support"
                        ]}
                        recommended={true}
                        delay="200"
                    />

                    {/* Regular Alternative */}
                    <PlanCard
                        title="ACP Standard"
                        price="$0"
                        subtitle="with ACP approval only"
                        features={[
                            "15GB High-Speed 5G Data",
                            "Unlimited Talk & Text",
                            "Free SIM Card",
                            "Nationwide Coverage"
                        ]}
                        recommended={false}
                        delay="300"
                    />
                </div>

                <div className="mt-20 glass-card max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8 border-white/10 animate-fade-in delay-300">
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                        <Info size={32} />
                    </div>
                    <div>
                        <h3 className="font-outfit font-bold text-xl text-white mb-2">How it works</h3>
                        <p className="text-text-muted text-sm md:text-base">
                            The Lifeline and Affordable Connectivity Program (ACP) are government assistance programs.
                            The service is non-transferable and limited to one per household. You can apply your benefits to PacMac Mobile to receive free service.
                        </p>
                    </div>
                    <Link to="/eligibility" className="btn btn-primary whitespace-nowrap">
                        Check Eligibility
                    </Link>
                </div>
            </section>
        </div>
    );
};

const PlanCard = ({ title, price, subtitle, features, recommended, delay }) => (
    <div className={`relative glass-card flex flex-col p-8 animate-fade-in delay-${delay} ${recommended ? 'border-primary/50 shadow-[0_0_40px_rgba(79,70,229,0.2)] transform md:-translate-y-4 z-10' : 'border-glass-border'}`}>
        {recommended && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold py-1 px-4 rounded-full flex items-center gap-1 shadow-lg">
                <Zap size={14} fill="currentColor" /> MOST POPULAR
            </div>
        )}

        <div className="mb-8 border-b border-white/10 pb-8 text-center">
            <h3 className="font-outfit font-bold text-2xl text-white mb-4">{title}</h3>
            <div className="flex items-end justify-center gap-1 mb-2">
                <span className="font-outfit font-extrabold text-5xl text-white">{price}</span>
                <span className="text-text-muted mb-1">/mo</span>
            </div>
            <p className="text-sm text-secondary font-medium">{subtitle}</p>
        </div>

        <ul className="flex-1 space-y-4 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-text-white text-sm opacity-90">{feature}</span>
                </li>
            ))}
        </ul>

        <Link
            to="/eligibility"
            className={`btn w-full ${recommended ? 'btn-primary' : 'btn-outline'}`}
        >
            Get Started
        </Link>
    </div>
);

export default Plans;
