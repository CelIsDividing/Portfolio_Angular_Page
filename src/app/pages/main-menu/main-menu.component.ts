import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideBannersComponent } from '../../components/side-banners/side-banners.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink, SideBannersComponent],
  template: `
    <div class="home-content main-menu-content">
      <app-side-banners />

      <div class="home-content-inner main-menu-inner">
        <img src="/images/title.gif" alt="cells_dividing" class="title">
        <div class="header-content">
          <a routerLink="/about" class="home-btn nav-btn" aria-label="About"></a>
          <a routerLink="/skills" class="skills-btn nav-btn" aria-label="Skills"></a>
          <a routerLink="/projects" class="projects-btn nav-btn" aria-label="Projects"></a>
          <a routerLink="/contact" class="contact-btn nav-btn" aria-label="Contact"></a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {}
