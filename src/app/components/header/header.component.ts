import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <nav class="header-nav" aria-label="Main Navigation">
        <a routerLink="/about" routerLinkActive="active" class="home-btn nav-btn" aria-label="About"></a>
        <a routerLink="/skills" routerLinkActive="active" class="skills-btn nav-btn" aria-label="Skills"></a>
        <a routerLink="/projects" routerLinkActive="active" class="projects-btn nav-btn" aria-label="Projects"></a>
        <a routerLink="/contact" routerLinkActive="active" class="contact-btn nav-btn" aria-label="Contact"></a>
      </nav>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
