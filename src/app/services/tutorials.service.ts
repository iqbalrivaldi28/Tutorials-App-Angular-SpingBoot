import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TutorialsService {
  BASE_URL = environment.BASE_URL;

  constructor(private httpClient: HttpClient) {}

  getAllTutorial(): Observable<any> {
    return this.httpClient.get<any>(`${this.BASE_URL}/tutorials`);
  }


  
}
