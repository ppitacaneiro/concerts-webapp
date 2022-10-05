import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class GeopositionService {

  private apikey:string = 'c5f3bb6343af31bad2224c42ae8bbeb4';
  private baseUrl:string = 'http://api.positionstack.com/v1/forward';

  constructor(private httpClient:HttpClient) { }

  getCoorsByAddress(address:string) : Observable<Location[]>{
    return this.httpClient.get<Location[]>(`${this.baseUrl}?access_key=${this.apikey}&query=${address}`);
  }

}
