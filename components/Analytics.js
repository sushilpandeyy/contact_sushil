// components/Analytics.js - ONE FILE, ZERO DEPENDENCIES
'use client';
import { useEffect, useCallback, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';

// Configuration
const TRACKING_ID = 'cc_geXi8jd0DTdi';
const ENDPOINT = 'http://localhost:3000/api/analytics/collect';

// Analytics Context
const AnalyticsContext = createContext(null);

// Analytics Provider Component
export function AnalyticsProvider({ children }) {
  const pathname = usePathname();
  
  const track = useCallback((event, properties = {}) => {
    if (typeof window === 'undefined') return;
    
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        trackingId: TRACKING_ID,
        event,
        url: window.location.href,
        referrer: document.referrer,
        properties
      })
    }).catch(() => {}); // Silent fail
  }, []);
  
  // Auto-track pageviews
  useEffect(() => {
    track('pageview');
  }, [pathname, track]);
  
  return (
    <AnalyticsContext.Provider value={{ track }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

// Hook to use analytics
export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  return context || { track: () => {} }; // Fallback if provider missing
}

// Optional: Direct tracking without context (for one-off usage)
export function trackEvent(event, properties = {}) {
  if (typeof window === 'undefined') return;
  
  fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      trackingId: TRACKING_ID,
      event,
      url: window.location.href,
      referrer: document.referrer,
      properties
    })
  }).catch(() => {});
}