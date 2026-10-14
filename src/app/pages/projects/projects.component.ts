import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, inject } from '@angular/core';
import { SideBannersComponent } from '../../components/side-banners/side-banners.component';
import { WingHeaderComponent } from '../../components/wing-header/wing-header.component';
import { PROJECTS_DATA } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SideBannersComponent, WingHeaderComponent],
  template: `
    <div class="home-content">
      <app-side-banners />

      <div class="home-content-inner home-content-inner-projects">
        <app-wing-header />
        <br><br>

        <div class="projects-filter">
          <button class="projects-filter-toggle" type="button" [class.projects-filter-toggle-open]="filterOpen" [attr.aria-expanded]="filterOpen" aria-controls="technology-filter-panel" (click)="filterOpen = !filterOpen">
            Filters
            <span class="projects-filter-arrow" aria-hidden="true"></span>
          </button>
          @if (selectedTechnologies.length > 0) {
            <span class="projects-filter-count">{{ selectedTechnologies.length }} selected</span>
          }
        </div>

        @if (filterOpen) {
          <div id="technology-filter-panel" class="technology-filter-panel" aria-label="Filter by technologies">
            @for (technology of technologyOptions; track technology) {
              <button class="technology-filter-tag" [class.technology-filter-tag-selected]="selectedTechnologies.includes(technology)" type="button" (click)="toggleTechnology(technology)">
                {{ technology }}
              </button>
            }
            @if (selectedTechnologies.length > 0) {
              <button class="technology-filter-clear" type="button" (click)="clearTechnologyFilters()">Clear</button>
            }
          </div>
        }

        <div class="projects-grid">
          @for (project of filteredProjects; track project.title) {
            <article class="project-card">
              <button class="project-card-trigger" type="button" (click)="openProject(project)" [attr.aria-label]="'Open ' + project.title + ' details'">
                <span class="project-card-image">
                  <img [src]="project.screenshot" [alt]="project.screenshotAlt">
                </span>
                <span class="project-card-title">{{ project.title }}</span>
              </button>
            </article>
          }
        </div>

        <div class="page-nav-links">
          <img src="/images/mascot.gif" alt="Portfolio Mascot">
          <p class="footer-text">You've reached the end.<br>More coming soon!</p>
        </div>
        <br><br><br>
      </div>

      @if (activeProject; as project) {
        <div class="project-modal-overlay" [class.project-modal-closing]="closing" (click)="closeProject()">
          <div class="project-modal" role="dialog" aria-modal="true" [attr.aria-label]="project.title" (click)="$event.stopPropagation()">
            <button class="project-modal-close" type="button" aria-label="Close project details" (click)="closeProject()">&times;</button>
            <div class="project-modal-inner">
              <div class="project-modal-media">
                <div class="project-carousel" aria-label="Project screenshots">
                  <img [src]="carouselImages[carouselIndex]" [alt]="project.screenshotAlt + ' ' + (carouselIndex + 1)" class="project-carousel-image">
                  @if (carouselImages.length > 1) {
                    <div class="carousel-indicators" aria-label="Choose project image">
                      @for (image of carouselImages; track image; let index = $index) {
                        <button class="carousel-indicator" [class.active]="index === carouselIndex" type="button" [attr.aria-label]="'Show image ' + (index + 1)" [attr.aria-current]="index === carouselIndex ? 'true' : null" (click)="showImage(index)"></button>
                      }
                    </div>
                  }
                </div>
                <div class="project-modal-toolbar">
                  <div class="project-links">
                    @if (project.downloadUrl) {
                      <a [href]="project.downloadUrl" class="project-link" target="_blank" rel="noopener">Preview</a>
                    }
                    @if (project.githubUrl) {
                      <a [href]="project.githubUrl" class="project-link" target="_blank" rel="noopener">GitHub</a>
                    }
                  </div>
                  <div class="project-tech" aria-label="Technologies used">
                    @for (tech of project.technologies; track tech) {
                      <span class="tech-tag">{{ tech }}</span>
                    }
                  </div>
                </div>
              </div>
              <div class="project-modal-copy">
                <h2 class="project-modal-title">{{ project.title }}</h2>
                <p class="project-modal-description">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  readonly projects = PROJECTS_DATA;
  readonly technologyOptions = [
    ...new Set(PROJECTS_DATA.flatMap((project) => project.technologies))
  ];
  selectedTechnologies: string[] = [];
  filterOpen = false;
  activeProject: Project | null = null;
  closing = false;
  carouselImages: string[] = [];
  carouselIndex = 0;
  private carouselIntervalId?: number;

  get filteredProjects(): Project[] {
    if (this.selectedTechnologies.length === 0) {
      return this.projects;
    }

    return this.projects.filter((project) => this.selectedTechnologies.every((technology) => project.technologies.includes(technology)));
  }

  toggleTechnology(technology: string): void {
    this.selectedTechnologies = this.selectedTechnologies.includes(technology)
      ? this.selectedTechnologies.filter((selected) => selected !== technology)
      : [...this.selectedTechnologies, technology];
    this.cdr.markForCheck();
  }

  clearTechnologyFilters(): void {
    this.selectedTechnologies = [];
    this.cdr.markForCheck();
  }

  openProject(project: Project): void {
    this.activeProject = project;
    this.carouselImages = project.images?.length ? project.images : [project.screenshot];
    this.carouselIndex = 0;
    this.startCarousel();
    this.setBodyScrollLocked(true);
    this.cdr.markForCheck();
  }

  closeProject(): void {
    if (!this.activeProject || this.closing) {
      return;
    }

    this.closing = true;
    this.stopCarousel();
    this.setBodyScrollLocked(false);
    window.setTimeout(() => {
      this.activeProject = null;
      this.closing = false;
      this.cdr.markForCheck();
    }, 250);
    this.cdr.markForCheck();
  }

  showImage(index: number): void {
    this.carouselIndex = index;
    this.cdr.markForCheck();
  }

  showNextImage(): void {
    this.carouselIndex = (this.carouselIndex + 1) % this.carouselImages.length;
    this.cdr.markForCheck();
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeProject();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
    this.setBodyScrollLocked(false);
  }

  private setBodyScrollLocked(locked: boolean): void {
    document.body.style.overflow = locked ? 'hidden' : '';
  }

  private startCarousel(): void {
    this.stopCarousel();
    if (this.carouselImages.length > 1) {
      this.carouselIntervalId = window.setInterval(() => this.showNextImage(), 4000);
    }
  }

  private stopCarousel(): void {
    if (this.carouselIntervalId) {
      window.clearInterval(this.carouselIntervalId);
      this.carouselIntervalId = undefined;
    }
  }
}
