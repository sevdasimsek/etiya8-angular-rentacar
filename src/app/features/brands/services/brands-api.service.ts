import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandListItemDto } from '../models/brand-list-item-dto';

@Injectable({
  providedIn: 'root'
})
export class BrandsApiService {

  constructor(private http: HttpClient) { }

  //refactory => magic string
  getList(): Observable<BrandListItemDto[]> {
    return this.http.get<BrandListItemDto[]>('http://localhost:3000/brands');
  }
}
