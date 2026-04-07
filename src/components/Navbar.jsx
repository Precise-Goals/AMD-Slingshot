import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ wallet }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/planner', label: 'Planner' },
    { to: '/assistant', label: 'Assistant' },
  ];

  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        background: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(238,238,238,0.8)',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.04)',
      }}
    >
      <div className="container-xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          aria-label="Healia home"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-headline)',
            color: '#E63946', letterSpacing: '-0.04em', lineHeight: 1,
          }}
        >
          Healia
        </button>

        {/* Desktop nav links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-headline)',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '-0.02em',
                textDecoration: 'none',
                color: isActive ? '#E63946' : '#64748b',
                borderBottom: isActive ? '2px solid #E63946' : '2px solid transparent',
                paddingBottom: '2px',
                transition: 'color 0.2s',
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Wallet area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {wallet.isConnected ? (
            <>
              {/* Token balance */}
              <div className="clay-card-inset" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'var(--surface-container-low)',
                padding: '0.4rem 1rem', borderRadius: '999px',
              }}>
                <span className="material-symbols-outlined symbol-fill" style={{ color: '#E63946', fontSize: '18px' }}>generating_tokens</span>
                <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.7rem', fontWeight: 600, color: 'var(--on-surface-variant)' }}>
                  HLIA
                </span>
              </div>
              {/* Address pill */}
              <div className="clay-card" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'var(--surface-container-highest)',
                padding: '0.4rem 1rem', borderRadius: '999px', cursor: 'pointer',
              }}
                onClick={wallet.disconnect}
                aria-label="Disconnect wallet"
                title="Click to disconnect"
              >
                <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--on-surface-variant)' }}>
                  {wallet.shortAddress}
                </span>
                <div style={{
                  width: '22px', height: '22px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #b7102a, #b7004d)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff', fontSize: '12px' }}>account_balance_wallet</span>
                </div>
              </div>
            </>
          ) : (
            <button
              onClick={wallet.connect}
              disabled={wallet.isConnecting}
              aria-label="Connect MetaMask wallet"
              style={{
                background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)',
                color: '#fff', border: 'none', cursor: wallet.isConnecting ? 'wait' : 'pointer',
                padding: '0.55rem 1.25rem', borderRadius: '999px',
                fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '0.85rem',
                boxShadow: '0 8px 24px -4px rgba(183,16,42,0.35)',
                transition: 'transform 0.15s, opacity 0.15s',
                opacity: wallet.isConnecting ? 0.7 : 1,
                display: 'flex', alignItems: 'center', gap: '0.4rem',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span className="material-symbols-outlined symbol-fill" style={{ fontSize: '16px' }}>account_balance_wallet</span>
              {wallet.isConnecting ? 'Connecting…' : 'Connect Wallet'}
            </button>
          )}

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem',
              color: 'var(--on-surface)',
            }}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '80px', left: 0, right: 0,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid var(--surface-container)',
          padding: '1rem 1.5rem 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.75rem',
        }}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-headline)',
                fontWeight: 700, fontSize: '1rem',
                textDecoration: 'none',
                color: isActive ? '#E63946' : 'var(--on-surface)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--surface-container)',
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
