import { Routes } from '@angular/router';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent, title: 'cells_dividing' },
  { path: 'home', component: AboutComponent, title: 'About - cells_dividing' },
  { path: 'about', component: AboutComponent, title: 'About - cells_dividing' },
  { path: 'skills', component: SkillsComponent, title: 'Skills - cells_dividing' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects - cells_dividing' },
  { path: 'contact', component: ContactComponent, title: 'Contact - cells_dividing' },
  { path: '**', redirectTo: '' }
];

