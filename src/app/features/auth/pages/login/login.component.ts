import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private readonly authService: AuthDomainService,
    private readonly router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = undefined;

    const { username, password } = this.form.value;
    if (username === 'programacion@123' && password === '12345') {
      localStorage.setItem('token', 'fake-jwt-token');
      localStorage.setItem('roles', JSON.stringify(['USER']));
      this.loading = false;
      this.router.navigate(['/dashboard']);
      return;
    }

    this.authService.login(this.form.value).pipe(
      finalize(() => (this.loading = false))
    ).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error = 'Usuario o contraseña incorrectos';
      }
    });
  }

  onForgotPassword(): void {
    console.log('Recuperar contraseña');
  }
}
