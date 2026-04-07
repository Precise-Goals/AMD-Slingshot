import { useNavigate } from 'react-router-dom';

function TeamCard({ name, role, gradient }) {
  return (
    <article
      className="clay-card"
      style={{
        background: '#fff', borderRadius: '1rem', padding: '1.75rem',
        textAlign: 'center',
        transition: 'transform 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{
        width: '80px', height: '80px', borderRadius: '50%',
        background: gradient, margin: '0 auto 1rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '8px 8px 16px rgba(0,0,0,0.06), -8px -8px 16px rgba(255,255,255,0.9)',
      }}>
        <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff', fontSize: '36px' }}>person</span>
      </div>
      <h4 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.25rem' }}>{name}</h4>
      <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{role}</p>
    </article>
  );
}

function FaqCard({ question, answer }) {
  return (
    <div className="clay-card" style={{ background: '#fff', borderRadius: '1rem', padding: '1.5rem' }}>
      <h4 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>{question}</h4>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.75 }}>{answer}</p>
    </div>
  );
}

export default function AboutPage({ wallet }) {
  const navigate = useNavigate();

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* ── Hero ── */}
      <section aria-label="About Healia" style={{ padding: '4rem 0 0' }}>
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block', padding: '0.35rem 1rem', borderRadius: '999px',
              background: 'rgba(255,218,216,0.4)', color: 'var(--primary)',
              fontFamily: 'var(--font-label)', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.25rem',
            }}>Our Ecosystem</span>
            <h1 style={{
              fontFamily: 'var(--font-headline)', fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900, color: 'var(--on-surface)', letterSpacing: '-0.03em',
              lineHeight: 1.1, maxWidth: '800px', margin: '0 auto',
            }}>
              Redefining Human Health through{' '}
              <span className="pulse-gradient-text">Living Data.</span>
            </h1>
          </div>

          {/* Bento Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>

            {/* Mission */}
            <section
              className="clay-card"
              aria-labelledby="mission-heading"
              style={{
                gridColumn: 'span 12',
                background: '#fff', borderRadius: '1.25rem', padding: '2.5rem',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ maxWidth: '680px', position: 'relative', zIndex: 1 }}>
                <h2 id="mission-heading" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.25rem' }}>Our Mission</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--on-surface-variant)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Healia was born from a simple yet radical idea: your health data shouldn't be a locked static file. It should be a <strong style={{ color: 'var(--on-surface)' }}>liquid asset</strong> that works for you. We are building the first decentralized "Living Lab" — a platform where every meal, every step, and every choice is verified on-chain to provide personalized, AI-driven longevity protocols. Users who maintain healthy eating streaks for 7 days are automatically minted <strong style={{ color: 'var(--primary)' }}>1 Healia (HLIA) token</strong> on the Sepolia testnet.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {[
                    { icon: 'security', label: 'Data Sovereignty', sub: 'Your metrics, your keys.' },
                    { icon: 'health_and_safety', label: 'Proactive Care', sub: 'Preventative AI tracking.' },
                    { icon: 'generating_tokens', label: 'Token Rewards', sub: '1 HLIA per 7-day streak.' },
                    { icon: 'psychology', label: 'Gemini AI', sub: 'Personalized health insights.' },
                  ].map(({ icon, label, sub }) => (
                    <div key={label} className="clay-card-inset" style={{ background: 'var(--surface-container-low)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                      <span className="material-symbols-outlined symbol-fill" style={{ color: 'var(--primary)', marginBottom: '0.5rem', display: 'block' }}>{icon}</span>
                      <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', fontSize: '0.9rem' }}>{label}</div>
                      <div style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginTop: '0.2rem' }}>{sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Live stat card */}
            <div style={{
              gridColumn: 'span 12',
              background: 'var(--primary-container)',
              borderRadius: '1.25rem', padding: '2.5rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              textAlign: 'center', color: '#fff',
            }}>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-fixed)', marginBottom: '0.5rem' }}>Live Network Value</span>
              <div style={{ fontFamily: 'var(--font-headline)', fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.75rem', lineHeight: 1 }}>12.4M</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', opacity: 0.85, maxWidth: '320px', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Health milestones minted this month across the global Healia ecosystem.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--tertiary-fixed)' }} />
                <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Protocol Active</span>
              </div>
            </div>

            {/* Privacy-First Architecture */}
            <section
              aria-labelledby="privacy-heading"
              style={{
                gridColumn: 'span 12',
                background: '#fff', borderRadius: '1.25rem', padding: '2.5rem',
              }}
              className="clay-card"
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                <div>
                  <h2 id="privacy-heading" style={{ fontFamily: 'var(--font-headline)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--on-surface)', marginBottom: '1rem' }}>Privacy-First Architecture</h2>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    In the age of information, your biological blueprint is your most valuable asset. Healia utilizes <strong style={{ color: 'var(--primary)' }}>Zero-Knowledge Proofs (ZKP)</strong> and end-to-end encryption to ensure your data is never sold, leaked, or accessed without your explicit permission.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { icon: 'encrypted', title: 'Encrypted Biometrics', desc: 'All health markers are encrypted locally before ever hitting the chain.' },
                      { icon: 'vpn_key', title: 'Self-Custodial Identity', desc: 'You hold the private keys to your health identity. No central server has access.' },
                      { icon: 'policy', title: 'AI Privacy Policy', desc: 'Healia does not store your chat history or health queries. Gemini AI processes your requests transiently.' },
                    ].map(({ icon, title, desc }) => (
                      <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div style={{ background: 'rgba(183,16,42,0.08)', padding: '0.5rem', borderRadius: '0.6rem', flexShrink: 0 }}>
                          <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>{icon}</span>
                        </div>
                        <div>
                          <h4 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.2rem' }}>{title}</h4>
                          <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.8rem', color: 'var(--on-surface-variant)' }}>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Visual pill */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="clay-card" style={{
                    background: 'var(--surface-container-low)', borderRadius: '1.5rem',
                    padding: '2rem', textAlign: 'center', maxWidth: '280px', width: '100%',
                  }}>
                    <div style={{ fontSize: '5rem', marginBottom: '1rem', lineHeight: 1 }}>🔐</div>
                    <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, color: 'var(--on-surface)', marginBottom: '0.5rem' }}>Zero Knowledge</div>
                    <div style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>Your data is shredded and encrypted into fragments across decentralized IPFS nodes. Only your private wallet key can reassemble it.</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section aria-label="Team" style={{ padding: '5rem 0 0' }}>
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--on-surface)', marginBottom: '0.5rem' }}>Our Brain Trust</h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)' }}>The minds merging bio-science with decentralized tech.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <TeamCard name="Dr. Elara Vance" role="Lead Bio-Engineer" gradient="linear-gradient(135deg, #b7102a, #e05070)" />
            <TeamCard name="Marcus Thorne" role="Protocol Lead" gradient="linear-gradient(135deg, #b7004d, #d040a0)" />
            <TeamCard name="Sarah Chen" role="AI Ethics" gradient="linear-gradient(135deg, #006860, #00a896)" />
            <TeamCard name="Jameson Reed" role="Global Strategy" gradient="linear-gradient(135deg, #475569, #94a3b8)" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-label="Frequently asked questions" style={{ padding: '5rem 0 0' }}>
        <div className="container-xl">
          <div className="clay-card-inset" style={{ background: 'var(--surface-container-low)', borderRadius: '1.5rem', padding: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '2rem', color: 'var(--on-surface)', textAlign: 'center', marginBottom: '2rem' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <FaqCard question="How is my data actually stored?" answer="Your data is shredded and encrypted into fragments stored across decentralized IPFS nodes. Only your private wallet key can reassemble and decrypt it." />
              <FaqCard question="Can insurance companies see my data?" answer="No. By default, your identity is anonymous. You choose exactly who sees what via granular on-chain permissions." />
              <FaqCard question="What can I do with Healia tokens?" answer="Tokens can be used to unlock premium AI insights, purchase biological age tests, or staked to participate in protocol governance." />
              <FaqCard question="Is Healia a medical device?" answer="Healia is a health optimization protocol. While we use peer-reviewed science, we recommend consulting a doctor for any clinical decisions." />
              <FaqCard question="How do I earn HLIA tokens?" answer="Connect your MetaMask wallet, log healthy meals for 7 consecutive days via the Planner, and the smart contract automatically mints 1 HLIA token to your address." />
              <FaqCard question="Which network is HLIA on?" answer="HLIA tokens are on the Sepolia Ethereum testnet. You can verify all transactions on Sepolia Etherscan. Mainnet deployment is planned post-audit." />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-label="Call to action" style={{ padding: '5rem 0 5rem' }}>
        <div className="container-xl">
          <div className="clay-card-inset" style={{
            background: 'var(--surface-container-low)',
            borderRadius: '1.25rem', padding: '2.5rem',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1.5rem',
          }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--on-surface)', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
                Ready to join the Lab?
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)' }}>Start your journey toward data-driven longevity today.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                className="clay-card"
                style={{
                  background: '#fff', border: 'none', cursor: 'pointer',
                  padding: '1rem 2rem', borderRadius: '1rem',
                  fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)',
                  transition: 'transform 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Read the Whitepaper
              </button>
              <button
                onClick={() => navigate('/planner')}
                style={{
                  background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)',
                  color: '#fff', border: 'none', cursor: 'pointer',
                  padding: '1rem 2rem', borderRadius: '1rem',
                  fontFamily: 'var(--font-headline)', fontWeight: 700,
                  boxShadow: '0 8px 20px -6px rgba(183,16,42,0.4)',
                  transition: 'transform 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Launch App
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
