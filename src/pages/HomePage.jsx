import { useNavigate } from 'react-router-dom';

// ── Review Card ──────────────────────────────────────────────
function ReviewCard({ name, review, avatarColor }) {
  return (
    <article
      className="clay-card pillowy-glow"
      style={{
        background: 'rgba(255,240,242,0.4)',
        borderRadius: '1rem',
        padding: '2rem',
        display: 'flex', flexDirection: 'column', gap: '1.25rem',
        border: '1px solid rgba(255,180,180,0.25)',
        transition: 'box-shadow 0.2s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: avatarColor,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }} aria-hidden="true">
          <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff', fontSize: '28px' }}>person</span>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.25rem' }}>{name}</h4>
          <div style={{ display: 'flex', gap: '2px' }} aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="material-symbols-outlined symbol-fill" style={{ color: '#f59e0b', fontSize: '14px' }}>star</span>
            ))}
          </div>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic' }}>
        "{review}"
      </p>
    </article>
  );
}

// ── How It Works Step ─────────────────────────────────────────
function HowStep({ icon, title, desc, iconBg, iconColor, num }) {
  return (
    <article
      className="clay-card"
      style={{
        background: '#fff', borderRadius: '1rem', padding: '2.5rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', gap: '1.25rem',
        transition: 'transform 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{
        width: '72px', height: '72px', borderRadius: '50%',
        background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.06)',
      }} aria-hidden="true">
        <span className="material-symbols-outlined symbol-fill" style={{ color: iconColor, fontSize: '32px' }}>{icon}</span>
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--on-surface)' }}>
          {num}. {title}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
      </div>
    </article>
  );
}

// ── Main HomePage ─────────────────────────────────────────────
export default function HomePage({ wallet }) {
  const navigate = useNavigate();

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* ──── Hero Section ──── */}
      <section aria-label="Hero" style={{ padding: '4rem 0 0' }}>
        <div className="container-xl">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
            minHeight: '600px',
          }}>
            {/* Hero main card */}
            <div
              className="clay-card pillowy-glow"
              style={{
                gridColumn: 'span 12',
                background: '#fff',
                borderRadius: '1.5rem',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Antigravity floating orb background */}
              <div aria-hidden="true" style={{
                position: 'absolute', top: '-80px', right: '-80px',
                width: '400px', height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(183,16,42,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{ maxWidth: '620px', position: 'relative', zIndex: 1 }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.35rem 1rem',
                  borderRadius: '999px',
                  background: 'var(--primary-fixed)',
                  color: 'var(--on-primary-fixed)',
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1.75rem',
                }}>
                  Web3 Health Revolution
                </span>

                <h1 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: 900,
                  color: 'var(--on-surface)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.5rem',
                }}>
                  Eat Healthy.<br />
                  <span className="pulse-gradient-text">Earn Crypto.</span>
                </h1>

                <div style={{ marginBottom: '2.25rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '1.125rem',
                    color: 'var(--on-surface-variant)', lineHeight: 1.7, marginBottom: '1rem',
                  }}>
                    Transform your daily meals into digital assets. Healia uses state-of-the-art AI to verify your nutrition in real-time.
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                    color: 'rgba(91,64,63,0.75)', lineHeight: 1.7,
                    borderLeft: '4px solid rgba(183,16,42,0.2)',
                    paddingLeft: '1.25rem',
                  }}>
                    Join over 50,000 health enthusiasts monetizing their wellness journey. Every verified healthy meal builds your on-chain reputation and unlocks exclusive ecosystem rewards.
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <button
                    onClick={() => wallet.isConnected ? navigate('/planner') : wallet.connect()}
                    style={{
                      background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)',
                      color: '#fff', border: 'none', cursor: 'pointer',
                      padding: '1rem 2.5rem', borderRadius: '1rem',
                      fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '1.05rem',
                      boxShadow: '0 12px 24px -8px rgba(183,16,42,0.4)',
                      transition: 'transform 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Start Your Streak
                  </button>
                  <button
                    onClick={() => navigate('/about')}
                    className="clay-card"
                    style={{
                      background: '#fff', border: 'none', cursor: 'pointer',
                      padding: '1rem 2.5rem', borderRadius: '1rem',
                      fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '1.05rem',
                      color: 'var(--on-surface)', transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-container-low)'}
                    onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                  >
                    How it Works
                  </button>
                </div>
              </div>

              {/* Floating health score chip — antigravity */}
              <div
                className="antigravity-float"
                style={{
                  position: 'absolute', top: '2rem', right: '2rem',
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '1.25rem',
                  boxShadow: '8px 8px 16px rgba(0,0,0,0.06), -8px -8px 16px rgba(255,255,255,0.9)',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  zIndex: 2,
                }}
                aria-label="Health score: 98 out of 100"
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '0.75rem',
                  background: 'var(--secondary-fixed)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }} aria-hidden="true">
                  <span className="material-symbols-outlined symbol-fill" style={{ color: 'var(--secondary)', fontSize: '24px' }}>favorite</span>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--on-surface-variant)', marginBottom: '2px' }}>
                    Health Score
                  </p>
                  <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--on-surface)' }}>
                    98/100
                  </p>
                </div>
              </div>
            </div>

            {/* Side stat cards */}
            <div className="clay-card-inset" style={{
              gridColumn: 'span 6',
              background: 'var(--surface-container-low)',
              borderRadius: '1.25rem', padding: '2rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '1rem', background: 'var(--secondary-fixed)',
                  borderRadius: '1rem',
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--on-secondary-fixed, #3f0016)', fontSize: '28px' }}>local_fire_department</span>
                </div>
                <span style={{
                  fontFamily: 'var(--font-label)', fontSize: '0.7rem', fontWeight: 700,
                  background: 'rgba(255,255,255,0.6)', color: 'var(--on-surface-variant)',
                  padding: '0.25rem 0.75rem', borderRadius: '999px',
                }}>
                  LIVE
                </span>
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--on-surface)', marginBottom: '0.25rem' }}>12,842</h2>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)', fontWeight: 500 }}>Global Streaks Today</p>
              </div>
            </div>

            <div className="clay-card pillowy-glow" style={{
              gridColumn: 'span 6',
              background: 'rgba(219,49,63,0.06)',
              borderRadius: '1.25rem', padding: '2rem',
              border: '1px solid rgba(255,218,216,0.4)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem',
            }}>
              <div style={{
                padding: '1rem', background: 'var(--primary-container)',
                borderRadius: '1rem', width: 'fit-content',
              }}>
                <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff', fontSize: '28px' }}>account_balance_wallet</span>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                  Total Rewards Distributed
                </p>
                <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.75rem', fontWeight: 900, color: 'var(--on-surface)' }}>
                  850,000 HLIA
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── How It Works ──── */}
      <section aria-label="How Healia works" style={{ padding: '5rem 0 0' }}>
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--on-surface)', marginBottom: '0.75rem' }}>
              The Cycle of Wellness
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)', fontWeight: 500, maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              Building a healthier you, one block at a time. Our ecosystem is designed to reward consistency and transparency.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <HowStep num="1" icon="photo_camera" title="Snap & Verify" iconBg="#eff6ff" iconColor="#3b82f6"
              desc="Take a photo of your meal. Our AI instantly analyzes nutrients and logs them to your private dashboard." />
            <HowStep num="2" icon="verified" title="On-Chain Audit" iconBg="#f0fdf4" iconColor="#22c55e"
              desc="Verified healthy choices are committed to the blockchain, building your verifiable health reputation." />
            <HowStep num="3" icon="payments" title="Collect HLIA" iconBg="var(--primary-fixed)" iconColor="var(--primary)"
              desc="Receive Healia tokens directly to your wallet after a 7-day streak. Use them for premium plans or trade in the ecosystem." />
          </div>
        </div>
      </section>

      {/* ──── Feature Bento ──── */}
      <section aria-label="Features" style={{ padding: '5rem 0 0' }}>
        <div className="container-xl">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* AI Vision card */}
            <div className="clay-card-inset" style={{
              background: 'var(--surface-container-high)',
              borderRadius: '1.25rem', padding: '3rem',
              position: 'relative', overflow: 'hidden', minHeight: '360px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>psychology</span>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '2rem', color: 'var(--on-surface)', marginBottom: '1rem' }}>AI Vision Tracking</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: '340px' }}>
                  No more manual logging. Snap a photo of your meal and our proprietary AI identifies ingredients, estimates calories, and calculates macro-density in seconds.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {['Real-time Analysis', '99% Accuracy'].map(tag => (
                    <span key={tag} style={{
                      padding: '0.35rem 0.85rem', background: 'rgba(255,255,255,0.65)',
                      backdropFilter: 'blur(8px)', borderRadius: '999px',
                      fontSize: '0.7rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                      color: 'var(--on-surface-variant)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
              {/* decorative icon */}
              <span aria-hidden="true" className="material-symbols-outlined" style={{
                position: 'absolute', bottom: '-40px', right: '-40px',
                fontSize: '240px', color: 'var(--on-surface)',
                opacity: 0.025, pointerEvents: 'none',
                fontVariationSettings: "'wght' 700",
              }}>camera</span>
            </div>

            {/* Sepolia Rewards card */}
            <div className="clay-card" style={{
              background: '#fff', borderRadius: '1.25rem', padding: '3rem',
              position: 'relative', overflow: 'hidden', minHeight: '360px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <span className="material-symbols-outlined symbol-fill" style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>link</span>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '2rem', color: 'var(--on-surface)', marginBottom: '1rem' }}>Sepolia Rewards</h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '340px' }}>
                Your health is an asset. Verified healthy actions trigger smart contracts on the Sepolia testnet, rewarding you with Healia tokens.
              </p>
              {/* Mock contract address */}
              <div className="clay-card-inset" style={{
                background: 'var(--surface-container-low)',
                borderRadius: '1rem', padding: '1.25rem',
                border: '1px solid rgba(255,255,255,0.6)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <div className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--on-surface-variant)' }}>Sepolia Verified</span>
                </div>
                <code style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--primary)', fontWeight: 700, wordBreak: 'break-all' }}>
                  0x8a23f...92contract_HLIA
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Chain Ecosystem ──── */}
      <section aria-label="Supported blockchain networks" style={{ padding: '5rem 0 0' }}>
        <div className="container-xl">
          <div className="clay-card-inset" style={{
            background: 'var(--surface-container-low)',
            borderRadius: '1.5rem', padding: '3rem',
            position: 'relative', overflow: 'hidden', textAlign: 'center',
          }}>
            {/* Floating chain icons */}
            <div aria-hidden="true" className="chain-float" style={{ position: 'absolute', top: '1.5rem', left: '2rem', opacity: 0.2 }}>
              <svg width="52" height="52" viewBox="0 0 32 32" fill="none"><path d="M15.925 2.408l-.15.485v19.092l.15.15 8.825-5.22-.025-.472-8.8-4.035z" fill="currentColor" /><path d="M15.925 2.408L7.1 12.408l-.025.472 8.85 5.22V2.408z" fill="currentColor" fillOpacity=".6" /></svg>
            </div>
            <div aria-hidden="true" className="chain-float" style={{ position: 'absolute', bottom: '2rem', right: '3rem', opacity: 0.15, animationDelay: '-2s' }}>
              <svg width="64" height="64" viewBox="0 0 38 38" fill="none"><path d="M28.45 10.14L19 4.69 9.55 10.14v10.89L19 26.47l9.45-5.44V10.14z" fill="currentColor" fillOpacity=".4" /></svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(91,64,63,0.5)', marginBottom: '2.5rem' }}>
              Built on Secure Foundations
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '3rem' }}>
              {[
                { name: 'Ethereum', emoji: '⟠', col: 'var(--on-surface-variant)' },
                { name: 'Polygon', emoji: '⬡', col: '#8247e5' },
                { name: 'Sepolia', emoji: '🔵', col: 'var(--primary)' },
              ].map(chain => (
                <div key={chain.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="clay-card" style={{
                    width: '72px', height: '72px', borderRadius: '1rem', background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem', transition: 'transform 0.2s', cursor: 'default',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    {chain.emoji}
                  </div>
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>{chain.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── Reviews ──── */}
      <section aria-label="User testimonials" style={{ padding: '5rem 0 5rem' }}>
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--on-surface)' }}>
              What Our Community Says
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <ReviewCard name="Sarah J." avatarColor="linear-gradient(135deg, #b7102a, #e05070)"
              review="Healia actually makes me want to eat my greens. The token rewards are such a cool motivator! I've already earned enough for a premium nutrition plan." />
            <ReviewCard name="Marcus T." avatarColor="linear-gradient(135deg, #b7004d, #d040a0)"
              review="The AI vision is scary accurate. It picked up my complex salad ingredients instantly. Tracking macro-density has never been this effortless." />
            <ReviewCard name="Elena R." avatarColor="linear-gradient(135deg, #006860, #00a896)"
              review="Finally, a health app that feels modern and rewarding. Love the claymorphic design and the transparency of the on-chain verification." />
          </div>
        </div>
      </section>
    </main>
  );
}
