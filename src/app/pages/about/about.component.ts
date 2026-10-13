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
  selector: 'app-about',
  standalone: true,
  imports: [SideBannersComponent, WingHeaderComponent],
  template: `
    <div class="home-content">
      <app-side-banners />
      <div class="home-content-inner">
        <app-wing-header />
        <br><br>
        <p
          class="home-text-bg"
          [innerHTML]="renderedHtml"
        ></p>
        <br><br>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit, OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly cdr = inject(ChangeDetectorRef);

  private readonly fullText = `I've been programming for as long as I can remember. 


It all started with QBasic and Pascal back in the day, and 
I've been hooked ever since. Over the years, I've worked 
with all sorts of languages - Java, JavaScript, C++, 
Python, SQL - you name it.


If you didn't already guess, I specialize in backend 
development, but I've dipped my fingers in some frontend 
as well.

(like this portfolio page I made)


When I'm not coding, I love drawing pixel art and making 
video games. I've used both GameMaker Studio and Unreal Engine 
for my projects. There's something really satisfying about 
building entire worlds from scratch and watching people 
enjoy what you've created.

(currently working on my second one so far)


I'm always keeping myself bussy with something new, whether 
it's a programming challenge or an art project. I just enjoy 
the process of making things work and bringing at least some 
of my ideas to life.
`;

  renderedHtml: SafeHtml = '';
  private currentIndex = 0;
  private isTypingComplete = false;
  private cursorVisible = true;
  private typeTimeoutId?: number;
  private blinkIntervalId?: number;

  ngOnInit(): void {
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

      line = line
        .replace('(like this portfolio page I made)', '<span class="gray-text">(like this portfolio page I made)</span>')
        .replace('(currently working on my second one so far)', '<span class="gray-text">(currently working on my second one so far)</span>')
        .replace('QBasic', '<span class="pink-text">QBasic</span>')
        .replace('Pascal', '<span class="pink-text">Pascal</span>')
        .replace(/\bJava\b/, '<span class="turquoise-text">Java</span>')
        .replace('JavaScript', '<span class="turquoise-text">JavaScript</span>')
        .replace('C++', '<span class="turquoise-text">C++</span>')
        .replace('Python', '<span class="turquoise-text">Python</span>')
        .replace('SQL', '<span class="turquoise-text">SQL</span>')
        .replace('I specialize in backend', '<span class="turquoise-text">I specialize in backend</span>')
        .replace('development', '<span class="turquoise-text">development</span>')
        .replace('I love drawing pixel art and making', '<span class="turquoise-text">I love drawing pixel art and making</span>')
        .replace('video games', '<span class="turquoise-text">video games</span>')
        .replace('GameMaker Studio', '<span class="pink-text">GameMaker Studio</span>')
        .replace('Unreal Engine', '<span class="pink-text">Unreal Engine</span>');

      lines[j] = line;
    }

    let out = lines.join('<br>');
    if (showCursor) {
      out += '<span style="border-left: 10px solid #ffffff; margin-left: 2px;"></span>';
    }
    return out;
  }
}
