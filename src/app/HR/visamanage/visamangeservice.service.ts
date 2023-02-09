import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { Visa } from 'src/app/models/ui-models/visa.model';
@Injectable({
  providedIn: 'root'
})
export class VisamangeserviceService {

  private baseApiUrl = 'https://localhost:7105';
  constructor(private httpClient: HttpClient) { }
  getVisas(): Observable<Visa[]>{
    return this.httpClient.get<Visa[]>(this.baseApiUrl + 'hr/getvisas');
  }
}
