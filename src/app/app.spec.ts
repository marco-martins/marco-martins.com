import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { vi } from 'vitest';
import { PlausibleService } from './services/plausible.service';

describe('App', () => {
  const plausible = { init: vi.fn().mockResolvedValue(undefined) };

  beforeEach(async () => {
    plausible.init.mockClear();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: PlausibleService, useValue: plausible }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('places a skip link before navigation and targets a focusable main region', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const skipLink = element.querySelector('a');
    const main = element.querySelector('main');

    expect(skipLink?.textContent).toBe('Skip to content');
    expect(skipLink?.getAttribute('href')).toBe(`#${main?.id}`);
    expect(main?.getAttribute('tabindex')).toBe('-1');
    expect(main?.querySelector('header, footer')).toBeNull();
    expect(main?.querySelector('router-outlet')).not.toBeNull();
  });

  it('initializes Plausible after rendering', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect(plausible.init).toHaveBeenCalledExactlyOnceWith(
      'marco-martins.com',
      'https://plausible.marco-martins.com/api/event',
    );
  });
});
