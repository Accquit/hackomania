
import React from 'react';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="glass-panel" style={{ padding: '3rem 4rem', textAlign: 'center' }}>
                <h2 style={{ color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '1rem', marginBottom: '0.5rem' }}>
                    IEEE CS MUJ PRESENTS
                </h2>
                <h1>HACK-O-MANIA 2026</h1>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '2rem' }}>
                    The Ultimate Coding Showdown
                </p>

                <div className="hero-stats">
                    <div className="stat-card">
                        <span className="stat-value">FEB 7-8</span>
                        <span className="stat-label">Date</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">₹2000</span>
                        <span className="stat-label">Registration</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">40</span>
                        <span className="stat-label">Participants</span>
                    </div>
                </div>

                <div style={{ marginTop: '3rem' }}>
                    <span style={{
                        background: 'rgba(50, 255, 100, 0.1)',
                        color: '#4ade80',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        border: '1px solid rgba(74, 222, 128, 0.2)'
                    }}>
                        • EVENT CONCLUDED
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
