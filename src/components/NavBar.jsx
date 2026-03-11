import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import weddingData from '../data/weddingDetails.json'

const Navbar = () => {
    const { couple } = weddingData;

    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Proposal', path: '/proposal' },
        { name: 'Events', path: '/events' },
        { name: 'Registry', path: '/registry' },
        { name: 'RSVP', path: '/rsvp', isBtn: true },
    ];

    return (
        <>
            <nav className="nav-pill flex items-center justify-between min-w-[280px] md:min-w-[650px]">
                {/* Monogram */}
                <NavLink to="/" className="text-2xl font-serif font-bold italic tracking-tighter z-[60]">
                    {couple.initials}
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                link.isBtn ? "btn-uv" : `text-sm font-medium hover:text-uv-light transition-colors ${isActive ? 'text-ultra-violet font-bold' : 'text-ultra-violet/60'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[60] p-2 text-ultra-violet"
                    aria-label="Toggle Menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-50 bg-lemon-chiffon flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={link.isBtn ? "btn-uv" : "text-3xl font-serif text-ultra-violet hover:text-uv-light transition-colors"}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;