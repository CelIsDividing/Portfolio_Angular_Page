import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the skills component', () => {
    const fixture = TestBed.createComponent(SkillsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render mascot image and skills container', () => {
    const fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const mascot = compiled.querySelector('.mascot-image');
    expect(mascot).toBeTruthy();
  });
});
