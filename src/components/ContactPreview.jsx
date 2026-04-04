import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react';

const ContactPreview = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <div className="contact-grid-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '32px', letterSpacing: '-0.02em' }}>
                            Visit Our <span className="text-gradient">Patna Center</span>
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: 'white', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '4px', color: 'var(--primary)' }}>Location</h4>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Jagdamba Tower, Boring Road, Patna, Bihar 800001</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: 'white', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }}>
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '4px', color: 'var(--primary)' }}>Business Hours</h4>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Mon - Sat: 8:00 AM - 8:00 PM<br />Sun: Closed</p>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            padding: '32px',
                            backgroundColor: 'white',
                            borderRadius: '24px',
                            border: '1px solid var(--border-light)',
                            boxShadow: 'var(--shadow-premium)'
                        }}>
                            <h4 style={{ fontWeight: '900', color: 'var(--primary)', marginBottom: '20px' }}>Immediate Assistance</h4>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <a href="tel:09973595162" className="btn btn-primary" style={{ padding: '16px 32px', borderRadius: '12px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Phone size={18} /> CALL
                                </a>
                                <a href="https://wa.me/919973595162" className="btn btn-secondary" style={{ padding: '16px 32px', borderRadius: '12px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <MessageCircle size={18} /> WHATSAPP
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Map Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{
                            borderRadius: '40px',
                            overflow: 'hidden',
                            aspectRatio: '16/10',
                            boxShadow: 'var(--shadow-2xl)',
                            border: '1px solid var(--border)',
                            backgroundColor: 'var(--surface-muted)'
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.747761862985!2d85.11443177543845!3d25.61329667744549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5900080d2291%3A0xd31355c3a3758ea7!2sPrayas%20Classes(BANKING%2FSSC%20%26%20OTHERS)!5e0!3m2!1sen!2sin!4v1775199157586!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>

            <style>{`
                @media (max-width: 991px) {
                    .contact-grid-container {
                        display: flex !important;
                        flex-direction: column-reverse !important;
                        gap: 60px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactPreview;
