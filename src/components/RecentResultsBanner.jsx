import React from 'react';
import { motion } from 'framer-motion';

const RecentResultsBanner = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--primary-light)', padding: '60px 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-xl)',
                        border: '8px solid white',
                        backgroundColor: 'white'
                    }}
                >
                    <img
                        src="/assets/pictures/webp/recent-results.png"
                        alt="Recent Results"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block'
                        }}
                    />
                </motion.div>
            </div>
            <style>{`
                @media (max-width: 640px) {
                    [style*="border: 8px solid white"] { border-width: 4px !important; }
                }
            `}</style>
        </section>
    );
};

export default RecentResultsBanner;
