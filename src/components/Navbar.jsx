import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="container flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                        <Smartphone className="text-white" />
                    </div>
                    <span className="font-outfit font-bold text-2xl tracking-tight text-white block">
                        PacMac<span className="text-secondary">Mobile</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink to="/" current={location.pathname === '/'}>Home</NavLink>
                    <NavLink to="/plans" current={location.pathname === '/plans'}>Plans</NavLink>
                    <Link to="/eligibility" className="btn btn-primary ml-4">
                        Check Eligibility
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass border-t border-glass-border animate-fade-in shadow-2xl">
                    <div className="flex flex-col p-4 gap-4">
                        <MobileNavLink to="/" current={location.pathname === '/'} onClick={closeMenu}>Home</MobileNavLink>
                        <MobileNavLink to="/plans" current={location.pathname === '/plans'} onClick={closeMenu}>Plans</MobileNavLink>
                        <div className="pt-4 mt-2 border-t border-glass-border">
                            <Link to="/eligibility" className="btn btn-primary w-full text-center" onClick={closeMenu}>
                                Check Eligibility
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ to, current, children }) => (
    <Link
        to={to}
        className={`font-medium transition-colors hover:text-white ${current ? 'text-white' : 'text-text-muted'}`}
    >
        {children}
    </Link>
);

const MobileNavLink = ({ to, current, onClick, children }) => (
    <Link
        to={to}
        onClick={onClick}
        className={`block p-3 rounded-lg transition-colors ${current ? 'bg-white/10 text-white' : 'text-text-muted hover:bg-white/5'}`}
    >
        {children}
    </Link>
);

export default Navbar;
