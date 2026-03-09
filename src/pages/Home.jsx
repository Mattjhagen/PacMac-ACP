import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Wifi, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="animate-fade-in relative pb-20">
            {/* Background Glow Effects */}
            <div className="bg-glow top-0 left-[-10%]"></div>
            <div className="bg-glow top-[40%] right-[-10%]"></div>

            {/* Hero Section */}
            <section className="container pt-20 pb-24 md:pt-32 md:pb-32 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left z-10">
                    <div className="inline-block py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-secondary mb-6 animate-fade-in">
                        Government Sponsored Program
                    </div>
                    <h1 className="title-xl font-outfit text-white animate-fade-in">
                        Premium Connectivity.<br />
                        <span className="text-gradient">Zero Cost.</span>
                    </h1>
                    <p className="subtitle mx-auto md:mx-0 mb-8 animate-fade-in delay-100">
                        Qualifying for Lifeline shouldn't mean compromising on quality.
                        Experience blazing fast 5G data and unlimited talk & text on the nation's most reliable network.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start animate-fade-in delay-200">
                        <Link to="/eligibility" className="btn btn-primary w-full sm:w-auto text-lg px-8 py-4">
                            Apply Now <ArrowRight size={20} />
                        </Link>
                        <Link to="/plans" className="btn btn-outline w-full sm:w-auto text-lg px-8 py-4">
                            View Plans
                        </Link>
                    </div>
                </div>

                {/* Hero Visual Mock */}
                <div className="flex-1 relative w-full max-w-md mx-auto animate-fade-in delay-300">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[100px] opacity-40"></div>
                    <div className="relative glass-card border flex items-center justify-center h-[500px]">
                        {/* Mocking a premium phone interface */}
                        <div className="w-[280px] h-[550px] bg-bg-darker rounded-[40px] border-[8px] border-glass-border shadow-2xl overflow-hidden relative flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-40 h-6 bg-glass-border absolute top-0 rounded-b-3xl"></div>
                            <Wifi className="text-secondary w-16 h-16 mb-4" />
                            <h3 className="font-outfit font-bold text-2xl text-white mb-2">PacMac<br />5G Active</h3>
                            <p className="text-text-muted text-sm px-4">Unlimited Data Enabled</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="container py-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="title-lg font-outfit text-white">Why Choose PacMac Mobile?</h2>
                    <p className="subtitle mx-auto">We redefine what you should expect from a Lifeline provider.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Zap className="w-8 h-8 text-secondary" />}
                        title="Blazing Fast 5G"
                        description="Access the nation's largest 5G network. Browse, stream, and stay connected without limits."
                        delay="100"
                    />
                    <FeatureCard
                        icon={<ShieldCheck className="w-8 h-8 text-primary" />}
                        title="No Hidden Fees"
                        description="If you qualify, you pay absolutely $0.00. No contracts, no activation fees, no surprises."
                        delay="200"
                    />
                    <FeatureCard
                        icon={<Wifi className="w-8 h-8 text-white" />}
                        title="Premium Hotspot"
                        description="Turn your phone into a Wi-Fi hotspot and share your premium connection with other devices."
                        delay="300"
                    />
                </div>
            </section>

            {/* Overview CTA */}
            <section className="container py-24 z-10 relative">
                <div className="glass-card bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full"></div>

                    <div className="flex-1">
                        <h2 className="title-lg font-outfit text-white mb-4">See If You Qualify Today</h2>
                        <p className="text-xl text-text-muted mb-6 max-w-xl">
                            Participation in programs like Medicaid, SNAP, Supplemental Security Income (SSI), or Veterans Pension often means automatic eligibility.
                        </p>
                    </div>

                    <div className="flex-shrink-0 z-10 w-full md:w-auto">
                        <Link to="/eligibility" className="btn btn-primary w-full md:w-auto text-lg px-8 py-4 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                            Check Qualification
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description, delay }) => (
    <div className={`glass-card flex flex-col items-start animate-fade-in delay-${delay}`}>
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="font-outfit font-bold text-xl text-white mb-3">{title}</h3>
        <p className="text-text-muted leading-relaxed">
            {description}
        </p>
    </div>
);

export default Home;
