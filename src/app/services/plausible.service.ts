import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Service, inject } from '@angular/core';
import type { track as trackEvent } from '@plausible-analytics/tracker';

type EventProperties = Record<string, string | number | boolean>;

@Service()
export class PlausibleService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private isInitialized = false;
  private initialization: Promise<void> | null = null;
  private track: typeof trackEvent | null = null;

  async init(domain: string, endpoint: string): Promise<void> {
    if (!this.isBrowser || this.isInitialized) return;

    this.initialization ??= this.initializeTracker(domain, endpoint);
    return this.initialization;
  }

  // track custom events
  trackSignUp(email: string): void {
    this.trackEvent('submit_sign_up', { email });
  }

  trackSignIn(email: string): void {
    this.trackEvent('submit_sign_in', { email });
  }

  private async initializeTracker(domain: string, endpoint: string): Promise<void> {
    try {
      const { init, track } = await import('@plausible-analytics/tracker');
      init({ domain, endpoint });
      this.track = track;
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize Plausible analytics:', error);
    } finally {
      this.initialization = null;
    }
  }

  private trackEvent(name: string, props?: EventProperties): void {
    if (!this.isBrowser) return;

    if (!this.track) {
      console.warn('Plausible tracker not initialized');
      return;
    }

    this.track(name, {
      props: props
        ? Object.fromEntries(Object.entries(props).map(([key, value]) => [key, String(value)]))
        : undefined,
      callback: (result) => {
        if (result && 'error' in result) {
          console.error('Error handling Plausible request:', result.error);
        }
      },
    });
  }
}
