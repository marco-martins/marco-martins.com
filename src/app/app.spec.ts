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

  it('initializes Plausible after rendering', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect(plausible.init).toHaveBeenCalledExactlyOnceWith(
      'marco-martins.com',
      'https://plausible.marco-martins.com/api/event',
    );
  });
});
