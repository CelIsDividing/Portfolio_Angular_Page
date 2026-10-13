import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-side-banners',
  standalone: true,
  template: `
    <div class="banner_left">
      <img src="/images/banner_left.gif" alt="Left banner">
    </div>
    <div class="banner_right">
      <img src="/images/banner_right.gif" alt="Right banner">
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBannersComponent {}
