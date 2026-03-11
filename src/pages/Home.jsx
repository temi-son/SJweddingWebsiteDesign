import React from 'react';
import { motion } from 'framer-motion';
import weddingData from '../data/weddingDetails.json';
import AddToCalendar from '../components/AddToCalendar';
import HeroImage from '../assets/images/weddingHeroImage.png';

const Home = () => {
    const { couple, event, sections } = weddingData;

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }),
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

            {/* Background Layers */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: { HeroImage } }}
            />
            <div className="absolute inset-0 -z-10 bg-lemon-chiffon/70 backdrop-blur-[2px]" />

            <div className='pt-32 md:pt-10 flex flex-col items-center w-full'>

                {/* Reusable Tagline */}
                <motion.div
                    custom={0.2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="mb-4"
                >
                    <p className="text-sm md:text-lg font-medium text-uv-light tracking-widest uppercase">
                        {sections.heroTagline}
                    </p>
                </motion.div>

                {/* Couple Names from JSON */}
                <motion.div
                    custom={0.5}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="mb-10"
                >
                    <h1 className="font-serif text-7xl md:text-9xl font-extrabold text-ultra-violet tracking-tighter leading-[0.9]">
                        {couple.bride}<br className='lg:hidden' />
                        <span className="text-uv-light text-6xl md:text-8xl"> & </span><br className='lg:hidden' />
                        {couple.groom}
                    </h1>
                </motion.div>

                {/* Event Details from JSON */}
                <motion.div
                    custom={0.8}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xl md:text-2xl text-ultra-violet font-semibold">
                        <span>{event.day}</span>
                        <span className="hidden md:block w-2 h-2 rounded-full bg-uv-light/40"></span>
                        <span className="font-serif italic font-normal text-uv-light">
                            {new Date(event.date.replace(/\./g, '-')).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                        <span className="hidden md:block w-2 h-2 rounded-full bg-uv-light/40"></span>
                        <span>{event.location}</span>
                    </div>
                </motion.div>

                {/* Save the Date Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 10, delay: 1.1 }}
                    className="text-lemon-chiffon px-8 py-3 mt-12 w-fit transform hover:scale-105 transition-transform cursor-default"
                >
                    <AddToCalendar />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;