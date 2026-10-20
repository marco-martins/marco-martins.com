import { ComponentFixture, TestBed } from '@angular/core/testing';
import HomeComponent from './home.component';
import { DataService } from './services/data.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('uses one descriptive main heading and named section headings', () => {
    const element: HTMLElement = fixture.nativeElement;
    const headings = element.querySelectorAll('h1');
    expect(headings).toHaveLength(1);
    expect(headings[0].textContent).toContain('Marco Martins');
    expect(headings[0].textContent).toContain('Senior Full Stack Engineer');

    const titles = [...element.querySelectorAll('h2')].map((heading) =>
      heading.textContent?.replace(/\s+/g, ' ').trim(),
    );
    expect(titles).toEqual([
      '01 / ABOUT ME',
      '02 / TECHNICAL SKILLS',
      '03 / PROJECTS & OPEN SOURCE',
      '04 / PROFESSIONAL EXPERIENCE',
      '05 / CONTACT',
    ]);

    for (const section of element.querySelectorAll('section[aria-labelledby]')) {
      const id = section.getAttribute('aria-labelledby');
      expect(section.querySelector(`#${id}`)?.matches('h1, h2')).toBe(true);
    }
  });

  it('gives each skill list the accessible name of its own group', () => {
    const element: HTMLElement = fixture.nativeElement;
    const skills = TestBed.inject(DataService).skills();
    const labels = [...element.querySelectorAll('.skill-tags')].map((list) =>
      list.getAttribute('aria-label'),
    );

    expect(labels).toEqual(skills.map((skill) => skill.tagsLabel));
  });
});
