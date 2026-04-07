import { useRef, useEffect } from 'react';
import { useChat } from '../hooks/useChat';

const QUICK_PROMPTS = [
  'What should I eat for a high-protein breakfast?',
  'Help me plan a low-carb week',
  'How many calories in a salmon bowl?',
  'Suggest a post-workout meal',
];

function ChatBubble({ message }) {
  const isAI = message.role === 'ai';
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', justifyContent: isAI ? 'flex-start' : 'flex-end', maxWidth: '100%' }}>
      {isAI && (
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px -4px rgba(183,16,42,0.4)' }}>
          <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff', fontSize: '16px' }}>auto_awesome</span>
        </div>
      )}
      <div
        className={isAI ? 'clay-bubble-ai' : 'clay-bubble-user'}
        style={{
          padding: '0.875rem 1.125rem',
          borderRadius: isAI ? '0 1rem 1rem 1rem' : '1rem 0 1rem 1rem',
          maxWidth: '80%',
          borderRight: isAI ? 'none' : '3px solid var(--primary)',
        }}
      >
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
          {message.content}
        </p>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.6rem', color: 'var(--outline)', marginTop: '0.4rem', display: 'block' }}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      {!isAI && (
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--surface-container-highest)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span className="material-symbols-outlined symbol-fill" style={{ fontSize: '18px', color: 'var(--on-surface-variant)' }}>person</span>
        </div>
      )}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff', fontSize: '16px' }}>auto_awesome</span>
      </div>
      <div className="clay-bubble-ai" style={{ padding: '0.875rem 1.25rem', borderRadius: '0 1rem 1rem 1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
        {[0, 0.2, 0.4].map((delay, i) => (
          <div key={i} style={{ width: '7px', height: '7px', background: 'var(--on-surface-variant)', borderRadius: '50%', animation: `pulse-dot 1.2s ease-in-out ${delay}s infinite` }} />
        ))}
      </div>
    </div>
  );
}

export default function AssistantPage({ wallet }) {
  const { messages, isLoading, input, setInput, sendMessage, clearChat } = useChat();
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <main style={{ paddingTop: '80px' }}>
      <div style={{ padding: '2rem 0 2rem' }}>
        <div className="container-xl">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>

            {/* Left sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Recommended Recipes */}
              <div className="clay-embossed" style={{ background: 'var(--surface-container-low)', borderRadius: '1rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)', opacity: 0.2 }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>restaurant_menu</span>
                  <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', fontSize: '0.95rem' }}>Recommended</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { name: 'Quinoa Mediterranean Mix', tag: 'Low Carb', kcal: '420 kcal', time: '15 min', emoji: '🥗' },
                    { name: 'Green Recovery Smoothie', tag: 'Recovery', kcal: '210 kcal', time: '5 min', emoji: '🥤' },
                  ].map(recipe => (
                    <button
                      key={recipe.name}
                      onClick={() => sendMessage(`Tell me about ${recipe.name} and how to make it.`)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                    >
                      <div className="clay-embossed" style={{ borderRadius: '0.875rem', overflow: 'hidden', background: '#fff', transition: 'transform 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        <div style={{ height: '80px', background: 'linear-gradient(135deg, var(--surface-container), var(--surface-container-high))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', position: 'relative' }}>
                          {recipe.emoji}
                          <span style={{ position: 'absolute', bottom: '6px', left: '8px', background: 'var(--primary)', color: '#fff', fontFamily: 'var(--font-label)', fontSize: '0.6rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{recipe.tag}</span>
                        </div>
                        <div style={{ padding: '0.75rem' }}>
                          <h4 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--on-surface)', marginBottom: '0.2rem' }}>{recipe.name}</h4>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{recipe.kcal} • {recipe.time}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick log */}
              <div className="clay-embossed" style={{ background: 'var(--surface-container-low)', borderRadius: '1rem', padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', fontSize: '0.95rem', marginBottom: '1rem' }}>Quick Ask</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
                  {[
                    { icon: 'water_drop', label: 'Hydration', color: 'var(--primary)' },
                    { icon: 'fitness_center', label: 'Workout', color: 'var(--secondary)' },
                    { icon: 'medication', label: 'Supplements', color: 'var(--tertiary)' },
                    { icon: 'bedtime', label: 'Sleep', color: '#f59e0b' },
                  ].map(({ icon, label, color }) => (
                    <button
                      key={label}
                      onClick={() => sendMessage(`Give me health tips for ${label.toLowerCase()}.`)}
                      className="clay-embossed"
                      style={{ background: 'var(--surface-container-lowest)', border: 'none', cursor: 'pointer', padding: '0.875rem 0.5rem', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', transition: 'transform 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.97)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <span className="material-symbols-outlined symbol-fill" style={{ color, fontSize: '24px' }}>{icon}</span>
                      <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.65rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Centre: Chat */}
            <div className="clay-embossed" style={{ background: 'var(--surface-container-low)', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '680px', gridColumn: 'span 2' }}>
              {/* Chat header */}
              <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.5)', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 16px -4px rgba(183,16,42,0.4)' }}>
                    <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff', fontSize: '20px' }}>auto_awesome</span>
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, color: 'var(--on-surface)', fontSize: '1rem' }}>Healia Assistant</h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span className="pulse-dot" style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                      AI-POWERED HEALTH SYNC
                    </p>
                  </div>
                </div>
                <button onClick={clearChat} aria-label="Clear chat" style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--on-surface-variant)' }}
                  title="Clear conversation"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>restart_alt</span>
                </button>
              </div>

              {/* Quick prompts */}
              <div style={{ padding: '0.75rem 1.25rem', display: 'flex', gap: '0.5rem', overflowX: 'auto', flexShrink: 0, borderBottom: '1px solid rgba(238,238,238,0.6)' }}>
                {QUICK_PROMPTS.map(p => (
                  <button key={p} onClick={() => sendMessage(p)} style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', borderRadius: '999px', padding: '0.3rem 0.875rem', fontFamily: 'var(--font-label)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--on-surface-variant)', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-fixed)'; e.currentTarget.style.color = 'var(--on-primary-fixed)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface-container-lowest)'; e.currentTarget.style.color = 'var(--on-surface-variant)'; e.currentTarget.style.borderColor = 'var(--outline-variant)'; }}
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Messages */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', background: 'radial-gradient(circle at top right, rgba(183,16,42,0.02), transparent)' }}>
                {messages.map(msg => <ChatBubble key={msg.id} message={msg} />)}
                {isLoading && <TypingIndicator />}
                <div ref={chatEndRef} />
              </div>

              {/* Input */}
              <div className="glass-panel" style={{ padding: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.5)', flexShrink: 0 }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="clay-debossed" style={{ flex: 1, background: 'var(--surface-container-low)', borderRadius: '999px', padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'box-shadow 0.2s' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)', fontSize: '20px' }}>restaurant</span>
                    <input
                      type="text"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      placeholder="Ask about a recipe or log your meal..."
                      aria-label="Chat input"
                      disabled={isLoading}
                      style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--on-surface)', background: 'transparent', border: 'none', outline: 'none' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    aria-label="Send message"
                    style={{
                      width: '48px', height: '48px', borderRadius: '50%', border: 'none', cursor: isLoading || !input.trim() ? 'default' : 'pointer',
                      background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 6px 16px -4px rgba(183,16,42,0.4)',
                      transition: 'transform 0.15s, opacity 0.15s',
                      opacity: isLoading || !input.trim() ? 0.5 : 1,
                    }}
                    onMouseEnter={e => { if (!isLoading && input.trim()) e.currentTarget.style.transform = 'scale(1.08)'; }}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff', fontSize: '20px' }}>send</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Daily Pulse */}
              <div className="clay-embossed" style={{ background: 'var(--surface-container-low)', borderRadius: '1rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div aria-hidden="true" style={{ position: 'absolute', top: '-20px', right: '-20px', width: '60px', height: '60px', background: 'rgba(183,16,42,0.06)', borderRadius: '50%', filter: 'blur(16px)' }} />
                <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>Daily Pulse</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { label: 'Protein Goal', value: 75, color: '#b7102a' },
                    { label: 'Daily Calories', value: 65, color: '#b7004d' },
                    { label: 'Hydration', value: 60, color: '#006860' },
                  ].map(({ label, value, color }) => (
                    <div key={label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>{label}</span>
                        <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color }}>{value}%</span>
                      </div>
                      <div className="clay-debossed" style={{ height: '10px', width: '100%', background: '#fff', borderRadius: '999px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${value}%`, background: `linear-gradient(90deg, ${color}, ${color}cc)`, borderRadius: '999px', transition: 'width 0.8s ease' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upgrade card */}
              <div style={{ background: 'var(--primary)', borderRadius: '1rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(183,16,42,0.5), rgba(183,0,77,0.5))', mixBlendMode: 'multiply' }} />
                <div aria-hidden="true" style={{ position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', background: 'rgba(255,255,255,0.08)', borderRadius: '50%', filter: 'blur(20px)' }} />
                <div style={{ position: 'relative', color: '#fff' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff' }}>diamond</span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: '1rem', lineHeight: 1.3, marginBottom: '0.625rem' }}>Unlock Chain-Health Analytics</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.775rem', opacity: 0.82, marginBottom: '1.25rem', lineHeight: 1.6 }}>Connect to Sepolia Mainnet to sync your genetic profile data securely.</p>
                  <button className="clay-embossed" style={{ width: '100%', background: '#fff', color: 'var(--primary)', border: 'none', cursor: 'pointer', padding: '0.625rem', borderRadius: '999px', fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: '0.8rem', transition: 'transform 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Upgrade Now
                  </button>
                </div>
              </div>

              {/* Heart rate */}
              <div className="clay-embossed" style={{ background: 'var(--surface-container-low)', borderRadius: '1rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontSize: '22px' }}>monitor_heart</span>
                  <span style={{ background: 'rgba(0,104,96,0.1)', color: 'var(--tertiary)', fontFamily: 'var(--font-label)', fontSize: '0.6rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '999px' }}>STABLE</span>
                </div>
                <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: '2rem', color: 'var(--on-surface)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  72<span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--on-surface-variant)', marginLeft: '4px' }}>BPM</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--on-surface-variant)', marginTop: '0.35rem', fontStyle: 'italic' }}>Last sync: 2 mins ago</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
