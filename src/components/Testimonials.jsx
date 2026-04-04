import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        { name: 'Rahul Kumar', role: 'SSC CGL Inspector', text: 'Prayas Classes gave me the strategic roadmap I needed. Ajay Sir\'s English classes were the game-changer for me.' },
        { name: 'Anjali Sharma', role: 'SBI PO Officer', text: 'The focus on basic concepts before diving into shortcuts is what sets Prayas apart. Truly the best in Patna.' },
        { name: 'Vikash Singh', role: 'Income Tax Officer', text: 'I tried many places, but the personal attention and rigorous testing at Prayas were unparalleled.' }
    ];

    return (
        <section className="section-padding bg-mandala" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>
                            What <span style={{ color: 'var(--accent-saffron)' }}>Students Say</span>
                        </h2>
                        <div className="ornamental-divider" style={{ marginBottom: '32px' }}></div>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Real stories from students who transformed their hard work into government careers.
                        </p>
                    </motion.div>
                </div>

                <div style={{
                    overflow: 'hidden',
                    padding: '20px 0',
                    margin: '0 -20px'
                }}>
                    <motion.div
                        animate={{
                            x: [0, "-50%"]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear",
                            },
                        }}
                        style={{
                            display: 'flex',
                            width: 'max-content'
                        }}
                    >
                        {[...reviews, ...reviews].map((review, i) => (
                            <div
                                key={i}
                                className="testimonial-card"
                                style={{
                                    width: '400px',
                                    padding: '40px',
                                    backgroundColor: 'white',
                                    borderRadius: '32px',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid var(--border-gold)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                    flexShrink: 0,
                                    marginRight: '32px'
                                }}
                            >
                                <Quote size={40} color="var(--accent-saffron)" opacity={0.1} style={{ position: 'absolute', top: '24px', right: '24px' }} />

                                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
                                </div>

                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '32px', fontStyle: 'italic', flexGrow: 1 }}>
                                    "{review.text}"
                                </p>

                                <div>
                                    <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '4px', fontWeight: '800' }}>{review.name}</h4>
                                    <p style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-saffron)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{review.role}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <style>{`
                @media (max-width: 640px) {
                    .testimonial-card { 
                        width: calc(100vw - 64px) !important; 
                        padding: 24px !important; 
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
