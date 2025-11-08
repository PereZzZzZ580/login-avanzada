import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly baseUrl = '/api/users';

  constructor(private readonly http: HttpClient) {}

  profile(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/me`);
  }
}
