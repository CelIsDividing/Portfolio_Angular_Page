import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMenuComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the main menu component', () => {
    const fixture = TestBed.createComponent(MainMenuComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render 4 navigation buttons', () => {
    const fixture = TestBed.createComponent(MainMenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navButtons = compiled.querySelectorAll('.nav-btn');
    expect(navButtons.length).toBe(4);
  });
});
