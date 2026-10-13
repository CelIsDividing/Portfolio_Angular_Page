import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SideBannersComponent } from '../../components/side-banners/side-banners.component';

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, SideBannersComponent],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
    botcheck: [false]
  });

  readonly isSubmitting = signal(false);
  readonly submitBtnText = signal('[ SEND ]');
  readonly statusMessage = signal<string | null>(null);
  readonly statusColor = signal<string>('#38c533');

  onSubmit(): void {
    if (this.contactForm.invalid || this.isSubmitting()) return;
    const { name, email, message, botcheck } = this.contactForm.value;
    if (botcheck) return;

    this.isSubmitting.set(true);
    this.submitBtnText.set('[ SENDING... ]');
    this.statusMessage.set(null);

    const formData = new FormData();
    formData.append('access_key', '3357cf90-32b4-4e28-88f7-0e38080e592a');
    formData.append('subject', 'New Contact Form Submission');
    formData.append('name', name);
    formData.append('from_name', name);
    formData.append('email', email);
    formData.append('reply_to', email);
    formData.append('message', message);
    formData.append('timestamp', new Date().toISOString());

    this.http.post<Web3FormsResponse>('https://api.web3forms.com/submit', formData).subscribe({
      next: (res) => {
        if (res && res.success) {
          this.statusMessage.set('> MESSAGE SENT SUCCESSFULLY!');
          this.statusColor.set('#38c533');
          this.contactForm.reset();
        } else {
          this.statusMessage.set(`> ERROR: ${res.message || 'Form submission failed'}`);
          this.statusColor.set('#ff3333');
        }
        this.finishSubmission();
      },
      error: () => {
        this.statusMessage.set('> NETWORK ERROR - PLEASE TRY AGAIN');
        this.statusColor.set('#ff3333');
        this.finishSubmission();
      }
    });
  }

  private finishSubmission(): void {
    this.isSubmitting.set(false);
    this.submitBtnText.set('[ SEND ]');
  }
}
