import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../../core/models/auth.model';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequest } from '../models/login-request.model';
import { RegisterRequest } from '../models/register-request.model';

@Injectable({ providedIn: 'root' })
export class AuthDomainService {
  constructor(private readonly authService: AuthService) {}

  login(payload: LoginRequest): Observable<AuthResponse> {
    return this.authService.login(payload);
  }

  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.authService.register(payload);
  }
}
