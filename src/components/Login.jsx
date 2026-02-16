
import React, { useState } from 'react';

const Login = ({ isOpen, onClose, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (email === 'aryanjangid2030@gmail.com' && password === '12345678') {
            onLogin({ email, name: 'Aryan Jangir' });
            onClose();
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div className="glass-panel" style={{ padding: '2rem', width: '100%', maxWidth: '400px', position: 'relative' }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        color: '#cbd5e1',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>

                <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Portal Login</h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8' }}>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                background: 'rgba(0, 0, 0, 0.3)',
                                color: 'white',
                                outline: 'none'
                            }}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8' }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                background: 'rgba(0, 0, 0, 0.3)',
                                color: 'white',
                                outline: 'none'
                            }}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    {error && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{error}</p>}

                    <button
                        type="submit"
                        style={{
                            marginTop: '1rem',
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: 'none',
                            background: 'linear-gradient(to right, #a855f7, #ec4899)',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'transform 0.1s'
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
