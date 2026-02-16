import React, { useState } from 'react'
import Hero from './components/Hero'
import Leaderboard from './components/Leaderboard'
import Login from './components/Login'

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <div className="container" style={{ position: 'relative' }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0',
          marginBottom: '2rem'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>HACK-O-MANIA</div>
          <div>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#a855f7' }}>Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    color: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                style={{
                  background: 'linear-gradient(to right, #a855f7, #ec4899)',
                  border: 'none',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '6px',
                  color: 'white',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Login
              </button>
            )}
          </div>
        </nav>

        <Login
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLogin={handleLogin}
        />

        <Hero />
        <Leaderboard />

        <footer style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#64748b', fontSize: '0.8rem' }}>
          <p>© 2026 IEEE Computer Society, Manipal University Jaipur</p>
          <p>Made with ❤️ for Hack-O-Mania</p>
        </footer>
      </div>
    </>
  )
}

export default App
