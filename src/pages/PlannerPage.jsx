import { useState } from 'react';
import { useStreak } from '../hooks/useStreak';
import { useNavigate } from 'react-router-dom';

const DAYS_OF_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const MEAL_TYPES = [
  { key: 'breakfast', label: 'Breakfast', icon: 'wb_sunny', color: 'var(--primary)', suggestion: 'Matcha-Infused Greek Yogurt with Chia & Walnuts' },
  { key: 'lunch', label: 'Lunch', icon: 'light_mode', color: 'var(--secondary)', suggestion: 'Wild-Caught Salmon & Quinoa Mediterranean Bowl' },
  { key: 'dinner', label: 'Dinner', icon: 'bedtime', color: 'var(--primary)', suggestion: 'Grass-Fed Steak with Roasted Asparagus & Garlic' },
  { key: 'snacks', label: 'Snacks', icon: 'local_cafe', color: 'var(--secondary)', suggestion: 'Organic Almonds & Blueberries (20g portion)' },
];

function DayNode({ day, completed, isToday }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <div aria-label={`${day}: ${completed ? 'completed' : 'pending'}`} style={{
        width: '52px', height: '52px', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: completed
          ? 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)'
          : 'var(--surface-container-low)',
        boxShadow: completed
          ? '0 8px 20px -6px rgba(183,16,42,0.35)'
          : 'inset 6px 6px 12px rgba(0,0,0,0.05), inset -6px -6px 12px rgba(255,255,255,0.8)',
        border: isToday && !completed ? '2px dashed var(--primary)' : 'none',
      }}>
        {completed
          ? <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff', fontSize: '22px' }}>check</span>
          : <span className="material-symbols-outlined" style={{ color: 'var(--outline-variant)', fontSize: '18px' }}>lock</span>}
      </div>
      <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.65rem', fontWeight: 700, color: completed ? 'var(--on-surface)' : 'var(--on-surface-variant)' }}>{day}</span>
    </div>
  );
}

function MealCard({ meal, mealLog, onLog }) {
  const [inputVal, setInputVal] = useState('');
  const logged = mealLog?.[meal.key];

  function handleConfirm() {
    if (!inputVal.trim()) return;
    onLog(meal.key, inputVal.trim());
    setInputVal('');
  }

  return (
    <article className="clay-card" style={{ background: '#fff', borderRadius: '1rem', padding: '1.5rem', borderTop: `4px solid ${meal.color}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
        <span className="material-symbols-outlined symbol-fill" style={{ color: meal.color, fontSize: '22px' }}>{meal.icon}</span>
        <h4 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)' }}>{meal.label}</h4>
        {logged && <span style={{ marginLeft: 'auto', background: 'rgba(34,197,94,0.1)', color: '#16a34a', fontFamily: 'var(--font-label)', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '999px' }}>✓ Logged</span>}
      </div>
      <div style={{ background: 'var(--surface-container-low)', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1rem' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: meal.color, marginBottom: '0.4rem' }}>AI Suggestion</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--on-surface-variant)', lineHeight: 1.5 }}>
          {logged ? logged.description : meal.suggestion}
        </p>
      </div>
      {!logged && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div className="clay-debossed" style={{ background: 'var(--surface-container-low)', borderRadius: '0.6rem', padding: '0.75rem' }}>
            <input
              type="text" value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleConfirm()}
              placeholder="Log your meal..."
              aria-label={`Log ${meal.label}`}
              style={{ width: '100%', fontSize: '0.85rem', fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--on-surface)' }}
            />
          </div>
          <button onClick={handleConfirm} style={{
            width: '100%', padding: '0.6rem', border: 'none', cursor: 'pointer',
            background: 'rgba(183,16,42,0.07)', borderRadius: '0.6rem',
            fontFamily: 'var(--font-label)', fontSize: '0.8rem', fontWeight: 700, color: meal.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
            Confirm Meal
          </button>
        </div>
      )}
    </article>
  );
}

export default function PlannerPage({ wallet }) {
  const navigate = useNavigate();
  const { streak, meals, weekDays, logMeal, canMint, isMinting, mintToken, mintSuccess } = useStreak(wallet.address);
  const todayKey = new Date().toISOString().split('T')[0];
  const todayMeals = meals[todayKey] || {};

  return (
    <main style={{ paddingTop: '80px' }}>
      <div style={{ padding: '3rem 0' }}>
        <div className="container-xl">
          {/* Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', gap: '1rem' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, color: 'var(--on-surface)', letterSpacing: '-0.03em', marginBottom: '0.35rem' }}>Precision Planner</h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface-variant)', fontWeight: 500 }}>Optimize your metabolic health with AI-driven scheduling.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button className="clay-embossed" style={{ background: 'var(--surface-container-low)', border: 'none', cursor: 'pointer', padding: '0.75rem 1.5rem', borderRadius: '0.875rem', fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--on-surface)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '18px' }}>sync</span>
                Sync Wearables
              </button>
              <button onClick={() => navigate('/assistant')} style={{ background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)', color: '#fff', border: 'none', cursor: 'pointer', padding: '0.75rem 1.5rem', borderRadius: '0.875rem', fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: '0.85rem', boxShadow: '0 8px 20px -6px rgba(183,16,42,0.35)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="material-symbols-outlined symbol-fill" style={{ fontSize: '18px' }}>bolt</span>
                Ask AI Assistant
              </button>
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* Streak card */}
            <div className="clay-embossed" style={{ gridColumn: 'span 2', background: 'var(--surface-container-lowest)', borderRadius: '1.25rem', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.25rem' }}>7-Day Streak Tracker</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--on-surface-variant)', fontWeight: 500 }}>Complete daily health goals to earn HLIA tokens.</p>
                </div>
                <div style={{ background: 'rgba(255,178,191,0.2)', color: 'var(--secondary)', fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: '0.75rem', padding: '0.35rem 0.9rem', borderRadius: '999px', border: '1px solid rgba(255,178,191,0.4)' }}>
                  Streak: {streak.currentStreak} / 7 Days
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                {weekDays.map((dateKey, i) => (
                  <DayNode key={dateKey} day={DAYS_OF_WEEK[i]} completed={streak.days.includes(dateKey)} isToday={dateKey === todayKey} />
                ))}
              </div>
              {canMint && !mintSuccess && (
                <div style={{ marginTop: '1.5rem', background: 'linear-gradient(135deg, rgba(183,16,42,0.06), rgba(183,0,77,0.06))', borderRadius: '1rem', padding: '1.25rem', border: '1px solid rgba(255,218,216,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.2rem' }}>🎉 7-Day Streak Complete!</p>
                    <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.8rem', color: 'var(--on-surface-variant)' }}>Claim your 1 HLIA token reward now.</p>
                  </div>
                  <button onClick={mintToken} disabled={isMinting} style={{ background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)', color: '#fff', border: 'none', cursor: isMinting ? 'wait' : 'pointer', padding: '0.75rem 1.75rem', borderRadius: '0.875rem', fontFamily: 'var(--font-headline)', fontWeight: 700, boxShadow: '0 8px 20px -6px rgba(183,16,42,0.4)', opacity: isMinting ? 0.7 : 1 }}>
                    {isMinting ? 'Minting...' : 'Mint 1 HLIA Token'}
                  </button>
                </div>
              )}
              {mintSuccess && (
                <div style={{ marginTop: '1.5rem', background: 'rgba(34,197,94,0.08)', borderRadius: '1rem', padding: '1.25rem', border: '1px solid rgba(34,197,94,0.25)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, color: '#16a34a' }}>✅ 1 HLIA Token Minted to your wallet!</p>
                </div>
              )}
              {!wallet.isConnected && (
                <p style={{ marginTop: '1rem', fontFamily: 'var(--font-label)', fontSize: '0.8rem', color: 'var(--on-surface-variant)', fontStyle: 'italic', textAlign: 'center' }}>
                  Connect your MetaMask wallet to earn HLIA tokens.
                </p>
              )}
              <span aria-hidden="true" className="material-symbols-outlined" style={{ position: 'absolute', bottom: '-30px', right: '-30px', fontSize: '120px', color: 'var(--primary)', opacity: 0.04, pointerEvents: 'none' }}>drag_indicator</span>
            </div>

            {/* Token balance */}
            <div className="clay-embossed" style={{ background: 'var(--surface-container-lowest)', borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '0.875rem', background: 'linear-gradient(135deg, #b7102a 0%, #b7004d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined symbol-fill" style={{ color: '#fff', fontSize: '24px' }}>toll</span>
                </div>
                <span style={{ background: 'var(--primary-fixed)', fontFamily: 'var(--font-label)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.25rem 0.6rem', borderRadius: '0.35rem', color: 'var(--on-primary-fixed-variant)' }}>Available HLIA</span>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-headline)', fontSize: '2.75rem', fontWeight: 900, color: 'var(--on-surface)', letterSpacing: '-0.04em', lineHeight: 1 }}>{mintSuccess ? '1.00' : '0.00'}</span>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--on-surface-variant)', marginTop: '0.35rem' }}>~${mintSuccess ? '2.75' : '0.00'} USD</p>
              </div>
              <button onClick={mintToken} disabled={!canMint || isMinting} className="clay-debossed" style={{ width: '100%', marginTop: '1.5rem', padding: '0.75rem', background: 'var(--surface-container-low)', border: 'none', borderRadius: '0.875rem', cursor: canMint ? 'pointer' : 'default', fontFamily: 'var(--font-label)', fontSize: '0.85rem', fontWeight: 700, color: canMint ? 'var(--primary)' : 'var(--on-surface-variant)' }}>
                {canMint ? 'Claim Streak Reward' : `${Math.max(0, 7 - streak.currentStreak)} days until reward`}
              </button>
            </div>
          </div>

          {/* Meal Plan Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2.5rem 0 1.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--on-surface)', whiteSpace: 'nowrap' }}>Metabolic Fuel Plan</h2>
            <div style={{ height: '2px', flexGrow: 1, background: 'var(--surface-container-high)', borderRadius: '999px' }} />
          </div>

          {/* Meal cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {MEAL_TYPES.map(meal => (
              <MealCard key={meal.key} meal={meal} mealLog={todayMeals} onLog={logMeal} />
            ))}
          </div>

          {/* Health metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(0,104,96,0.04)', borderRadius: '1rem', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', border: '1px solid rgba(0,131,121,0.1)', position: 'relative', overflow: 'hidden' }}>
              <div className="clay-embossed" style={{ width: '72px', height: '72px', background: 'var(--tertiary-fixed)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span className="material-symbols-outlined symbol-fill" style={{ color: 'var(--tertiary)', fontSize: '36px' }}>ecg</span>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.3rem' }}>Optimal HRV Recovery</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>Your heart rate variability is up 12% today. Good time for high-intensity training.</p>
              </div>
              <span aria-hidden="true" className="material-symbols-outlined" style={{ position: 'absolute', top: '-18px', right: '-8px', fontSize: '60px', color: 'var(--tertiary-container)', opacity: 0.4, pointerEvents: 'none' }}>genetics</span>
            </div>
            <div style={{ background: 'rgba(183,0,77,0.03)', borderRadius: '1rem', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', border: '1px solid rgba(183,0,77,0.08)', position: 'relative', overflow: 'hidden' }}>
              <div className="clay-embossed" style={{ width: '72px', height: '72px', background: 'var(--secondary-fixed)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span className="material-symbols-outlined symbol-fill" style={{ color: 'var(--secondary)', fontSize: '36px' }}>water_drop</span>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.3rem' }}>Hydration Threshold</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>You need 800ml more before 6 PM to hit your metabolic efficiency goal.</p>
              </div>
              <span aria-hidden="true" className="material-symbols-outlined" style={{ position: 'absolute', top: '-18px', right: '-8px', fontSize: '60px', color: 'var(--secondary-container)', opacity: 0.35, pointerEvents: 'none' }}>bubble_chart</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
