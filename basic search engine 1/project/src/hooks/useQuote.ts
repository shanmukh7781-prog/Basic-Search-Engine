import { useState, useEffect } from 'react';

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  }
];

export function useQuote() {
  const [dailyQuote, setDailyQuote] = useState({ quote: '', author: '' });

  useEffect(() => {
    // Get day of year to ensure same quote shows all day
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now as any) - (start as any);
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Use day of year to select quote
    const index = dayOfYear % quotes.length;
    setDailyQuote(quotes[index]);
  }, []);

  return dailyQuote;
}