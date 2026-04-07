import { useState, useEffect, useCallback } from 'react';

const STREAK_KEY = 'healia_streak';
const MEALS_KEY = 'healia_meals';

function getTodayKey() {
  return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
}

function getInitialStreak() {
  try {
    const saved = localStorage.getItem(STREAK_KEY);
    return saved ? JSON.parse(saved) : { days: [], currentStreak: 0, lastLogged: null };
  } catch {
    return { days: [], currentStreak: 0, lastLogged: null };
  }
}

function getInitialMeals() {
  try {
    const saved = localStorage.getItem(MEALS_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export function useStreak(walletAddress) {
  const [streak, setStreak] = useState(getInitialStreak);
  const [meals, setMeals] = useState(getInitialMeals);
  const [canMint, setCanMint] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [mintSuccess, setMintSuccess] = useState(false);

  // Derive week days (Mon-Sun of current week)
  const weekDays = (() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0=Sun
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return d.toISOString().split('T')[0];
    });
  })();

  const logMeal = useCallback((mealType, description) => {
    const today = getTodayKey();
    setMeals(prev => {
      const updated = {
        ...prev,
        [today]: {
          ...(prev[today] || {}),
          [mealType]: { description, loggedAt: new Date().toISOString() },
        },
      };
      localStorage.setItem(MEALS_KEY, JSON.stringify(updated));
      return updated;
    });

    // Mark today as completed if at least one meal logged
    setStreak(prev => {
      const alreadyLogged = prev.days.includes(today);
      if (alreadyLogged) return prev;
      const updatedDays = [...prev.days, today];
      // Calculate current consecutive streak
      let count = 0;
      const check = new Date();
      while (true) {
        const key = check.toISOString().split('T')[0];
        if (updatedDays.includes(key)) {
          count++;
          check.setDate(check.getDate() - 1);
        } else break;
      }
      const updated = { days: updatedDays, currentStreak: count, lastLogged: today };
      localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  useEffect(() => {
    setCanMint(streak.currentStreak >= 7 && !!walletAddress && !mintSuccess);
  }, [streak.currentStreak, walletAddress, mintSuccess]);

  const mintToken = useCallback(async () => {
    if (!walletAddress || !canMint) return;
    setIsMinting(true);
    try {
      // Simulate Sepolia contract call (stub — replace with real contract address + ABI)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMintSuccess(true);
      setCanMint(false);
    } catch (err) {
      console.error('Mint failed:', err);
    } finally {
      setIsMinting(false);
    }
  }, [walletAddress, canMint]);

  const isTodayLogged = meals[getTodayKey()] && Object.keys(meals[getTodayKey()]).length > 0;

  return {
    streak,
    meals,
    weekDays,
    logMeal,
    canMint,
    isMinting,
    mintToken,
    mintSuccess,
    isTodayLogged,
  };
}
