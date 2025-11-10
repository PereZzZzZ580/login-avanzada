import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { AuthDomainService } from '../../services/auth-domain.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  error?: string;
  loading = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthDomainService
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = undefined;

    this.authService.login(this.form.value).pipe(
      finalize(() => this.loading = false)
    ).subscribe({
      next: () => console.log('Login correcto'),
      error: () => this.error = 'Usuario o contraseña incorrectos'
    });
  }

  onForgotPassword(): void {
    console.log('Recuperar contraseña');
  }
}

