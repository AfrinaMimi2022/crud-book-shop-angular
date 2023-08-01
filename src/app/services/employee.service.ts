import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  // private _http: HttpClient -inject a service 
  constructor(private _http: HttpClient) { }
  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/profile', data)
  }
}
