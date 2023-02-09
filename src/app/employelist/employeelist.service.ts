import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { HrEmployee } from '../models/ui-models/hrEmployee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {

  private baseApiUrl = 'https://localhost:7105';
  constructor(private httpClient: HttpClient) { }
  getEmployees(): Observable<HrEmployee[]>{
    return this.httpClient.get<HrEmployee[]>(this.baseApiUrl + '/hr/getemployees');
  }
}
