import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/planner', label: 'Planner' },
  { to: '/assistant', label: 'Assistant' },
];

const legalLinks = [
  { href: '#disclaimer', label: 'Disclaimer' },
  { href: '#privacy', label: 'Privacy Policy' },
  { href: '#terms', label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        width: '100%',
        borderRadius: '3rem 3rem 0 0',
        marginTop: '5rem',
        background: '#f9f9f9',
        boxShadow: 'inset 6px 6px 12px rgba(0,0,0,0.05), inset -6px -6px 12px rgba(255,255,255,0.8)',
      }}
    >
      <div className="container-xl" style={{ padding: '4rem 1.5rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{
              fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-headline)',
              color: '#E63946', letterSpacing: '-0.04em', marginBottom: '0.75rem',
            }}>
              Healia
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#64748b',
              maxWidth: '280px', lineHeight: 1.7,
            }}>
              The first decentralized health network focused on real-world actions. Your biology, your data, your rewards.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a
                href="https://discord.com"
                target="_blank" rel="noopener noreferrer"
                aria-label="Healia Discord"
                className="clay-card"
                style={{
                  width: '40px', height: '40px', borderRadius: '0.75rem',
                  background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#64748b', textDecoration: 'none', transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>forum</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank" rel="noopener noreferrer"
                aria-label="Healia Twitter / X"
                className="clay-card"
                style={{
                  width: '40px', height: '40px', borderRadius: '0.75rem',
                  background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#64748b', textDecoration: 'none', transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>alternate_email</span>
              </a>
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <h5 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '1rem' }}>
              Ecosystem
            </h5>
            <nav aria-label="Ecosystem links" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="#docs" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#b7102a'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}>Documentation</a>
              <a href="#contracts" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#b7102a'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}>Smart Contracts</a>
              <a href="#tokenomics" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#b7102a'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}>Tokenomics</a>
            </nav>
          </div>

          {/* Pages */}
          <div>
            <h5 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '1rem' }}>
              Navigate
            </h5>
            <nav aria-label="Site navigation links" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {footerLinks.map(({ to, label }) => (
                <Link key={to} to={to} style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none',
                }}
                  onMouseEnter={e => e.target.style.color = '#b7102a'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Community */}
          <div>
            <h5 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '1rem' }}>
              Community
            </h5>
            <nav aria-label="Community links" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#b7102a'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}>Discord</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#b7102a'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}>Twitter (X)</a>
              <a href="#blog"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#b7102a'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}>Blog</a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--surface-container)', marginBottom: '1.5rem' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#94a3b8' }}>
            © {new Date().getFullYear()} Healia Network. All health data is encrypted on-chain.
          </p>
          {/* Medical disclaimer */}
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: '#94a3b8',
            maxWidth: '400px', textAlign: 'center',
          }}>
            ⚕️ Healia is an AI-powered tool and is <strong>not</strong> a substitute for professional medical advice. Always consult a qualified healthcare provider.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {legalLinks.map(({ href, label }) => (
              <a key={href} href={href} style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#94a3b8',
                textDecoration: 'none',
              }}
                onMouseEnter={e => e.target.style.color = '#b7102a'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
