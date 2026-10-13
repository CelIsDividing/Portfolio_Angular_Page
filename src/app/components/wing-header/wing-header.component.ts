import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wing-header',
  standalone: true,
  template: `
    <div class="header-images">
      <img src="/images/wing_left.gif" alt="Wing Left">
      <img src="/images/wing_center.gif" alt="Wing Center">
      <img src="/images/wing_right.gif" alt="Wing Right">
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WingHeaderComponent {}
