// lib/analytics.js - Copy this to your project
'use client';
import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const TRACKING_ID = 'cc_9OuHyTam2FHQ';
const ENDPOINT = 'http://localhost:3000/api/analytics/collect';

export function useAnalytics() {
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
  
  return { track };
}