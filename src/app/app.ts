import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, Event } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('portfolio-app');
  protected readonly showHeader = signal(false);

  private readonly router = inject(Router);
  private navSub?: Subscription;

  ngOnInit(): void {
    this.updateHeaderVisibility(this.router.url);

    this.navSub = this.router.events
      .pipe(filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateHeaderVisibility(event.urlAfterRedirects || event.url);
      });
  }

  ngOnDestroy(): void {
    this.navSub?.unsubscribe();
  }

  private updateHeaderVisibility(url: string): void {
    const cleanUrl = url.split('?')[0].split('#')[0];
    const isRoot = cleanUrl === '/' || cleanUrl === '';
    this.showHeader.set(!isRoot);
  }
}


