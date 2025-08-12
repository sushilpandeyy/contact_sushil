// components/AnalyticsProvider.js - Add to your root layout
'use client';
import { useAnalytics } from '@/lib/analytics';

export default function AnalyticsProvider({ children }) {
  useAnalytics(); // This handles automatic pageview tracking
  return children;
}