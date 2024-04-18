import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';

@Injectable({
  providedIn: 'root'
})
export class ModelsApiService {

  constructor(private http: HttpClient) { }


  getList(): Observable<ModelListItemDto[]> {
    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models');
    // .subscribe((response) => {
    //   console.log(response);
    // });
  }

  //subscribe'ın çalışma şekli
  // subscribe(next: (value: Object) => void){
  //   //wait for the response
  //   //when the response is ready, call next
  //   const response ={}
  //   const response2 = next(response);
  // }
}
