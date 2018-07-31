import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class PassengerService {
  public API = '//localhost:8080/api';
  public PASSENGER_API = this.API + '/passengers';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.PASSENGER_API)  
  }

  //not in use yet but could be added
  getAllFromBusCompanyId(busCompanyId: string): Observable<any>{
    return this.http.get(this.API +  '/' + "passengersById" + '/' + busCompanyId);
  }

  get(id: string) {
    return this.http.get(this.PASSENGER_API + '/' + id);
  }

  save(passenger: any): Observable<any> {
    let result: Observable<Object>;
    if (passenger['href']) {
      result = this.http.put(this.PASSENGER_API+ '/' + passenger.href, passenger);
    } else {
      result = this.http.post(this.PASSENGER_API, passenger);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(this.PASSENGER_API + '/' + href);
  }

}
