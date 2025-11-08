import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductDomainService {
  constructor(private readonly apiService: ApiService) {}

  list(): Observable<Product[]> {
    return this.apiService.get<Product[]>('products');
  }
}
