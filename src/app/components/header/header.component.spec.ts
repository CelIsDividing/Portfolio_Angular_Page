import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the header component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render navigation links for about, skills, projects, and contact', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navButtons = compiled.querySelectorAll('.nav-btn');
    expect(navButtons.length).toBe(4);
    expect(compiled.querySelector('.home-btn')).toBeTruthy();
    expect(compiled.querySelector('.skills-btn')).toBeTruthy();
    expect(compiled.querySelector('.projects-btn')).toBeTruthy();
    expect(compiled.querySelector('.contact-btn')).toBeTruthy();
  });
});
