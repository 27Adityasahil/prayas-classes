import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutShort = () => {
    const images = [
        '/assets/pictures/webp/ha-1.png',
        '/assets/pictures/webp/ha-2.png',
        '/assets/pictures/webp/ha-3.png'
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="about-grid-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="badge badge-primary-light" style={{ marginBottom: '16px' }}>ABOUT PRAYAS</span>
                        <h2 className="section-title">Nurturing Excellence, <br /><span className="text-gradient">Building Careers</span></h2>
                        <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                            At Prayas Classes, we don't just teach for exams; we prepare you for life in the administrative services. Our concept-driven approach and expert mentorship have helped thousands of students achieve their dreams.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '32px' }}>
                            {[
                                'Expert Faculty',
                                'Curated Study Material',
                                'Weekly Mock Tests',
                                'Personal Mentorship'
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <CheckCircle2 size={18} color="var(--primary)" />
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="about-images-hide"
                                style={{ borderRadius: '20px', overflow: 'hidden', height: '240px', boxShadow: 'var(--shadow-md)' }}
                            >
                                <img src={images[0]} alt="Institute Life" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="about-images-hide"
                                style={{ borderRadius: '20px', overflow: 'hidden', height: '180px', boxShadow: 'var(--shadow-md)' }}
                            >
                                <img src={images[1]} alt="Classroom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            style={{ borderRadius: '20px', overflow: 'hidden', height: '440px', boxShadow: 'var(--shadow-md)' }}
                        >
                            <img src={images[2]} alt="Students" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 991px) {
                    .about-grid-container {
                        display: flex !important;
                        flex-direction: column-reverse !important;
                        gap: 40px !important;
                    }
                    [style*="gridTemplateColumns: 1fr 1fr"] {
                        grid-template-columns: 1fr !important;
                    }
                    [style*="height: 440px"] { height: 350px !important; }
                    .about-images-hide { display: none !important; }
                }
            `}</style>
        </section>
    );
};

export default AboutShort;
