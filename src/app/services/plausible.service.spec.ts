import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { PlausibleService } from './plausible.service';

const tracker = vi.hoisted(() => ({ init: vi.fn(), track: vi.fn() }));

vi.mock('@plausible-analytics/tracker', () => tracker);

describe('PlausibleService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    });
  });

  afterEach(() => vi.restoreAllMocks());

  it('initializes once, including concurrent calls', async () => {
    const service = TestBed.inject(PlausibleService);

    await Promise.all([
      service.init('marco-martins.com', '/api/event'),
      service.init('marco-martins.com', '/api/event'),
    ]);
    await service.init('marco-martins.com', '/api/event');

    expect(tracker.init).toHaveBeenCalledExactlyOnceWith({
      domain: 'marco-martins.com',
      endpoint: '/api/event',
    });
  });

  it('does not initialize or track events during SSR', async () => {
    TestBed.overrideProvider(PLATFORM_ID, { useValue: 'server' });
    const service = TestBed.inject(PlausibleService);

    await service.init('marco-martins.com', '/api/event');
    service.trackSignUp('example@example.com');
    service.trackSignIn('example@example.com');

    expect(tracker.init).not.toHaveBeenCalled();
    expect(tracker.track).not.toHaveBeenCalled();
  });

  it('warns and skips events before initialization', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    TestBed.inject(PlausibleService).trackSignIn('example@example.com');

    expect(warn).toHaveBeenCalledWith('Plausible tracker not initialized');
    expect(tracker.track).not.toHaveBeenCalled();
  });

  it('can retry initialization after a failure', async () => {
    const error = new Error('Tracker unavailable');
    tracker.init.mockImplementationOnce(() => {
      throw error;
    });
    const log = vi.spyOn(console, 'error').mockImplementation(() => {});
    const service = TestBed.inject(PlausibleService);

    await service.init('marco-martins.com', '/api/event');
    expect(log).toHaveBeenCalledWith('Failed to initialize Plausible analytics:', error);

    await service.init('marco-martins.com', '/api/event');
    service.trackSignIn('example@example.com');
    expect(tracker.init).toHaveBeenCalledTimes(2);
    expect(tracker.track).toHaveBeenCalledOnce();
  });

  it('sends the event names and properties from the supplied example', async () => {
    const service = TestBed.inject(PlausibleService);
    await service.init('marco-martins.com', '/api/event');

    service.trackSignUp('example@example.com');
    service.trackSignIn('example@example.com');

    expect(tracker.track).toHaveBeenNthCalledWith(1, 'submit_sign_up', {
      props: { email: 'example@example.com' },
      callback: expect.any(Function),
    });
    expect(tracker.track).toHaveBeenNthCalledWith(2, 'submit_sign_in', {
      props: { email: 'example@example.com' },
      callback: expect.any(Function),
    });
  });

  it('handles ignored events and reports request errors', async () => {
    const log = vi.spyOn(console, 'error').mockImplementation(() => {});
    const service = TestBed.inject(PlausibleService);
    await service.init('marco-martins.com', '/api/event');
    service.trackSignIn('example@example.com');
    const callback = tracker.track.mock.calls[0][1].callback;

    callback();
    callback({ status: 202 });
    expect(log).not.toHaveBeenCalled();

    const error = new Error('Request failed');
    callback({ error });
    expect(log).toHaveBeenCalledWith('Error handling Plausible request:', error);
  });
});
