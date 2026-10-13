import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  inject
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SideBannersComponent } from '../../components/side-banners/side-banners.component';
import { WingHeaderComponent } from '../../components/wing-header/wing-header.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SideBannersComponent, WingHeaderComponent],
  template: `
    <div class="home-content">
      <app-side-banners />
      <div class="home-content-inner-skills">
        <app-wing-header />
        <br><br>
        <div class="home-text-bg-skills">
          <div class="skills-layout">
            <div class="skills-copy">
              <p class="skills-copy-placeholder" aria-hidden="true" [innerHTML]="placeholderHtml"></p>
              <p class="skills-copy-typing" [innerHTML]="renderedHtml"></p>
            </div>
            <div class="mascot-container">
              <img src="/images/mascot_skills.gif" alt="Skills Mascot" class="mascot-image">
            </div>
          </div>
        </div>
        <br><br>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit, OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly cdr = inject(ChangeDetectorRef);

  private readonly fullText = `Some of the core skills I developed over the years:


CORE PROGRAMMING:
  ├─ OOP (Python, Java).......▓▓▓▓▓▓▓▓▓▓░ 95%
  ├─ TypeScript...............▓▓▓▓▓▓▓▓░░░ 85%
  ├─ JavaScript/ES6+..........▓▓▓▓▓▓▓▓░░░ 80%
  └─ SQL......................▓▓▓▓▓▓▓▓░░░ 75%

WEB / DESIGN:
  ├─ Pixel Art................▓▓▓▓▓▓▓▓▓▓░ 95%
  ├─ UI/UX Principles.........▓▓▓▓▓▓▓▓░░░ 75%
  └─ Animation (CSS/JS).......▓▓▓▓▓░░░░░░ 50%

BACKEND / SYSTEMS:
  ├─ Node.js..................▓▓▓▓▓▓▓▓░░░ 80%
  ├─ Git......................▓▓▓▓▓▓▓▓░░░ 85%
  ├─ Microservice Arch........▓▓▓▓▓▓▓▓░░░ 75%
  ├─ CLI Wizardry.............▓▓▓▓▓▓▓▓▓░░ 90%
  └─ Browser DevTools.........▓▓▓▓▓▓▓▓▓▓░ 99%

HARDWARE:
  ├─ Digital Logic / FPGA.....▓▓▓▓▓▓░░░░░ 65%
  └─ Embedded C/Assembly......▓▓▓▓▓▓░░░░░ 60%`;

  renderedHtml: SafeHtml = '';
  placeholderHtml: SafeHtml = '';
  private currentIndex = 0;
  private isTypingComplete = false;
  private cursorVisible = true;
  private typeTimeoutId?: number;
  private blinkIntervalId?: number;

  ngOnInit(): void {
    this.placeholderHtml = this.sanitizer.bypassSecurityTrustHtml(
      this.formatText(this.fullText, false)
    );

    const step = () => {
      if (this.currentIndex < this.fullText.length) {
        this.currentIndex++;
        this.updateView();
        this.typeTimeoutId = window.setTimeout(step, 4);
      } else {
        this.isTypingComplete = true;
        this.updateView();
      }
    };
    step();

    this.blinkIntervalId = window.setInterval(() => {
      if (!this.isTypingComplete) {
        this.cursorVisible = !this.cursorVisible;
        this.updateView();
      }
    }, 500);
  }

  ngOnDestroy(): void {
    if (this.typeTimeoutId) window.clearTimeout(this.typeTimeoutId);
    if (this.blinkIntervalId) window.clearInterval(this.blinkIntervalId);
  }

  private updateView(): void {
    const textSlice = this.fullText.substring(0, this.currentIndex);
    const htmlString = this.formatText(
      textSlice,
      !this.isTypingComplete && this.cursorVisible
    );
    this.renderedHtml = this.sanitizer.bypassSecurityTrustHtml(htmlString);
    this.cdr.markForCheck();
  }

  private formatText(raw: string, showCursor: boolean): string {
    const lines = raw.split('\n');
    for (let j = 0; j < lines.length; j++) {
      let line = lines[j];

      if (line.includes('▓') || line.includes('▒') || line.includes('░')) {
        line = line.replace(/([▓▒░]+)/g, '<span class="progress-bar">$1</span>');
      }

      lines[j] = line;
    }

    let out = lines.join('<br>');
    if (showCursor) {
      out += '<span style="border-left: 10px solid #ffffff; margin-left: 2px;"></span>';
    }
    return out;
  }
}
