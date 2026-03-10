import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-glass-border bg-bg-darker pt-16 pb-8 mt-24">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <Link to="/" className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                            <img src="/favicon.png" alt="PacMac Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-outfit font-bold text-xl text-white block">
                            PacMac<span className="text-secondary">Mobile</span>
                        </span>
                    </Link>
                    <p className="text-text-muted text-sm mb-6 max-w-xs">
                        Bringing premium connectivity to everyone. We believe staying connected shouldn't be a luxury.
                    </p>
                    <div className="flex gap-4">
                        <SocialLink href="#" icon={<Facebook size={18} />} />
                        <SocialLink href="#" icon={<Twitter size={18} />} />
                        <SocialLink href="#" icon={<Instagram size={18} />} />
                    </div>
                </div>

                {/* Footer Links Structure */}
                <div>
                    <h4 className="font-outfit font-semibold text-white mb-4">Services</h4>
                    <ul className="flex flex-col gap-2">
                        <li><FooterLink to="/plans">Lifeline Plans</FooterLink></li>
                        <li><FooterLink to="/plans">ACP Programs</FooterLink></li>
                        <li><FooterLink to="#">Bring Your Own Phone</FooterLink></li>
                        <li><FooterLink to="#">Coverage Map</FooterLink></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-outfit font-semibold text-white mb-4">Assistance</h4>
                    <ul className="flex flex-col gap-2">
                        <li><FooterLink to="/eligibility">Check Eligibility</FooterLink></li>
                        <li><FooterLink to="#">Help Center</FooterLink></li>
                        <li><FooterLink to="#">Contact Support</FooterLink></li>
                        <li><FooterLink to="#">Track Order</FooterLink></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-outfit font-semibold text-white mb-4">Legal</h4>
                    <ul className="flex flex-col gap-2">
                        <li><FooterLink to="#">Terms & Conditions</FooterLink></li>
                        <li><FooterLink to="#">Privacy Policy</FooterLink></li>
                        <li><FooterLink to="#">Lifeline Rules</FooterLink></li>
                    </ul>
                </div>
            </div>

            <div className="container pt-8 border-t border-glass-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-text-muted text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} PacMac Mobile. All rights reserved.
                </p>
                <p className="text-xs text-text-muted/60 max-w-xl text-center md:text-right">
                    PacMac Mobile is a provider of the government funded Lifeline Assistance program.
                    Lifeline service is non-transferable and limited to one per household.
                </p>
            </div>
        </footer>
    );
};

const FooterLink = ({ to, children }) => (
    <Link to={to} className="text-text-muted hover:text-white text-sm transition-colors">
        {children}
    </Link>
);

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all"
        target="_blank"
        rel="noopener noreferrer"
    >
        {icon}
    </a>
);

export default Footer;
