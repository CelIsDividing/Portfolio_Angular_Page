import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the projects component', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render all 7 projects', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectCards = compiled.querySelectorAll('.project-card');
    expect(projectCards.length).toBe(7);
  });

  it('should filter projects by technology', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;

    component.selectedTechnologies = ['Python'];

    expect(component.filteredProjects.length).toBe(2);
    expect(component.filteredProjects.every((project) => project.technologies.includes('Python'))).toBe(true);

    component.selectedTechnologies = ['Python', 'HTML'];

    expect(component.filteredProjects.length).toBe(1);
    expect(component.filteredProjects[0].title).toBe('FPGA Visualization Tool');
  });
});
