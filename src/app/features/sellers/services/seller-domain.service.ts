import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Seller } from '../models/seller.model';

@Injectable({ providedIn: 'root' })
export class SellerDomainService {
  constructor(private readonly apiService: ApiService) {}

  list(): Observable<Seller[]> {
    return this.apiService.get<Seller[]>('sellers');
  }
}
