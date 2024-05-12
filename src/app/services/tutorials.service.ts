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

  postData(body: any) {
    return this.httpClient.post(`${this.BASE_URL}/tutorials`, body);
  }

  deleteData(id: string) {
    return this.httpClient.delete(`${this.BASE_URL}/tutorials/${id}`);
  }

  updateData(body: any) {
    return this.httpClient.put(`${this.BASE_URL}/tutorials`, body);
  }

  getDataById(id: string) {
    return this.httpClient.get(`${this.BASE_URL}/tutorials/${id}`);
  }
}
